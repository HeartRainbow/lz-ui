<template>
  <div
    class="lz-steps-item "

    @click="clickItem"
    ref="itemRef"
  >
    <div
      class="lz-steps-item-icon"
    >
      <slot name="icon">
        <div
          class="lz-steps-item-icon-default"
          :style="{borderColor:context.isActive?activeColor:inactiveColor}"
        />
      </slot>
    </div>

    <div
      class="lz-steps-item-text"
      :style="{color:context.isActive?activeColor:inactiveColor}"
    >
      <slot>{{ title }}</slot>
    </div>
    <div
      class="lz-steps-item-line"
      :style="{backgroundColor:context.lineActive?activeColor:''}"
    />
  </div>
</template>

<script setup>

import { ref, reactive, onMounted } from 'vue'
import { useParent } from '../../hooks/index'

defineProps({
  title: {
    type: String
  }
})

const itemRef = ref(null)

const context = reactive({
  $el: itemRef,
  isActive: false,
  lineActive: false
})

const { props: parentProps, acitveItemUpdate, index } = useParent('steps', context)

onMounted(() => {
  if (parentProps.modelValue === index.value) {
    context.isActive = true
  }
})

const { activeColor, inactiveColor } = parentProps

const clickItem = () => {
  if (parentProps.isAbleClick) {
    acitveItemUpdate(index.value)
  }
}

</script>
<script>
export default {
  name: 'UvStepsItem'
}
</script>

<style lang="scss">
:root {
  --lz-steps-item-font-size: 12px;
  --lz-steps-item-transition-time: 0.3s;
  --lz-steps-item-icon-default-size: 9px;
  --lz-steps-item-icon-default-border-size: 2px;
  --lz-steps-item-text-padding-top: 20px;
  --lz-steps-item-line-bg-color: #ebedf0;
  --lz-steps-item-line-height: 1px;
}
.lz-steps-item {
  position: relative;
  font-size: var(--lz-steps-item-font-size);
  flex: 1;
  .lz-steps-item-icon {
    position: absolute;
    z-index: 1;
    background-color: var(--lz-steps-bg-color);
    transition: all var(--lz-steps-item-transition-time);
    transform: translateX(-50%);
    .lz-steps-item-icon-default {
      width: var(--lz-steps-item-icon-default-size);
      height: var(--lz-steps-item-icon-default-size);
      border: var(--lz-steps-item-icon-default-border-size) solid #999999;
      border-radius: 50%;
    }
  }
  .lz-steps-item-text {
    position: relative;
    padding-top: var(--lz-steps-item-text-padding-top);
    text-align: center;
    transform: translateX(-50%);
  }
  .lz-steps-item-line {
    position: absolute;
    top: calc(var(--lz-steps-item-icon-default-size) / 2);
    left: 0;
    width: 100%;
    height: var(--lz-steps-item-line-height);
    background-color: var(--lz-steps-item-line-bg-color);
    transition: all var(--lz-steps-item-transition-time);
  }
  &:first-child {
    .lz-steps-item-text {
      transform: none;
      text-align: left;
    }
    .lz-steps-item-icon {
      transform: none;
    }
  }
  &:last-child {
    position: absolute;
    right: 0;
    .lz-steps-item-text {
      transform: none;
    }
    .lz-steps-item-icon {
      right: 0;
      transform: none;
    }
    .lz-steps-item-line {
      width: 0;
    }
  }
}
</style>
