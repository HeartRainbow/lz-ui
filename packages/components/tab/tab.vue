<template>
  <div class="lz-tab-wrap">
    <div
      class="lz-tab"
      :style="{backgroundColor:bgColor}"
      :class="[scroll?'lz-tab-scroll':'',shrink?'lz-tab-shrink':'']"
      ref="uvTabRef"
    >
      <div
        ref="uvTabLineRef"
        class="lz-tab-line"
        :style="{height:lineHeight,backgroundColor:lineColor}"
      />
      <div
        class="lz-tab-item"
        @click="changeIndex(index)"
        :class="placeholder? placeholder===item?'':'lz-tab-acitve-item': currentIndex===index?'lz-tab-acitve-item':''"
        :style="{color:placeholder? placeholder===item?color:activeColor:currentIndex===index?activeColor:color}"
        v-for="(item,index) in list"
        :key="item"
      >
        <div>{{ item }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { onMounted, ref, watch, nextTick } from 'vue'
import { scrollLeftTo } from '../../utils/index.js'
const props = defineProps({
  acitveIndex: {
    type: Number,
    default: 0
  },
  bgColor: {
    type: String
  },
  color: {
    type: String
  },
  activeColor: {
    type: String
  },
  scroll: {
    type: Boolean,
    default: false
  },
  lineHeight: {
    type: String
  },
  lineColor: {
    type: String
  },
  list: {
    type: Array
  },
  // 收缩布局，即flex-start
  shrink: {
    type: Boolean,
    default: false
  },
  // 用于给cascader选择器使用
  placeholder: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['change'])

const uvTabRef = ref(null)
const uvTabLineRef = ref(null)
const uvTableItemListDom = ref(null)
const currentIndex = ref(0)

watch(() => props.acitveIndex, (newValue) => {
  currentIndex.value = newValue
}, {
  immediate: true
})

watch(currentIndex, (newValue) => {
  uvTableItemListDom.value = uvTabRef.value.querySelectorAll('.lz-tab-item')
  const { offsetWidth, offsetLeft } = uvTableItemListDom.value[newValue]
  setTabLine(offsetWidth, offsetLeft)
  if (props.scroll) {
    const tabDom = uvTabRef.value
    const to = offsetLeft - (tabDom.offsetWidth - offsetWidth) / 2
    scrollLeftTo(tabDom, to)
  }
})

const changeIndex = (index) => {
  emit('change', index)
  currentIndex.value = index
}

onMounted(async () => {
  await nextTick()
  initTabLine()
})

const initTabLine = () => {
  uvTableItemListDom.value = uvTabRef.value.querySelectorAll('.lz-tab-item')
  const { offsetWidth, offsetLeft } = uvTableItemListDom.value[currentIndex.value]
  setTimeout(() => {
    uvTabLineRef.value.style.transition = 'transform 0.3s'
  }, 300)
  setTabLine(offsetWidth, offsetLeft)
}

const setTabLine = (width, left) => {
  uvTabLineRef.value.style.width = `${width}px`
  uvTabLineRef.value.style.transform = `translateX(${left}px)`
}

</script>
<script>
export default {
  name: 'UvTab'
}
</script>
<style lang="scss">
:root {
  --lz-tab-bg-color: #ffffff;
  --lz-tab-font-size: 14px;
  --lz-tab-height: 44px;
  --lz-tab-padding: 0 12px;
  --lz-tab-line-bg-color: #1989fa;
  --lz-tab-line-height: 3px;
  --lz-tab-border-radius: 3px;
  --lz-tab-item-color: #646566;
  --lz-tab-acitve-item-color: #323233;
  --lz-tab-acitve-item-font-weight: 700;
  --lz-tab-item-margin: 10px;
}
.lz-tab-wrap {
  overflow: hidden;
  .lz-tab {
    position: relative;
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: var(--lz-tab-height);
    font-size: var(--lz-tab-font-size);
    background-color: var(--lz-tab-bg-color);
    .lz-tab-line {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 40px;
      height: var(--lz-tab-line-height);
      border-radius: var(--lz-tab-border-radius);
      background-color: var(--lz-tab-line-bg-color);
    }
    .lz-tab-item {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--lz-tab-item-color);
    }
    .lz-tab-acitve-item {
      font-weight: var(--lz-tab-acitve-item-font-weight);
      color: var(--lz-tab-acitve-item-color);
    }
  }
  .lz-tab-scroll {
    justify-content: inherit;
    overflow-x: auto;
    padding: var(--lz-tab-padding);
    transition: all 0.3s;
    scrollbar-width: none;
    -ms-overflow-style: none;
    gap: 0 var(--lz-tab-item-margin);
    .lz-tab-item {
      white-space: nowrap;
    }
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .lz-tab-shrink {
    justify-content: flex-start;
    padding: var(--lz-tab-padding);
    gap: 0 var(--lz-tab-item-margin);
  }
}
</style>
