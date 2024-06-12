<template>
  <div
    class="lz-cell"

    :style="{backgroundColor:bgColor,fontSize:size+'px'}"
  >
    <div
      class="lz-cell-content"
      :class="[clickable?'lz-cell-clickable':'',labelPosition==='top'?'lz-cell-content-top':'',labelPosition==='right'?'lz-cell-content-right':'']"
    >
      <div
        class="lz-cell-content-title"
        :class="required?'lz-cell-content-title-required':''"
        :style="{width:labelWidth+'px'}"
      >
        <slot name="title">
          <span
            v-if="icon!==''"
            style="margin-right: 5px;"
          ><lz-icon
            :name="icon"
            :color="iconColor"
            :size="iconSize"
          /></span> {{ title }}
        </slot>
      </div>
      <div class="lz-cell-content-value-wrap">
        <div class="lz-cell-content-value">
          <div
            class="lz-cell-content-value-slot"
            :style="{paddingRight:arrow? '20px':''}"
          >
            <slot name="value">
              {{ value }}
            </slot>
          </div>
          <span
            class="lz-cell-arrow"
            v-if="arrow"
          ><lz-icon
            :name="'arrow-'+arrowDirection"
            color="#9699a6"
          /></span>
        </div>
        <Transition name="cell-tips">
          <div
            v-if="tips"
            class="lz-cell-tips"
          >
            <slot name="tips">
              {{ errorMsg }}
            </slot>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup>

import uvIcon from '../icon'
defineProps({
  title: {
    type: String,
    default: ''
  },
  value: {
    type: [String, Number, Boolean],
    default: ''
  },
  bgColor: {
    type: String,
    default: '#fff'
  },
  size: {
    type: [String, Number],
    default: '14'
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
  arrow: {
    type: Boolean,
    default: false
  },
  arrowDirection: {
    type: String,
    default: 'right'
  },
  tips: {
    type: Boolean,
    default: false
  },
  errorMsg: {
    type: String
  },
  clickable: {
    type: Boolean,
    default: false
  },
  labelWidth: {
    type: Number
  },
  labelPosition: {
    type: String,
    default: 'left'
  },
  required: {
    type: Boolean,
    default: false
  }
})

</script>
<script>
export default {
  name: 'UvCell'
}
</script>
<style lang="scss">
:root {
  --lz-cell-after-right: 15px;
  --lz-cell-after-left: 15px;
  --lz-cell-after-border-bottom: 1px solid #f5f6f7;
  --lz-cell-clickable-bg-color: #f2f3f5;
  --lz-cell-content-padding: 10px 16px;
  --lz-cell-content-title-margin-right: 20px;
  --lz-cell-content-value-color: #969799;
  --lz-cell-content-value-slot-text-align: right;
  --lz-cell-content-justify-content: space-between;
  --lz-cell-tips-color: #ee0a24;
  --lz-cell-tips-font-size: 13px;
}
.lz-cell {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  &::after {
    position: absolute;
    right: var(--lz-cell-after-right);
    bottom: 0;
    left: var(--lz-cell-after-left);
    border-bottom: var(--lz-cell-after-border-bottom);
    content: "";
    pointer-events: none;
  }
  &:last-child::after {
    display: none;
  }
  .lz-cell-clickable {
    &:active {
      background-color: var(--lz-cell-clickable-bg-color);
    }
  }
  .lz-cell-content {
    display: flex;
    justify-content: var(--lz-cell-content-justify-content);

    // align-items: center;
    padding: var(--lz-cell-content-padding);
    .lz-cell-content-title {
      margin-right: var(--lz-cell-content-title-margin-right);
      font-size: 14px;
      white-space: nowrap;
      line-height: 24px;
    }
    .lz-cell-content-title-required {
      position: relative;
      &::before {
        position: absolute;
        left: -8px;
        color: #f67979;
        line-height: 24px;
        content: "*";
      }
    }
    .lz-cell-content-value-wrap {
      display: flex;
      justify-content: center;
      width: 100%;
      flex-direction: column;
      .lz-cell-content-value {
        position: relative;
        display: flex;
        white-space: wrap;
        color: var(--lz-cell-content-value-color);
        line-height: 24px;
        .lz-cell-content-value-slot {
          flex: 1;
          text-align: var(--lz-cell-content-value-slot-text-align);
        }
        .lz-cell-arrow {
          position: absolute;
          right: 0;
        }
      }
      .lz-cell-tips {
        position: relative;
        display: flex;
        font-size: var(--lz-cell-tips-font-size);
        color: var(--lz-cell-tips-color);
        line-height: 24px;
      }
      .cell-tips-enter-active,
      .cell-tips-leave-active {
        transition: all 0.3s;
      }
      .cell-tips-enter-from,
      .cell-tips-leave-to {
        transform: translateX(-100%);
        opacity: 0;
      }
    }
  }
  .lz-cell-content-top {
    flex-direction: column;
    align-items: flex-start;
  }
  .lz-cell-content-right {
    text-align: right;
  }
}
</style>
