<template>
  <div class="lz-icon">
    <svg
      class="lz-icon-svg"
      :style="iconColor"
      aria-hidden="true"
    >
      <use :xlink:href="iconName" />
    </svg>
    <div
      v-if="dot"
      class="lz-icon-info"
      :class="styleDot"
    >
      {{ badge }}
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

import './iconfont'
const props = defineProps({
  name: {
    type: String
  },
  color: {
    type: String
  },
  size: {
    type: [String, Number],
    default: '14'
  },
  dot: {
    type: Boolean,
    default: false
  },
  badge: {
    type: [String, Number]
  }
})
const iconName = computed(() => {
  return `#lz-${props.name}`
})
const iconColor = computed(() => {
  return {
    color: props.color,
    fontSize: props.size + 'px'
  }
})
const styleDot = computed(() => {
  return {
    'lz-icon-dot': props.dot && !props.badge
  }
})

</script>
<script>
export default {
  name: 'UvIcon'
}
</script>

<style lang="scss">
:root {
  --lz-icon-info-top: 4px;
  --lz-icon-info-right: 0;
  --lz-icon-info-padding: 0 3px;
  --lz-icon-info-min-width: 16px;
  --lz-icon-info-font-size: 12px;
  --lz-icon-info-font-weight: 500;
  --lz-icon-info-border: 1px solid #ffffff;
  --lz-icon-info-border-radius: 16px;
  --lz-icon-info-color: #ffffff;
  --lz-icon-info-bg-color: #ee0a24;
  --lz-icon-dot-size: 8px;
  --lz-icon-dot-bg-color: #ee0a24;
}
.lz-icon {
  position: relative;
  display: inline-block;
  .lz-icon-svg {
    overflow: hidden;
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentcolor;
  }
  .lz-icon-info {
    position: absolute;
    top: var(--lz-icon-info-top);
    right: var(-lz-icon-info-right);
    padding: var(--lz-icon-info-padding);
    min-width: var(--lz-icon-info-min-width);
    font-size: var(--lz-icon-info-font-size);
    font-weight: var(--lz-icon-info-font-weight);
    border: var(--lz-icon-info-border);
    border-radius: var(--lz-icon-info-border-radius);
    text-align: center;
    color: var(--lz-icon-info-color);
    background-color: var(--lz-icon-info-bg-color);
    box-sizing: border-box;
    line-height: 1.2;
    transform: translate(50%, -50%);
  }
  .lz-icon-dot {
    width: var(--lz-icon-dot-size);
    min-width: 0;
    height: var(--lz-icon-dot-size);
    border-radius: 100%;
    background-color: var(--lz-icon-dot-bg-color);
  }
}
</style>
