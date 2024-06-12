<template>
  <div class="lz-toast">
    <div
      class="lz-toast-value"
      :style="{backgroundColor: bgColor, color: color}"
    >
      <div
        class="lz-toast-value-icon"
        v-if="type==='success' || type==='error'"
      >
        <lz-icon
          :name="type"
          size="36"
          :color="type==='success'?'#07c160':'#f56c6c'"
        />
      </div>
      <div
        class="lz-toast-loading"
        v-if="type==='loading'"
      >
        <div class="lz-toast-loading-item" />
        <div class="lz-toast-loading-item" />
        <div class="lz-toast-loading-item" />
        <div class="lz-toast-loading-item" />
      </div>
      <div class="lz-toast-message">
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script setup>

import uvIcon from '../icon'
defineProps({
  message: {
    type: String,
    default: ''
  },
  duration: {
    type: Number,
    default: 1600
  },
  bgColor: {
    type: String,
    default: '#4a4a4b'
  },
  color: {
    type: String,
    default: '#fff'
  },
  type: {
    type: String,
    default: ''
  }
})
</script>
<script>
export default {
  name: 'Toast'
}
</script>

<style lang="scss">
:root {
  --lz-toast-value-padding: 8px 10px;
  --lz-toast-value-max-width: 150px;
  --lz-toast-value-border-radius: 4px;
  --lz-toast-message-font-size: 13px;
  --lz-toast-message-min-width: 70px;
  --lz-toast-loading-size: 24px;
  --lz-toast-loading-item-color: #1677ff;
}
.lz-toast {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
  .lz-toast-value {
    display: inline-block;
    padding: var(--lz-toast-value-padding);
    max-width: var(--lz-toast-value-max-width);
    border-radius: var(--lz-toast-value-border-radius);
    text-align: center;
    animation: lz-toast-face 0.5s;
    .lz-toast-value-icon {
      margin-bottom: 10px;
    }
    .lz-toast-loading {
      position: relative;
      display: inline-block;
      margin: 10px 0;
      width: 1em;
      height: 1em;
      font-size: var(--lz-toast-loading-size);
      transform: rotate(45deg);
      animation: lz-toast-loading-rotate 1.2s infinite linear;
      .lz-toast-loading-item {
        position: absolute;
        display: block;
        width: 0.5em;
        height: 0.5em;
        border-radius: 100%;
        background-color: var(--lz-toast-loading-item-color);
        opacity: 0.3;
        transform: scale(0.75);
        transform-origin: 50% 50%;
        animation: lz-toast-loading-move 1s infinite linear alternate;
        &:nth-child(1) {
          top: 0;
          inset-inline-start: 0;
        }
        &:nth-child(2) {
          top: 0;
          inset-inline-end: 0;
          animation-delay: 0.4s;
        }
        &:nth-child(3) {
          bottom: 0;
          inset-inline-end: 0;
          animation-delay: 0.8s;
        }
        &:nth-child(4) {
          bottom: 0;
          inset-inline-start: 0;
          animation-delay: 1.2s;
        }
      }

      @keyframes lz-toast-loading-move {
        to {
          opacity: 1;
        }
      }

      @keyframes lz-toast-loading-rotate {
        to {
          transform: rotate(405deg);
        }
      }
    }
    .lz-toast-message {
      min-width: var(--lz-toast-message-min-width);
      font-size: var(--lz-toast-message-font-size);
    }
  }

  @keyframes lz-toast-face {
    0% { opacity: 0; }
    100% {
      opacity: 1;
    }
  }
  .lz-toast-value.remove {
    animation: lz-toast-remove 0.6s;
  }

  @keyframes lz-toast-remove {
    0% { opacity: 1; }
    100% {
      opacity: 0;
    }
  }
}

</style>
