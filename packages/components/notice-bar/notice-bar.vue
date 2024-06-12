<template>
  <div
    class="lz-notice-bar"
    :style="{backgroundColor:bgColor}"
    @click="handleClick"
  >
    <div
      class="lz-notice-bar-icon"
      v-if="showLeftIcon"
    >
      <slot name="icon">
        <lz-icon
          size="20"
          color="#ed6a0c"
          name="notice"
          v-bind="iconProps"
        />
      </slot>
    </div>
    <div
      class="lz-notice-bar-content"

      ref="contentRef"
    >
      <div
        class="lz-notice-bar-content-text"
        :class="!scrollable?'ellipsis':''"
        :style="{
          color:color,
          transform: `translateX(${state.translateX}px)`,
          transitionDuration:state.duration+'s'
        }"
        ref="contentTextRef"
        @transitionend="onTransitionEnd"
      >
        <slot>
          {{ text }}
        </slot>
      </div>
    </div>
    <div
      v-if="mode"
      class="lz-notice-bar-content-right"
    >
      <lz-icon
        size="18"
        name="close"
        color="#ed6a0c"
        v-bind="rightIconProps"
        v-if="mode==='close'"
        @click="handleClose"
      />
      <lz-icon
        size="18"
        name="arrow-right"
        color="#ed6a0c"
        v-bind="rightIconProps"
        v-if="mode==='link'"
      />
    </div>
  </div>
</template>

<script setup>

import { onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import uvIcon from '../icon'

const props = defineProps({
  speed: { // 速度
    type: [String, Number],
    default: 60
  },
  delay: { // 延迟时间
    type: [String, Number],
    default: 1
  },
  scrollable: { // 开启滚动
    type: Boolean,
    default: true
  },
  text: {
    type: String
  },
  color: {
    type: String,
    default: '#ed6a0c'
  },
  bgColor: {
    type: String,
    default: '#fffbe8'
  },
  showLeftIcon: {
    type: Boolean,
    default: true
  },
  iconProps: {
    type: Object
  },
  mode: { // 通知栏模式，可选close和link
    type: String
  },
  rightIconProps: {
    type: Object
  }
})

const emit = defineEmits(['click', 'close', 'replay'])

const contentRef = ref(null)
const contentTextRef = ref(null)
const state = reactive({
  contentWidth: 0, // 内容宽度
  contentTextWidth: 0, // 内部文字宽度
  translateX: 0, // 偏移距离
  duration: 0, // 动画持续时间
  autoScrollTimer: null, // 定时器
  firstIn: true,
  ms: props.delay ? props.delay * 1000 : 0
})

onMounted(() => {
  state.contentWidth = contentRef.value.offsetWidth
  state.contentTextWidth = contentTextRef.value.offsetWidth
  reset()
})

const onTransitionEnd = () => {
  emit('replay')
  state.translateX = state.contentWidth
  state.duration = 0
  clearTimeout(state.autoScrollTimer)
  reset()
}

const reset = () => {
  if (!props.scrollable || state.contentTextWidth < state.contentWidth) return
  state.autoScrollTimer = setTimeout(() => {
    state.duration = state.firstIn ? state.contentTextWidth / +props.speed : (state.contentWidth + state.contentTextWidth) / +props.speed
    state.translateX = -state.contentTextWidth
    state.firstIn = false
  }, state.ms)
}

const handleClick = () => {
  emit('click')
}

const handleClose = () => {
  emit('close')
}

onBeforeUnmount(() => {
  clearTimeout(state.autoScrollTimer)
})

defineExpose({
  reset
})
</script>
<script>
export default {
  name: 'UvNoticeBar'
}
</script>

<style lang="scss">
:root {
  --lz-notice-bar-padding: 0 16px;
  --lz-notice-bar-height: 40px;
  --lz-notice-bar-line-height: 24px;
  --lz-notice-bar-icon-padding: 10px;
  --lz-notice-bar-content-text-font-size: 14px;
}
.lz-notice-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--lz-notice-bar-padding);
  height: var(--lz-notice-bar-height);
  line-height: var(--lz-notice-bar-line-height);
  .lz-notice-bar-icon {
    padding-right: var(--lz-notice-bar-icon-padding);
  }
  .lz-notice-bar-content-right {
    padding-left: var(--lz-notice-bar-icon-padding);
  }
  .lz-notice-bar-content {
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
    height: 100%;
    flex: 1;
    .lz-notice-bar-content-text {
      position: absolute;
      font-size: var(--lz-notice-bar-content-text-font-size);
      white-space: nowrap;
      transition-timing-function: linear;
    }
    .ellipsis {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
