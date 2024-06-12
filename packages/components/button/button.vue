<template>
  <div>
    <button
      :class="uvClass"
      :disabled="disabled"
      :style="{backgroundColor:bgColor,color:color}"
      @click="clickEvent"
    >
      <div class="lz-button-content">
        <div
          v-if="icon && iconPosition==='left'"
          class="lz-button-content-icon-left"
        >
          <lz-icon
            :name="icon"
            :color="iconColor"
            :size="iconSize"
          />
        </div>
        <div
          v-if="loading"
          class="lz-button-content-loading"
        /><slot />
        <div
          v-if="icon && iconPosition==='right'"
          class="lz-button-content-icon-right"
        >
          <lz-icon
            :name="icon"
            :color="iconColor"
            :size="iconSize"
          />
        </div>
      </div>
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'

import uvIcon from '../icon'
const props = defineProps({
  type: {
    type: String,
    default: 'default'
  },
  bgColor: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default: false
  },
  square: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'normal'
  },
  block: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: ''
  },
  iconColor: {
    type: String,
    default: ''
  },
  iconSize: {
    type: Number,
    default: 16
  },
  iconPosition: {
    type: String,
    default: 'left'
  }
})
const emit = defineEmits(['click'])
const uvClass = computed(() => {
  return [
    'lz-button',
    props.type ? (props.disabled ? '' : `lz-button-${props.type}`) : '',
    props.disabled ? `lz-button-${props.type}-disabled` : '',
    props.round ? 'lz-button-round' : '',
    props.square ? 'lz-button-square' : '',
    props.size ? `lz-button-size-${props.size}` : '',
    props.block ? 'lz-button-block' : ''
  ]
})
const clickEvent = () => {
  emit('click')
}
</script>
<script>
export default {
  name: 'UvButton'
}
</script>

<style lang="scss">
:root {
  --lz-button-primary: #409eff;
  --lz-button-success: #67c23a;
  --lz-button-warning: #e6a23c;
  --lz-button-error: #f56c6c;
  --lz-button-info: #909399;
  --lz-button-text: #303133;
  --lz-button-border-radius: 4px;
  --lz-button-font-size: 13px;
  --lz-button-default-border: 1px solid #d9d9d9;
  --lz-button-default-color: #333333;
  --lz-button-default-hover-color: #0e80eb;
  --lz-button-default-bg-color: #ffffff;
  --lz-button-default-hover-bg-color: #ecf5ff;
  --lz-button-loading-size: 15px;
  --lz-button-size-mini-padding: 2px;
  --lz-button-size-small-padding: 5px;
  --lz-button-size-normal-padding: 10px;
}

$primary: var(--lz-button-primary);
$success: var(--lz-button-success);
$warning: var(--lz-button-warning) ;
$error: var(--lz-button-error) ;
$info: var(--lz-button-info) ;
$text: var(--lz-button-text) ;
.lz-button {
  font-size: var(--lz-button-font-size);
  border: 0;
  border-radius: var(--lz-button-border-radius);
  white-space: nowrap;
  color: #ffffff;
  background: none;
  outline: none;
  cursor: pointer;
  &-default {
    border: var(--lz-button-default-border);
    color: var(--lz-button-default-color);
    background: var(--lz-button-default-bg-color);
    &:hover {
      color: var(--lz-button-default-hover-color);
      background-color: var(--lz-button-default-hover-bg-color);
      opacity: 0.8;
    }
    &:active {
      opacity: 1;
    }
  }
  &-default-disabled {
    border: var(--lz-button-default-border);
    color: var(--lz-button-default-color);
    background: var(--lz-button-default-bg-color);
    opacity: 0.5;
    cursor: no-drop;
  }
  &-round {
    border-radius: 999px;
  }
  &-square {
    border-radius: 0;
  }

  @mixin base($type) {
    border: 1px solid $type;
    background-color: $type;
    &:hover {
      opacity: 0.8;
    }
    &:active {
      opacity: 1;
    }
  }
  &-primary {
    @include base($primary);
  }
  &-success {
    @include base($success);
  }
  &-warning {
    @include base($warning);
  }
  &-error {
    @include base($error);
  }
  &-info {
    @include base($info);
  }

  @mixin disabled($type) {
    border: 1px solid $type;
    background-color: $type;
    opacity: 0.5;
    cursor: no-drop;
  }
  &-primary-disabled {
    @include disabled($primary);
  }
  &-success-disabled {
    @include disabled($success);
  }
  &-info-disabled {
    @include disabled($info);
  }
  &-error-disabled {
    @include disabled($error);
  }
  &-warning-disabled {
    @include disabled($warning);
  }
  &-size-normal {
    padding: var(--lz-button-size-normal-padding);
  }
  &-size-small {
    padding: var(--lz-button-size-small-padding);
    font-size: 12px;
  }
  &-size-mini {
    padding: var(--lz-button-size-mini-padding);
    font-size: 12px;
  }
  &-block {
    width: 100%;
    button {
      display: block;
      margin: 0 auto;
      width: 95%;
    }
  }
  .lz-button-content {
    display: flex;
    justify-content: center;
    align-items: center;
    &-icon-left {
      margin-right: 5px;
    }
    &-icon-right {
      margin-left: 5px;
    }
    &-loading {
      position: relative;
      margin-right: 5px;
      width: var(--lz-button-loading-size);
      height: var(--lz-button-loading-size);
      border: 2px solid #ffffff;
      border-top-color: #ffffff;
      border-right-color: transparent;
      border-bottom-color: transparent;
      border-radius: 100%;
      animation: circle infinite  0.75s linear;
    }
  }

  @keyframes circle {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
