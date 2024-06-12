<template>
  <div class="lz-progress" :style="{height:height}">
    <div class="lz-progress-content" :style="{backgroundColor:trackColor}">
      <div class="lz-progress-content-length" :style="{width:percent+'%',backgroundColor:progressColor}" />
      <div v-if="insetPercent && showPercent" class="lz-progress-inset-num" :style="{width:percent+'%'}">
        {{ percent }}%
      </div>
    </div>
    <div v-if="!insetPercent && showPercent" class="lz-progress-out-num">
      {{ percent }}%
    </div>
  </div>
</template>

<script setup>
defineProps({
  percent: {
    type: Number,
    default: 0
  },
  showPercent: {
    type: Boolean,
    default: true
  },
  insetPercent: {
    type: Boolean,
    default: true
  },
  trackColor: {
    type: String,
    default: ''
  },
  progressColor: {
    type: String,
    default: ''
  },
  height: {
    type: String,
    default: ''
  }
})
</script>
<script>
export default {
  name: 'UvProgress'
}
</script>

<style lang="scss">
:root {
  --lz-progress-height: 12px;
  --lz-progress-content-border-radius: 100px;
  --lz-progress-content-length-bg-color: #19be6b;
  --lz-progress-transition-time: 0.3s;
  --lz-progress-inset-num-color: #ffffff;
  --lz-progress-inset-num-padding-right: 5px;
  --lz-progress-inset-num-font-size: 12px;
  --lz-progress-out-num-font-size: 14px;
  --lz-progress-out-num-width: 40px;
  --lz-progress-out-num-padding: 0 10px;
  --lz-progress-out-num-color: #c8c9cc;
}
.lz-progress {
  display: flex;
  align-items: center;
  height: var(--lz-progress-height);
  .lz-progress-content {
    position: relative;
    min-width: 0;
    height: 100%;
    border-radius: var(--lz-progress-content-border-radius);
    background-color: #ececec;
    flex: 1 0;
    .lz-progress-content-length {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      border-radius: var(--lz-progress-content-border-radius);
      background-color: var(--lz-progress-content-length-bg-color);
      transition: width var(--lz-progress-transition-time);
    }
    .lz-progress-inset-num {
      position: absolute;
      top: 0;
      bottom: 0;
      padding-right: var(--lz-progress-inset-num-padding-right);
      font-size: var(--lz-progress-inset-num-font-size);
      text-align: right;
      color: var(--lz-progress-inset-num-color);
      transition: width var(--lz-progress-transition-time);
    }
  }
  .lz-progress-out-num {
    padding: var(--lz-progress-out-num-padding);
    width: var(--lz-progress-out-num-width);
    font-size: var(--lz-progress-out-num-font-size);
    white-space: nowrap;
    color: var(--lz-progress-out-num-color);
  }
}

</style>
