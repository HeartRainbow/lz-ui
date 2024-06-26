<template>
  <div
    class="lz-nav-bar"
    :class="fixed?'lz-nav-bar-fixed':''"
    :style="{border:border?'1px solid #f7f8fa':'',zIndex:zIndex}"
  >
    <div
      v-if="placeholder && fixed"
      class="lz-nav-bar-placeholder"
    />
    <div
      class="lz-nav-bar-content"
      :style="{backgroundColor:bgColor}"
    >
      <div
        class="lz-nav-bar-left"
        @click="handleClickLeft"
      >
        <slot name="left">
          <lz-icon
            v-if="leftArrow"
            name="arrow-left-bold"
            size="18"
            :color="leftColor"
            v-bind="arrowProps"
          />
          <div
            :style="{color:leftColor}"
            class="lz-nav-bar-left-text"
          >
            {{ leftTitle }}
          </div>
        </slot>
      </div>
      <div class="lz-nav-bar-center">
        <slot name="title">
          {{ title }}
        </slot>
      </div>
      <div
        class="lz-nav-bar-right"
        @click="handleClickRight"
      >
        <slot name="right">
          <div>{{ rightTitle }}</div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup>

import uvIcon from '../icon'

defineProps({
  title: {
    type: String
  },
  bgColor: {
    type: String,
    default: '#fff'
  },
  leftTitle: {
    type: String
  },
  leftColor: {
    type: String,
    default: '#419dfb'
  },
  rightTitle: {
    type: String
  },
  leftArrow: {
    type: Boolean,
    default: false
  },
  arrowProps: {
    type: Object
  },
  border: {
    type: Boolean,
    default: true
  },
  zIndex: {
    type: [Number, String],
    default: 1
  },
  fixed: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click-left', 'click-right'])

const handleClickLeft = () => {
  emit('click-left')
}
const handleClickRight = () => {
  emit('click-right')
}
</script>
<script>
export default {
  name: 'UvNavBar'
}
</script>

<style lang="scss">
:root {
  --lz-nav-bar-height: 46px;
  --lz-nav-bar-center-max-width: 60%;
  --lz-nav-bar-center-font-size: 16px;
  --lz-nav-bar-center-font-weight: 700;
  --lz-nav-bar-center-color: #323233;
  --lz-nav-bar-left-right-padding: 0 16px;
  --lz-nav-bar-left-right-font-size: 14px;
  --lz-nav-bar-left-text-padding-left: 5px;
}
.lz-nav-bar {
  position: relative;
  .lz-nav-bar-placeholder {
    height: var(--lz-nav-bar-height);
  }
  .lz-nav-bar-content {
    position: relative;
    display: flex;
    align-items: center;
    height: var(--lz-nav-bar-height);
    .lz-nav-bar-center {
      margin: 0 auto;
      max-width: var(--lz-nav-bar-center-max-width);
      font-size: var(--lz-nav-bar-center-font-size);
      font-weight: var(--lz-nav-bar-center-font-weight);
      white-space: nowrap;
      color: var(--lz-nav-bar-center-color);
    }
    .lz-nav-bar-left,
    .lz-nav-bar-right {
      position: absolute;
      top: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      padding: var(--lz-nav-bar-left-right-padding);
      font-size: var(--lz-nav-bar-left-right-font-size);
    }
    .lz-nav-bar-left {
      left: 0;
      .lz-nav-bar-left-text {
        padding-left: var(--lz-nav-bar-left-text-padding-left);
      }
    }
    .lz-nav-bar-right {
      right: 0;
    }
  }
}
.lz-nav-bar-fixed {
  position: fixed !important;
  top: 0;
  left: 0;
  width: 100%;
}
</style>
