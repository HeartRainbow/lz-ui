<template>
  <uvPopup
    v-model="showPop"
    position="bottom"
    v-bind="$attrs"
  >
    <div class="lz-picker">
      <div class="lz-picker-title">
        <div
          class="lz-picker-title-left"
          @click="cancleHandle"
        >
          {{ leftName }}
        </div>
        <slot name="title">
          <div class="lz-picker-title-center">
            {{ title }}
          </div>
        </slot>
        <div
          class="lz-picker-title-right"
          @click="confimHandle"
        >
          {{ rightName }}
        </div>
      </div>
      <div class="lz-picker-content">
        <div class="lz-picker-content-wrapper" />
        <PickerColumn
          v-for="(item,index) in calcList"
          :key="index"
          :list="item"
          :key-name="keyName"
          :label-name="labelName"
          :value="selectValue[index]"
          :columns-type="columnsType"
          @change="change($event,index)"
          @first-open="firstOpen($event,index)"
        />
      </div>
    </div>
  </uvPopup>
</template>

<script setup>

import { ref, inject, computed, watch } from 'vue'
import uvPopup from '../popup'
import PickerColumn from './picker-column.vue'
import { getColumnsType, formatCascadeColumns } from './utils.js'

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  title: {
    type: String
  },
  leftName: {
    type: String,
    default: '取消'
  },
  rightName: {
    type: String,
    default: '确定'
  },
  list: {
    type: Array,
    default: () => ([])
  },
  keyName: {
    type: [String, Number],
    default: 'value'
  },
  labelName: {
    type: [String, Number],
    default: 'label'
  },
  childrenName: {
    type: String,
    default: 'children'
  }
})
const emit = defineEmits(['update:modelValue', 'change', 'column-change', 'cancle', 'confim'])

const selectValue = computed(() => {
  const value = String(props.modelValue)
  const regex = /[\\/:\-\s]/
  if (regex.test(value)) {
    return value.split(/[\\/:\-\s]/)
  }
  return value.split(',')
})

const columnsType = computed(() =>
  getColumnsType(props.list, props.childrenName)
)

const calcList = computed(() => {
  const { list, labelName, keyName, childrenName } = props
  switch (columnsType.value) {
    case 'multiple':
      return list
    case 'cascade':
      return formatCascadeColumns(list, {
        label: labelName,
        value: keyName,
        children: childrenName
      }, temValue)
    default:
      return [list]
  }
})

const { props: parentProps, validateBlurOrChange } = inject('form-item', {})

const temValue = ref([])

watch(() => props.modelValue, (newValue) => {
  temValue.value = newValue.split(',')
}, {
  immediate: true
})

const showPop = ref(false)

const open = () => {
  showPop.value = true
}
const close = () => {
  showPop.value = false
}

function cancleHandle () {
  emit('cancle')
  showPop.value = false
}

function change (e, index) {
  temValue.value[index] = e
  temValue.value.join(',')
  emit('change', temValue.value.join(','))
  emit('column-change', {
    value: e,
    index
  })
}

function firstOpen (e, index) {
  temValue.value[index] = e
}

function confimHandle () {
  emit('confim', temValue.value.join(','))
  emit('update:modelValue', temValue.value.join(','))
  if (parentProps) {
    validateBlurOrChange('blur')
  }
  showPop.value = false
}
defineExpose({
  open,
  close
})
</script>
<script>
export default {
  name: 'UvPicker'
}
</script>

<style lang="scss">
:root {
  --lz-picker-title-btn-font-size: 14px;
  --lz-picker-title-font-size: 16px;
  --lz-picker-title-font-weight: 700;
  --lz-picker-title-color: #323233;
  --lz-picker-title-padding: 2px 0 12px;
  --lz-picker-title-left-text-color: #969799;
  --lz-picker-title-right-text-color: #576b95;
  --lz-picker-content-height: 230px;
  --lz-picker-content-wrapper-border-top-and-bottom: 1px solid #f7f8f9;
  --lz-picker-content-wrapper-box-shadow: 0 0 5px #f7f8f9;
}
.lz-picker {
  .lz-picker-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--lz-picker-title-padding);
    font-size: var(--lz-picker-title-btn-font-size);
    .lz-picker-title-left {
      color: var(--lz-picker-title-left-text-color);
    }
    .lz-picker-title-center {
      font-size: var(--lz-picker-title-font-size);
      font-weight: var(--lz-picker-title-font-weight);
      color: var(--lz-picker-title-color);
    }
    .lz-picker-title-right {
      color: var(--lz-picker-title-right-text-color);
    }
  }
  .lz-picker-content {
    position: relative;
    display: flex;
    overflow: hidden;
    height: var(--lz-picker-content-height);
    cursor: grab;
    .lz-picker-content-wrapper {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      height: 36px;
      border-top: var(--lz-picker-content-wrapper-border-top-and-bottom);
      border-bottom: var(--lz-picker-content-wrapper-border-top-and-bottom);
      box-shadow: var(--lz-picker-content-wrapper-box-shadow);
    }
  }
}
</style>
