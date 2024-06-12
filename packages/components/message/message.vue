<template>
  <div
    class="lz-message"
    style="top: 30px;"
  >
    <div class="lz-message-value">
      {{ content }}
    </div>
  </div>
</template>

<script setup>

defineProps({
  content: {
    type: String,
    default: ''
  },
  duration: {
    type: Number,
    default: 3000
  }

})
</script>
<script>
export default {
  name: 'UvMessage'
}
</script>

<style lang="scss">
:root {
  --lz-message-value-top: 30px;
  --lz-message-value-padding: 8px 10px;
  --lz-message-value-width: 70%;
  --lz-message-value-height: 40px;
  --lz-message-value-border-radius: 4px;
  --lz-message-value-bg-color: #ffffff;
  --lz-message-value-box-shadow: 0 4px 12px #00000026;
  --lz-message-animation-time: 0.5s;
  --lz-message-animation-remove-time: 0.6s;
}
.lz-message {
  .lz-message-value {
    position: fixed;
    top: var(--lz-message-value-top);
    left: 50%;
    z-index: 999999;
    padding: var(--lz-message-value-padding);
    width: var(--lz-message-value-width);
    height: var(--lz-message-value-height);
    border-radius: var(--lz-message-value-border-radius);
    background-color: var(--lz-message-value-bg-color);
    box-shadow: var(--lz-message-value-box-shadow);
    transform: translateX(-50%);
    animation: lz-message-face var(--lz-message-animation-time);
  }

  @keyframes lz-message-face {
    0% {
      transform: translate(-50%, -100%);
    }
    100% {
      transform: translate(-50%, 0);
    }
  }
  .lz-message-value.remove {
    animation: lz-message-remove var(--lz-message-animation-remove-time);
  }

  @keyframes lz-message-remove {
    0% {
      transform: translate(-50%, 0);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -100%);
      opacity: 0;
    }
  }
}
</style>
