<template>
  <div class="lz-popup" @touchmove.prevent>
    <overLay
      :overlay="overlay"
      :show="modelValue"
      @click="closePop"
    />
    <Transition :name="'lz-popup-slide-'+position">
      <div
        v-show="modelValue"
        :class="uvClass"
        :style="{height:height,backgroundColor:bgColor,padding:padding?'10px':'none'}"
      >
        <div class="lz-popup-content">
          <div class="lz-popup-content-top" v-if="title || close">
            <div v-if="title" class="lz-popup-content-title">
              {{ title }}
            </div>
            <div
              v-if="close"
              class="lz-popup-content-close"
            >
              <lz-icon
                @click="closeEvent"
                name="close"
                size="28"
                color="#c8c9cc"
              />
            </div>
          </div>
          <div class="lz-popup-content-item">
            <slot />
          </div>
          <div
            v-if="action"
            class="lz-popup-content-button"
          >
            <div
              class="lz-popup-content-button-cancle"
              @click.stop="cancleEvent"
            >
              {{ leftName }}
            </div>
            <div
              class="lz-popup-content-button-confim"
              @click.stop="confimEvent"
            >
              {{ rightName }}
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>

import { computed } from 'vue'
import uvIcon from '../icon'
import overLay from '../overlay'
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  position: {
    type: String,
    default: 'bottom'
  },
  bgColor: {
    type: String,
    default: '#fff'
  },
  round: {
    type: Boolean,
    default: false
  },
  padding: {
    type: Boolean,
    default: true
  },
  overlay: {
    type: Boolean,
    default: true
  },
  clickOverlayClose: {
    type: Boolean,
    default: true
  },
  height: {
    type: String,
    default: 'auto'
  },
  action: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  close: {
    type: Boolean,
    default: false
  },
  leftName: {
    type: String,
    default: '取消'
  },
  rightName: {
    type: String,
    default: '确定'
  }
})
const emit = defineEmits(['update:modelValue', 'cancle', 'confim', 'close'])
const uvClass = computed(() => {
  return [
    'lz-popup-wrap',
    props.position ? `lz-popup-${props.position}` : '',
    props.round ? `lz-popup-${props.position}-round` : ''
  ]
})

const closePop = () => {
  if (props.clickOverlayClose) {
    emit('update:modelValue', false)
  }
}
const cancleEvent = () => {
  emit('cancle')
  emit('update:modelValue', false)
}
const confimEvent = () => {
  emit('confim')
}
const closeEvent = () => {
  emit('close')
  emit('update:modelValue', false)
}
</script>
<script>
export default {
  name: 'UvPopup'
}
</script>

<style lang="scss">
:root {
  --lz-popup-transition-time: 0.3s;
  --lz-popup-border-radius: 16px;
  --lz-popup-left-right-max-width: 70%;
  --lz-popup-button-font-size: 14px;
  --lz-popup-button-border-radius: 6px;
  --lz-popup-button-padding: 12px 45px;
  --lz-popup-button-box-shadow: rgb(0 0 0 / 15%) 0 2px 8px;
  --lz-popup-button-confim-color: #ffffff;
  --lz-popup-button-cancle-color: #1fa45d;
  --lz-popup-button-confim-bg-color: #07c160;
  --lz-popup-button-cancle-bg-color: #f0f0f0;
  --lz-popup-content-top-height: 30px;
  --lz-popup-content-title-font-size: 16px;
  --lz-popup-content-title-font-weight: 700;
  --lz-popup-content-title-color: #323233;
  --lz-popup-content-title-padding: 0;
}
.lz-popup {
  .lz-popup-bottom {
    bottom: 0;
    left: 0;
    width: 100%;
  }
  .lz-popup-bottom-round {
    border-radius: var(--lz-popup-border-radius)  var(--lz-popup-border-radius) 0 0;
  }
  .lz-popup-top {
    top: 0;
    left: 0;
    width: 100%;
  }
  .lz-popup-top-round {
    border-radius: 0 0 var(--lz-popup-border-radius)  var(--lz-popup-border-radius);
  }
  .lz-popup-center {
    top: 50%;
    left: 50%;
    min-width: 50px;
    min-height: 50px;
    transform: translate(-50%, -50%);
  }
  .lz-popup-center-round {
    border-radius: var(--lz-popup-border-radius);
  }
  .lz-popup-left {
    top: 0;
    left: 0;
    max-width: var(--lz-popup-left-right-max-width);
    min-height: 100%;
  }
  .lz-popup-left-round {
    border-radius: 0  var(--lz-popup-border-radius)  var(--lz-popup-border-radius) 0;
  }
  .lz-popup-right {
    top: 0;
    right: 0;
    max-width: var(--lz-popup-left-right-max-width);
    min-height: 100%;
  }
  .lz-popup-right-round {
    border-radius: var(--lz-popup-border-radius)   0 0 var(--lz-popup-border-radius);
  }
  .lz-popup-wrap {
    position: fixed;
    z-index: 2;
    overflow-y: auto;
    max-height: 100%;
    transition: transform var(--lz-popup-transition-time);
    .lz-popup-content {
      .lz-popup-content-top {
        position: relative;
        display: flex;
        align-items: center;
        height: var(--lz-popup-content-top-height);
        .lz-popup-content-title {
          padding: var(--lz-popup-content-title-padding);
          font-size: var(--lz-popup-content-title-font-size);
          font-weight: var(--lz-popup-content-title-font-weight);
          color: var(--lz-popup-content-title-color);
        }
        .lz-popup-content-close {
          position: absolute;
          top: 0;
          right: 0;
        }
      }
      .lz-popup-content-button {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding-top: 10px;

        @mixin base-button() {
          padding: var(--lz-popup-button-padding);
          font-size: var(--lz-popup-button-font-size);
          border-radius: var(--lz-popup-button-border-radius);
          text-align: center;
          white-space: nowrap;
          box-shadow: var(--lz-popup-button-box-shadow);
        }
        .lz-popup-content-button-confim {
          @include base-button;

          color: var(--lz-popup-button-confim-color);
          background-color: var(--lz-popup-button-confim-bg-color);
        }
        .lz-popup-content-button-cancle {
          @include base-button;

          margin-right: 10px;
          color: var(--lz-popup-button-cancle-color);
          background-color: var(--lz-popup-button-cancle-bg-color);
        }
      }
    }
  }
  .lz-popup-slide-top-enter-active,
  .lz-popup-slide-center-enter-active,
  .lz-popup-slide-left-enter-active,
  .lz-popup-slide-right-enter-active,
  .lz-popup-slide-bottom-enter-active {
    transition-timing-function: ease-out;
  }
  .lz-popup-slide-top-leave-active,
  .lz-popup-slide-center-enter-active,
  .lz-popup-slide-left-leave-active,
  .lz-popup-slide-right-leave-active,
  .lz-popup-slide-bottom-leave-active {
    transition-timing-function: ease-in;
  }
  .lz-popup-slide-top-enter-from,
  .lz-popup-slide-top-leave-active {
    transform: translate3d(0, -100%, 0);
  }
  .lz-popup-slide-right-enter-from,
  .lz-popup-slide-right-leave-active {
    transform: translate3d(100%, 0, 0);
  }
  .lz-popup-slide-bottom-enter-from,
  .lz-popup-slide-bottom-leave-active {
    transform: translate3d(0, 100%, 0);
  }
  .lz-popup-slide-left-enter-from,
  .lz-popup-slide-left-leave-active {
    transform: translate3d(-100%, 0, 0);
  }
  .lz-popup-slide-center-enter-from,
  .lz-popup-slide-center-leave-active {
    opacity: 0;
  }
}
</style>
