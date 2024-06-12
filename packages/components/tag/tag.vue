<template>
  <Transition name="tag-face">
    <div
      v-show="show"
      class="lz-tag"
      :style="{backgroundColor:bgColor,color:color}"
      :class="[
        type,
        plain?'lz-tag-plain':'',
        round?'lz-tag-round':'',
        mark?'lz-tag-mark':'',
        size==='medium'?'lz-tag-medium':'',
        size==='large'?'lz-tag-large':''
      ]"
    >
      <slot />
      <div class="lz-tag-close" v-if="closeable" @click="handleClose">
        <uvIcon name="close" size="12" :color="color?color:'#fff'" />
      </div>
    </div>
  </Transition>
</template>

<script setup>
import uvIcon from '../icon'
defineProps({
  show: {
    type: Boolean,
    default: true
  },
  closeable: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'primary' // primary success danger warning
  },
  plain: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default: false
  },
  mark: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'mini' // mini medium large
  },
  bgColor: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['close'])

const handleClose = () => {
  emit('close')
}
</script>
<script>
export default {
  name: 'UvTag'
}
</script>

<style lang="scss">
:root {
  --lz-tag-primary-color: #1989fa;
  --lz-tag-success-color: #07c160;
  --lz-tag-danger-color: #ee0a24;
  --lz-tag-warning-color: #ff976a;
  --lz-tag-plain-bg-color: #ffffff;
  --lz-tag-mini-padding: 0 4px;
  --lz-tag-mini-font-size: 12px;
  --lz-tag-medium-padding: 2px 6px;
  --lz-tag-large-padding: 4px 8px;
  --lz-tag-large-font-size: 14px;
  --lz-tag-line-height: 1.5;
  --lz-tag-border-radius: 0;
  --lz-tag-round-border-radius: 999px;
  --lz-tag-transition-time: 0.3s;
  --lz-tag-text-color: #ffffff;
}
.lz-tag {
  display: inline-block;
  align-items: center;
  padding: var(--lz-tag-mini-padding);
  font-size: var(--lz-tag-mini-font-size);
  border-radius: var(--lz-tag-border-radius);
  color: var(--lz-tag-text-color);
  line-height: var(--lz-tag-line-height);
  transition: opacity var(--lz-tag-transition-time);
  &.primary {
    background-color: var(--lz-tag-primary-color);
    &.lz-tag-plain {
      color: var(--lz-tag-primary-color);
    }
  }
  &.success {
    background-color: var(--lz-tag-success-color);
    &.lz-tag-plain {
      color: var(--lz-tag-success-color);
    }
  }
  &.danger {
    background-color: var(--lz-tag-danger-color);
    &.lz-tag-plain {
      color: var(--lz-tag-danger-color);
    }
  }
  &.warning {
    background-color: var(--lz-tag-warning-color);
    &.lz-tag-plain {
      color: var(--lz-tag-warning-color);
    }
  }
  &.lz-tag-plain {
    border: 1px solid currentcolor;
    background: var(--lz-tag-plain-bg-color);
  }
  &.lz-tag-round {
    border-radius: var(--lz-tag-round-border-radius);
  }
  &.lz-tag-mark {
    border-radius: 0 var(--lz-tag-round-border-radius) var(--lz-tag-round-border-radius) 0;
    &::after {
      content: "";
      display: inline-block;
      width: 1px;
    }
  }
  &.lz-tag-medium {
    padding: var(--lz-tag-medium-padding);
  }
  &.lz-tag-large {
    padding: var(--lz-tag-large-padding);
    font-size: var(--lz-tag-large-font-size);
  }
  .lz-tag-close {
    display: inline-flex;
  }
}
.tag-face-leave-to {
  opacity: 0;
}

</style>
