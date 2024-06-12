<template>
  <div
    class="lz-pagination"
  >
    <div
      @click="prevClick"
      :class="[
        prevText?'lz-pagination-prev-text':'lz-pagination-prev',
        modelValue===1?'lz-pagination-prev-disabled':''
      ]"
    >
      <div v-if="prevText">
        <slot name="prev">
          {{ prevText }}
        </slot>
      </div>
      <lz-icon
        v-else
        :color="modelValue===1?disabledColor:defaultColor"
        size="14"
        name="arrow-left"
      />
    </div>
    <div class="lz-pagination-content">
      <template
        v-for="item in pageNum"
        :key="item"
      >
        <div
          @click="itemClick(item)"

          v-if="isShow(item)"

          :class="modelValue===item?'lz-pagination-content-item-active':''"
          class="lz-pagination-content-item "
        >
          {{ item }}
        </div>
      </template>
    </div>
    <div
      @click="nextClick"
      :class="[
        nextText?'lz-pagination-next-text':'lz-pagination-next',
        modelValue===pageNum?'lz-pagination-next-disabled':''
      ]"
    >
      <div v-if="nextText">
        <slot name="next">
          {{ nextText }}
        </slot>
      </div>
      <lz-icon
        v-else
        size="14"
        :color="modelValue===pageNum?disabledColor:defaultColor"
        name="arrow-right"
      />
    </div>
  </div>
</template>

<script setup>

import { computed } from 'vue'
import uvIcon from '../icon'
const props = defineProps({
  // 每页显示条数
  pageSize: {
    type: Number,
    default: 10
  },
  // 当前页数
  modelValue: {
    type: Number,
    default: 1
  },
  // 总数
  total: {
    type: Number,
    default: 0
  },
  // 替代图标上一页文字
  prevText: {
    type: String
  },
  // 替代图标下一页文字
  nextText: {
    type: String
  },
  disabledColor: {
    type: String,
    default: '#bbbec4'
  },
  defaultColor: {
    type: String,
    default: '#606266'
  }

})

const pageNum = computed(() => {
  return Math.ceil(props.total / props.pageSize)
})

const isShow = (idx) => {
  if (props.modelValue <= 3 && idx <= 5) {
    return true
  } else if (props.modelValue > 3 && props.modelValue + 2 < pageNum.value) {
    const value = Math.abs(props.modelValue - idx)
    if (value <= 2) {
      return true
    } else {
      return false
    }
  } else if (props.modelValue + 2 >= pageNum.value) {
    if (idx + 4 >= pageNum.value) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

const emit = defineEmits(['update:modelValue', 'change'])

const itemClick = (index) => {
  emit('update:modelValue', index)
  emit('change', index)
}
const prevClick = () => {
  let value = 0
  if (props.modelValue >= 2) {
    value = props.modelValue - 1
    emit('update:modelValue', value)
    emit('change', value)
  }
}
const nextClick = () => {
  let value = 0
  if (props.modelValue < pageNum.value) {
    value = Number(props.modelValue + 1)
    emit('update:modelValue', value)
    emit('change', value)
  }
}
</script>
<script>
export default {
  name: 'UvPagination'
}
</script>
<style lang="scss">
:root {
  --lz-pagination-font-size: 14px;
  --lz-pagination-content-item-size: 34px;
  --lz-pagination-content-item-color: #606266;
  --lz-pagination-content-item-gap: 8px;
  --lz-pagination-content-item-border-radius: 2px;
  --lz-pagination-content-item-active-color: #ffffff;
  --lz-pagination-content-item-bg-color: #f0f2f5;
  --lz-pagination-content-item-acitve-bg-color: #409eff;
  --lz-pagination-disabled-color: #bbbec4;
  --lz-pagination-text-padding: 0 5px;
}
.lz-pagination {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: var(--lz-pagination-content-item-gap);
  font-size: var(--lz-pagination-font-size);
  .lz-pagination-content {
    display: flex;
    align-items: center;
    gap: var(--lz-pagination-content-item-gap);
    .lz-pagination-content-item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: var(--lz-pagination-content-item-size);
      height: var(--lz-pagination-content-item-size);
      border-radius: var(--lz-pagination-content-item-border-radius);
      color: var(--lz-pagination-content-item-color);
      background-color: var(--lz-pagination-content-item-bg-color);
    }
    .lz-pagination-content-item-active {
      color: var(--lz-pagination-content-item-active-color);
      background-color: var(--lz-pagination-content-item-acitve-bg-color);
    }
  }
  .lz-pagination-prev,
  .lz-pagination-next {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--lz-pagination-content-item-size);
    height: var(--lz-pagination-content-item-size);
    border-radius: var(--lz-pagination-content-item-border-radius);
    background-color: var(--lz-pagination-content-item-bg-color);
    &:active {
      opacity: 0.6;
    }
  }
  .lz-pagination-prev-text,
  .lz-pagination-next-text {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: var(--lz-pagination-text-padding);
    height: var(--lz-pagination-content-item-size);
    border-radius: var(--lz-pagination-content-item-border-radius);
    white-space: nowrap;
    color: var(--lz-pagination-content-item-color);
    background-color: var(--lz-pagination-content-item-bg-color);
    &:active {
      opacity: 0.6;
    }
  }
  .lz-pagination-prev-disabled,
  .lz-pagination-next-disabled {
    color: var(--lz-pagination-disabled-color);
    background-color: var(--lz-pagination-content-item-bg-color);
    &:active {
      opacity: 1;
    }
  }
}
</style>
