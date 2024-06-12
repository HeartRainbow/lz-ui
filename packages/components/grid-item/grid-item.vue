<template>
  <div
    class="lz-grid-item "
    ref="gridItemRef"
    :style="rootStyle"
    :class="rootClass"
    @click="clickEvent"
  >
    <div
      class="lz-grid-item-content"
      :style="contentStyle"
      :class="contentClass"
    >
      <slot>
        <div>
          <slot name="icon">
            <lz-icon
              :size="iconSize"
              :name="iconName"
              :color="iconColor"
              v-bind="iconProps"
            />
          </slot>
        </div>
        <div class="lz-grid-item-content-text">
          <slot name="text">
            {{ text }}
          </slot>
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup>

import { reactive, computed, ref } from 'vue'
import { useParent } from '../../hooks/index'
import uvIcon from '../icon'

defineProps({
  iconSize: {
    type: [String, Number],
    default: 28
  },
  iconName: {
    type: String
  },
  iconColor: {
    type: String
  },
  iconProps: {
    type: Object
  },
  text: {
    type: String
  }
})

const emit = defineEmits(['click'])

const gridItemRef = ref(null)
const context = reactive({
  $el: gridItemRef
})
const { props: parentProps, childrenNum, index } = useParent('grid', context)

const rootStyle = computed(() => {
  const { columnNum, gutter } = parentProps
  const percent = `${100 / +columnNum}%`
  const style = {
    flexBasis: percent
  }
  if (gutter) {
    style.paddingRight = gutter + 'px'
    if (childrenNum.value >= columnNum && index.value >= columnNum) {
      style.marginTop = gutter + 'px'
    }
  }

  return style
})

const rootClass = computed(() => {
  const { border, clickable } = parentProps
  const classList = [
    border ? 'lz-grid-item-border' : '',
    clickable ? 'lz-grid-item-clickable' : ''
  ]
  return classList
})

const contentStyle = computed(() => {
  const { bgColor, color } = parentProps
  const style = {
    backgroundColor: bgColor,
    color
  }
  return style
})
const contentClass = computed(() => {
  const { direction, reverse } = parentProps
  const classList = [
    direction === 'column' ? 'lz-grid-item-content-direction-column' : 'lz-grid-item-content-direction-row',
    reverse ? `lz-grid-item-content-direction-${direction}-reverse` : ''
  ]
  return classList
})

const clickEvent = () => {
  emit('click')
}
</script>
<script>
export default {
  name: 'UvGridItem'
}
</script>

<style lang="scss">
:root {
  --lz-grid-item-content-padding: 16px 8px;
  --lz-grid-item-content-active-bg-color: #f2f3f5;
  --lz-grid-item-content-text-white-space: nowrap;
  --lz-grid-item-content-text-font-size: 12px;
  --lz-grid-item-content-text-color: #323233;
  --lz-grid-item-content-text-margin: 8px;
  --lz-grid-item-border: 1px solid #f7f8f9;
}
.lz-grid-item {
  .lz-grid-item-content {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: var(--lz-grid-item-content-padding);
    width: 100%;
    .lz-grid-item-content-text {
      font-size: var(--lz-grid-item-content-text-font-size);
      white-space: var(--lz-grid-item-content-text-white-space);
      color: var(--lz-grid-item-content-text-color);
    }
  }
  .lz-grid-item-content-direction-column {
    flex-direction: column;
    .lz-grid-item-content-text {
      margin-top: var(--lz-grid-item-content-text-margin);
    }
  }
  .lz-grid-item-content-direction-column-reverse {
    flex-direction: column-reverse;
    .lz-grid-item-content-text {
      margin: 0;
      margin-bottom: var(--lz-grid-item-content-text-margin);
    }
  }
  .lz-grid-item-content-direction-row {
    flex-direction: row;
    .lz-grid-item-content-text {
      margin-left: var(--lz-grid-item-content-text-margin);
    }
  }
  .lz-grid-item-content-direction-row-reverse {
    flex-direction: row-reverse;
    .lz-grid-item-content-text {
      margin: 0;
      margin-right: var(--lz-grid-item-content-text-margin);
    }
  }
}
.lz-grid-item-clickable {
  .lz-grid-item-content {
    &:active {
      background-color: var(--lz-grid-item-content-active-bg-color) !important;
    }
  }
}
.lz-grid-item-border {
  border-right: var(--lz-grid-item-border);
  border-bottom: var(--lz-grid-item-border);
}
</style>
