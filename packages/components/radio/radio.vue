<template>
  <div
    class="lz-radio"
    ref="radioRef"
    :class="uvRadioClass"
    @click="change"
  >
    <div
      v-if="labelPosition==='left'"
      class="lz-radio-left"
    >
      <slot>
        {{ label }}
      </slot>
    </div>
    <div
      class="lz-radio-icon"
      :style="uvStyle"
      :class="[
        (parentProps?.shape || props.shape) === 'round' ? 'round' : '',
        context.isSelect?'active':''
      ]"
    >
      <lz-icon
        v-if="context.isSelect"
        name="select"
        :color="disabled?'#c8c9cc':'#fff'"
        size="18"
      />
    </div>
    <div
      v-if="labelPosition==='right'"
      class="lz-radio-right"
    >
      <slot>
        {{ label }}
      </slot>
    </div>
  </div>
</template>

<script setup>

import uvIcon from '../icon'
import { computed, ref, reactive, onMounted } from 'vue'
import { useParent } from '../../hooks/index'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  shape: {
    type: String,
    default: 'round'
  },
  label: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  checkedColor: {
    type: String
  },
  labelPosition: {
    type: String,
    default: 'right'
  },
  spaceBetween: {
    type: Boolean,
    default: false
  }

})

const radioRef = ref(null)

const context = reactive({
  $el: radioRef,
  label: props.label,
  isSelect: false
})

const { props: parentProps, updateItem, index } = useParent('radio-group', context)

onMounted(() => {
  if (parentProps && parentProps.modelValue === context.label) {
    context.isSelect = true
  }
})

const emit = defineEmits(['update:modelValue', 'change'])

const uvRadioClass = computed(() => {
  return [
    props.disabled ? 'lz-radio-disabled' : '',
    props.spaceBetween ? 'lz-radio-space-between' : ''
  ]
})
const uvStyle = computed(() => {
  return {
    border: context.isSelect ? `1px solid ${props.checkedColor || parentProps?.checkedColor}` : '',
    backgroundColor: context.isSelect ? `${props.checkedColor || parentProps?.checkedColor}` : '',
    width: `${parentProps?.iconSize || 18}px`,
    height: `${parentProps?.iconSize || 18}px`
  }
})
const change = () => {
  if (props.disabled) return
  if (parentProps && parentProps.modelValue) {
    updateItem(index.value)
  } else {
    context.isSelect = !context.isSelect
    emit('update:modelValue', !props.modelValue)
    emit('change', props.label)
  }
}
</script>
<script>
export default {
  name: 'UvRadio'
}
</script>

<style lang="scss">
:root {
  --lz-radio-icon-border: 1px solid #c8c9cc;
  --lz-radio-icon-active-border: 1px solid #1989fa;
  --lz-radio-icon-active-bg-color: #1989fa;
  --lz-radio-icon-disabled-border: 1px solid #c8c9cc;
  --lz-radio-icon-disabled-bg-color: #ebedf0;
  --lz-radio-text-margin: 8px;
  --lz-radio-text-size: 14px;
  --lz-radio-space-between-padding: 0 10px;
}
.lz-radio {
  display: flex;
  align-items: center;
  .lz-radio-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    border: var(--lz-radio-icon-border);
    transition: all 0.3s;
  }
  .active {
    border: var(--lz-radio-icon-active-border);
    background-color: var(--lz-radio-icon-active-bg-color);
  }
  .round {
    border-radius: 50%;
  }
  .lz-radio-right {
    margin-left: var(--lz-radio-text-margin);
    font-size: var(--lz-radio-text-size);
  }
  .lz-radio-left {
    margin-right: var(--lz-radio-text-margin);
    font-size: var(--lz-radio-text-size);
  }
}
.lz-radio-disabled {
  cursor: no-drop;
  color: #c8c9cc;
  .lz-radio-icon {
    border: var(--lz-radio-icon-disabled-border) !important;
    background-color: var(--lz-radio-icon-disabled-bg-color) !important;
  }
}
.lz-radio-space-between {
  justify-content: space-between;
  padding: var(--lz-radio-space-between-padding);
}
</style>
