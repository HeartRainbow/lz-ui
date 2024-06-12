<template>
  <uvOverlay
    :show="show"
    :overlay="overlay"
    @click="closeOnClickOverlayClick"
  >
    <div
      class="lz-dialog-wrapper"
    >
      <Transition name="dialog">
        <div
          v-show="show"
          class="lz-dialog"
        >
          <div class="lz-dialog-title">
            {{ title }}
          </div>
          <div class="lz-dialog-content">
            {{ message }}
          </div>
          <div
            class="lz-dialog-bottom-button"
            v-if="showConfirmButton || showCancleButton"
          >
            <div
              :class="showConfirmButton && !showCancleButton?'only-confim':'confim-and-cancle'"
            >
              <div
                v-if="showCancleButton"
                :style="{color:cancleButtonColor}"
                @click="cancelCallback(operationClick)"
                class="lz-dialog-cancle"
                :class="cancelButtonDisabled?'lz-dialog-button-undisabled':''"
              >
                {{ cancleButtonText }}
              </div>
              <div
                v-if="showConfirmButton"
                @click="submitCallback(operationClick)"
                :style="{color:confirmButtonColor}"
                class="lz-dialog-confim"
                :class="confirmButtonDisabled?'lz-dialog-button-undisabled':''"
              >
                {{ confirmButtonText }}
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </uvOverlay>
</template>

<script setup>

import { ref, onMounted } from 'vue'
import uvOverlay from '../overlay'
// import uvIcon from '../icon'
const props = defineProps({
  title: {
    type: String
  },
  message: {
    type: String,
    default: ''
  },
  showConfirmButton: {
    type: Boolean,
    default: true
  },
  confirmButtonText: {
    type: String,
    default: '确认'
  },
  confirmButtonColor: {
    type: String,
    default: '#1989fa'
  },
  confirmButtonDisabled: {
    type: Boolean,
    default: false
  },
  showCancleButton: {
    type: Boolean,
    default: false
  },
  cancleButtonText: {
    type: String,
    default: '取消'
  },
  cancleButtonColor: {
    type: String,
    default: '#000000'
  },
  cancelButtonDisabled: {
    type: Boolean,
    default: false
  },
  overlay: {
    type: Boolean,
    default: true
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: false
  },
  submitCallback: {
    type: Function
  },
  cancelCallback: {
    type: Function
  }
})
const emit = defineEmits(['cancle', 'confim'])
const show = ref(false)
onMounted(() => {
  show.value = true
})
const closeOnClickOverlayClick = () => {
  if (props.closeOnClickOverlay) {
    setTimeout(() => {
      show.value = false
    }, 0)
  }
}
const operationClick = (type) => {
  if (props.confirmButtonDisabled && type === 'confim') return false
  if (props.cancelButtonDisabled && type === 'cancle') return false
  if (type === 'confim') emit('confim')
  if (type === 'cancle') emit('cancle')

  setTimeout(() => {
    show.value = false
  }, 0)
  return true
}

</script>
<script>
export default {
  name: 'ShowDialog'
}
</script>
<style lang="scss">
:root {
  --lz-dialog-width: 90%;
  --lz-dialog-min-height: 100px;
  --lz-dialog-border-radius: 16px;
  --lz-dialog-bg-color: #ffffff;
  --lz-dialog-transition-time: 0.3s;
  --lz-dialog-title-padding: 15px 0 10px;
  --lz-dialog-title-text-align: center;
  --lz-dialog-title-color: #323233;
  --lz-dialog-content-padding: 8px 24px 26px;
  --lz-dialog-content-font-size: 14px;
  --lz-dialog-content-color: #646566;
  --lz-dialog-bottom-button-height: 48px;
  --lz-dialog-bottom-button-border-top: 1px solid #f7f8f9;
  --lz-dialog-bottom-button-center-line-color: #f7f8f9;
  --lz-dialog-confim-active-bg-color: #e6e6e6;
  --lz-dialog-cancle-bg-color: #e6e6e6;
  --lz-dialog-button-undisabled-color: #646566;
}
.lz-dialog-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  .lz-dialog {
    position: relative;
    overflow: hidden;
    width: var(--lz-dialog-width);
    min-height: var(--lz-dialog-min-height);
    border-radius: var(--lz-dialog-border-radius);
    background-color: var(--lz-dialog-bg-color);
    transition: var(--lz-dialog-transition-time);
    .lz-dialog-title {
      padding: var(--lz-dialog-title-padding);
      width: 100%;
      font-weight: 700;
      text-align: var(--lz-dialog-title-text-align);
      color: var(--lz-dialog-title-color);
    }
    .lz-dialog-content {
      padding: var(--lz-dialog-content-padding);
      width: 100%;
      font-size: var(--lz-dialog-content-font-size);
      color: var(--lz-dialog-content-color);
    }
    .lz-dialog-bottom-button {
      width: 100%;
      height: var(--lz-dialog-bottom-button-height);
      border-top: var(--lz-dialog-bottom-button-border-top);
      .only-confim {
        display: flex;
        height: 100%;
      }
      .confim-and-cancle {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        &::before {
          content: "";
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 1px;
          height: 100%;
          background-color: var(--lz-dialog-bottom-button-center-line-color);
        }
      }
      .lz-dialog-confim {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        flex: 1;
        &:active {
          background-color: var(--lz-dialog-confim-active-bg-color);
        }
      }
      .lz-dialog-cancle {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        flex: 1;
        &:active {
          background-color: var(--lz-dialog-cancle-bg-color);
        }
      }
      .lz-dialog-button-undisabled {
        color: var(--lz-dialog-button-undisabled-color) !important;
        &:active {
          background-color: none !important;
        }
      }
    }
  }
}
.dialog-leave-to {
  transform: scale(0.4);
  opacity: 0;
}
.dialog-enter-from {
  transform: scale(0);
}

</style>
