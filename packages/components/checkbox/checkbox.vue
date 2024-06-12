<template>
  <div
    class="lz-check-box"
    ref="checkboxRef"
    :class="uvCheckBoxClass"
    @click="change"
  >
    <div
      v-if="labelPosition==='left'"
      class="lz-check-box-left"
    >
      <slot>
        {{ label }}
      </slot>
    </div>
    <div
      class="lz-check-box-icon"
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
      class="lz-check-box-right"
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

const checkboxRef = ref(null)

const context = reactive({
  $el: checkboxRef,
  label: props.label,
  isSelect: false
})

const { props: parentProps, updateItem, index } = useParent('checkbox-group', context)

onMounted(() => {
  if (parentProps && parentProps.modelValue.find(item => item === context.label)) {
    context.isSelect = true
  }
})

const emit = defineEmits(['update:modelValue', 'change'])

const uvCheckBoxClass = computed(() => {
  return [
    props.disabled ? 'lz-check-box-disabled' : '',
    props.spaceBetween ? 'lz-check-box-space-between' : ''
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
  name: 'UvCheckbox'
}
</script>
<style lang="scss">
:root {
  --lz-check-box-icon-border: 1px solid #c8c9cc;
  --lz-check-box-icon-active-border: 1px solid #1989fa;
  --lz-check-box-icon-active-bg-color: #1989fa;
  --lz-check-box-icon-disabled-border: 1px solid #c8c9cc;
  --lz-check-box-icon-disabled-bg-color: #ebedf0;
  --lz-check-box-text-margin: 8px;
  --lz-check-box-text-size: 14px;
  --lz-check-box-space-between-padding: 0 10px;
}
.lz-check-box {
  display: flex;
  align-items: center;
  .lz-check-box-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    border: var(--lz-check-box-icon-border);
    transition: all 0.3s;
  }
  .active {
    border: var(--lz-check-box-icon-active-border);
    background-color: var(--lz-check-box-icon-active-bg-color);
  }
  .round {
    border-radius: 50%;
  }
  .lz-check-box-right {
    margin-left: var(--lz-check-box-text-margin);
    font-size: var(--lz-check-box-text-size);
  }
  .lz-check-box-left {
    margin-right: var(--lz-check-box-text-margin);
    font-size: var(--lz-check-box-text-size);
  }
}
.lz-check-box-disabled {
  cursor: no-drop;
  color: #c8c9cc;
  .lz-check-box-icon {
    border: var(--lz-check-box-icon-disabled-border) !important;
    background-color: var(--lz-check-box-icon-disabled-bg-color) !important;
  }
}
.lz-check-box-space-between {
  justify-content: space-between;
  padding: var(--lz-check-box-space-between-padding);
}
</style>
