<template>
  <div
    class="lz-steps"
  >
    <div class="lz-steps-content">
      <slot />
    </div>
  </div>
</template>

<script setup>

import { watch } from 'vue'
import { useChildren } from '../../hooks/index'
const props = defineProps({
  modelValue: {
    type: Number,
    default: 0
  },
  isAbleClick: {
    type: Boolean,
    default: true
  },
  activeColor: {
    type: String,
    default: '#0078d4'
  },
  inactiveColor: {
    type: String,
    default: '#999999'
  }

})

const emit = defineEmits(['update:modelValue', 'change'])

watch(() => props.modelValue, (newValue) => {
  acitveItemUpdate(newValue)
  emit('change', newValue)
})

const acitveItemUpdate = (index) => {
  if (props.isAbleClick) {
    emit('update:modelValue', index)
  }
  fields.forEach((item, idx) => {
    // 判断活跃子项
    if (idx <= index) {
      item.isActive = true
    } else {
      item.isActive = false
    }
    // 判断活跃线
    if (idx < index) {
      item.lineActive = true
    } else {
      item.lineActive = false
    }
  })
}

const { fields } = useChildren('steps', { props, acitveItemUpdate })

</script>
<script>
export default {
  name: 'UvSteps'
}
</script>

<style lang="scss">
:root {
  --lz-steps-padding: 10px;
  --lz-steps-bg-color: #ffffff;
}
.lz-steps {
  padding: var(--lz-steps-padding);
  background-color: var(--lz-steps-bg-color);
  .lz-steps-content {
    position: relative;
    display: flex;
  }
}
</style>
