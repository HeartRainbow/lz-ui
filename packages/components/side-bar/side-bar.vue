<template>
  <div
    class="lz-side-bar"
  >
    <div class="lz-side-bar-left">
      <div
        class="lz-side-bar-left-cotent"
        ref="contentRef"
      >
        <div
          ref="lineRef"
          class="lz-side-bar-item-line"
          :style="{width:lineWidth,backgroundColor:lineColor}"
        />
        <div
          @click="itemClick(index)"
          class="lz-side-bar-left-cotent-item"
          :class="modelValue===index?'lz-side-bar-left-cotent-item-active':''"
          v-for="(item,index) in list"
          :key="item"
        >
          {{ item }}
        </div>
      </div>
    </div>
    <div class="lz-side-bar-right">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  modelValue: {
    type: Number,
    default: 0
  },
  lineWidth: {
    type: String,
    default: '4px'
  },
  lineColor: {
    type: String,
    default: '#1989fa'
  },
  list: {
    type: Array
  }
})

const emit = defineEmits(['update:modelValue'])

const itemClick = (idx) => {
  emit('update:modelValue', idx)
  const { offsetHeight, offsetTop } = contentItemListDom.value[idx]
  setLine(offsetHeight, offsetTop)
}

const contentRef = ref(null)
const contentItemListDom = ref(null)
const lineRef = ref(null)

const setLine = (height, top) => {
  lineRef.value.style.height = `${height / 2}px`
  lineRef.value.style.transform = `translateY(${top + (height / 4)}px)`
}

onMounted(() => {
  initLine()
})

const initLine = () => {
  contentItemListDom.value = contentRef.value.querySelectorAll('.lz-side-bar-left-cotent-item')
  const { offsetHeight, offsetTop } = contentItemListDom.value[props.modelValue]
  setTimeout(() => {
    lineRef.value.style.transition = 'transform 0.3s'
  }, 300)
  setLine(offsetHeight, offsetTop)
}
</script>
<script>
export default {
  name: 'UvSideBar'
}
</script>

<style lang="scss">
:root {
  --lz-side-bar-left-width: 120px;
  --lz-side-bar-left-bg-color: #f7f8fa;
  --lz-side-bar-item-line-border-radius: 4px;
  --lz-side-bar-left-cotent-item-padding: 14px 12px;
  --lz-side-bar-left-cotent-item-font-size: 14px;
  --lz-side-bar-left-cotent-item-color: #323233;
  --lz-side-bar-left-cotent-item-active-bg-color: #ffffff;
  --lz-side-bar-left-cotent-item-active-font-weight: 700;
  --lz-side-bar-right-bg-color: #ffffff;
}
.lz-side-bar {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  .lz-side-bar-left {
    width: var(--lz-side-bar-left-width);
    background-color: var(--lz-side-bar-left-bg-color);
    .lz-side-bar-left-cotent {
      position: relative;
      .lz-side-bar-item-line {
        position: absolute;
        top: 0;
        left: 0;
        height: 16px;
        border-radius: var(--lz-side-bar-item-line-border-radius);
      }
      .lz-side-bar-left-cotent-item {
        padding: var(--lz-side-bar-left-cotent-item-padding);
        font-size: var(--lz-side-bar-left-cotent-item-font-size);
        color: var(--lz-side-bar-left-cotent-item-color);
      }
      .lz-side-bar-left-cotent-item-active {
        font-weight: var(--lz-side-bar-left-cotent-item-active-font-weight);
        background-color: var(--lz-side-bar-left-cotent-item-active-bg-color);
      }
    }
  }
  .lz-side-bar-right {
    overflow: auto;
    background-color: var(--lz-side-bar-right-bg-color);
    flex: 1;
  }
}
</style>
