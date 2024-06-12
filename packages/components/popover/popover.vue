<template>
  <div>
    <span
      style="display: inline-block;"
      ref="contentRef"
    >
      <slot name="reference" />
    </span>
    <Transition name="popover">
      <div
        class="lz-popover"
        ref="popoverRef"
        style=""
        v-show="modelValue"
      >
        <div
          :class="[
            showPositon==='bottom'?'lz-popover-arrow-top':'lz-popover-arrow-bottom',
            showArrowPostion==='left'?'lz-popover-arrow-left':'lz-popover-arrow-right'
          ]"
        />
        <div class="lz-popover-content">
          <slot>
            <div
              class="lz-popover-content-item"
              :class="item.disabled?'lz-popover-content-item-disabled':''"
              v-for="(item,index) in list"
              :key="keyName ? item[keyName] : index"
              @click="selectItemClick(item)"
            >
              <div
                class="lz-popover-content-item-text"
              >
                {{ keyName ? item[keyName] : index }}
              </div>
            </div>
          </slot>
        </div>
      </div>
    </Transition>
    <lz-overlay
      :show="modelValue"
      :overlay="false"
      @click="closePopover"
    />
  </div>
</template>

<script setup>

import { ref, watch } from 'vue'
import uvOverlay from '../overlay'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  list: {
    type: Array
  },
  keyName: {
    type: String
  },
  closeOnClickAction: {
    type: Boolean,
    default: true
  },
  closeOnClickOutside: {
    type: Boolean,
    default: true
  }
})

watch(() => props.modelValue, (newValue) => {
  showPopover()
})

const contentRef = ref(null)
const popoverRef = ref(null)
const showPositon = ref('bottom')
const showArrowPostion = ref('left')

const emit = defineEmits(['update:modelValue', 'change'])

const closePopover = () => {
  if (props.closeOnClickOutside) {
    emit('update:modelValue', false)
  }
}

const showPopover = () => {
  const { top, left, bottom, right } = contentRef.value.children[0].getBoundingClientRect()
  // 箭头位置，左or右
  if (left > ((screen.availWidth) / 2)) {
    showArrowPostion.value = 'right'
    // const left = Number()
    popoverRef.value.style.right = (screen.availWidth - right) + 'px'
  } else {
    showArrowPostion.value = 'left'
    popoverRef.value.style.left = left + 'px'
  }
  // 弹框位置，上or下
  if (top > ((screen.availHeight) / 2)) {
    showPositon.value = 'top'
    popoverRef.value.style.bottom = Number(screen.availHeight - top + 10) + 'px'
  } else {
    showPositon.value = 'bottom'
    popoverRef.value.style.top = Number(bottom + 10) + 'px'
  }
}

const selectItemClick = (item) => {
  if (item.disabled) return
  emit('change', item)
  if (props.closeOnClickAction) {
    emit('update:modelValue', false)
  }
}
</script>
<script>
export default {
  name: 'UvPopover'
}
</script>
<style lang="scss">
:root {
  --lz-popover-z-index: 2000;
  --lz-popover-color: #323233;
  --lz-popover-bg-color: #ffffff;
  --lz-popover-content-box-shadow: 0 2px 12px rgb(50 50 51 / 12%);
  --lz-popover-content-border-radius: 8px;
  --lz-popover-content-item-padding: 0 16px;
  --lz-popover-content-item-width: 128px;
  --lz-popover-content-item-height: 44px;
  --lz-popover-content-item-active-bg-color: #f2f3f5;
  --lz-popover-transition-time: 0.15s;
  --lz-popover-arrow-postion-distance: 25px;
  --lz-popover-content-item-text-border-bottom: 1px solid #f7f8f9;
}
.lz-popover {
  position: absolute;
  z-index: var(--lz-popover-z-index);
  display: inline-block;
  color: var(--lz-popover-color);
  transition: all var(--lz-popover-transition-time);
  .lz-popover-arrow-top {
    position: absolute;
    top: -12px;
    width: 0;
    height: 0;
    line-height: 0;
    border-top: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid var(--lz-popover-bg-color);
    border-left: 6px solid transparent;
  }
  .lz-popover-arrow-bottom {
    position: absolute;
    bottom: -12px;
    width: 0;
    height: 0;
    line-height: 0;
    border-top: 6px solid var(--lz-popover-bg-color);
    border-right: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-left: 6px solid transparent;
  }
  .lz-popover-arrow-left {
    left: var(--lz-popover-arrow-postion-distance);
  }
  .lz-popover-arrow-right {
    right: var(--lz-popover-arrow-postion-distance);
  }
  .lz-popover-content {
    overflow: hidden;
    border-radius: var(--lz-popover-content-border-radius);
    background: var(--lz-popover-bg-color);
    box-shadow: var(--lz-popover-content-box-shadow);
    .lz-popover-content-item {
      padding: var(--lz-popover-content-item-padding);
      width: var(--lz-popover-content-item-width);
      height: var(--lz-popover-content-item-height);
      &:active {
        background-color: var(--lz-popover-content-item-active-bg-color);
      }
      .lz-popover-content-item-text {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        flex: 1;
        border-bottom: var(--lz-popover-content-item-text-border-bottom);
      }
      &:last-child {
        .lz-popover-content-item-text {
          border-bottom: none;
        }
      }
    }
    .lz-popover-content-item-disabled {
      color: #c8c9cc;
      &:active {
        background-color: initial;
      }
    }
  }
}
.popover-enter-active {
  transition-timing-function: ease-out;
}
.popover-leave-active {
  transition-timing-function: ease-in;
}
.popover-enter-from,
.popover-leave-to {
  transform: scale(0.8);
  opacity: 0;

  // transform-origin: 0 0;
}

</style>
