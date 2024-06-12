<template>
  <div
    class="lz-switch"
    :class="[modelValue?'lz-switch-on':'',disabled?'lz-switch-disabled':'']"
    :style="uvSwitchStyle"
    @click="changeStatus"
  >
    <div
      class="lz-switch-circle"
      :class="modelValue?' lz-switch-circle-on':''"
    />
  </div>
</template>

<script setup>

import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  size: {
    type: [String, Number]
  }
})
const emit = defineEmits(['update:modelValue'])

function changeStatus () {
  if (props.disabled) return
  emit('update:modelValue', !props.modelValue)
}

const uvSwitchStyle = computed(() => {
  const { size, activeColor, inactiveColor, modelValue } = props
  return {
    fontSize: size + 'px',
    backgroundColor: modelValue ? activeColor : inactiveColor
  }
})
</script>
<script>
export default {
  name: 'UvSwitch'
}
</script>

<style lang="scss">
:root {
  --lz-switch-width: calc(1.8em + 4px);
  --lz-switch-height: calc(1em + 4px);
  --lz-switch-background: #e2e3e7;
  --lz-switch-on-background: #1989fa;
  --lz-switch-transition-time: 0.3s;
  --lz-switch-size: 26px;
  --lz-switch-box-shadow: 0 3px 1px 0 rgb(0 0 0 / 5%);
  --lz-switch-circle-size: 1em;
  --lz-switch-circle-background: #ffffff;
}
.lz-switch {
  position: relative;
  width: var(--lz-switch-width);
  height: var(--lz-switch-height);
  font-size: var(--lz-switch-size);
  border-radius: var(--lz-switch-circle-size);
  background-color: var(--lz-switch-background);
  transition: background-color var(--lz-switch-transition-time);
  box-sizing: content-box;
  .lz-switch-circle {
    position: absolute;
    top: 2px;
    left: 2px;
    width: var(--lz-switch-circle-size);
    height: var(--lz-switch-circle-size);
    font-size: inherit;
    border-radius: 100%;
    background-color: var(--lz-switch-circle-background);
    box-shadow: var(--lz-switch-box-shadow);
    transition: transform var(--lz-switch-transition-time);
  }
  .lz-switch-circle-on {
    transform: translate(calc(var(--lz-switch-width) - var(--lz-switch-circle-size) - 4px));
  }
}
.lz-switch-on {
  background-color: var(--lz-switch-on-background);
}
.lz-switch-disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
