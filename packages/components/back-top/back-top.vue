<template>
  <Transition name="back-top">
    <div
      class="lz-back-top"
      v-show="isShow"
      ref="backtopRef"
      @click="handleClick"
    >
      <slot>
        <div class="lz-back-top-icon">
          <lz-icon
            name="bottom"
            :size="22"
            color="#fff"
          />
        </div>
      </slot>
    </div>
  </Transition>
</template>

<script setup>
import { ref } from 'vue'
import uvIcon from '../icon'
import { useScrollParent, useEventListener, useThrottle } from '../../hooks'
import { getScrollTop } from '../../utils'

const props = defineProps({
  immediate: {
    type: Boolean,
    default: false
  },
  offset: {
    type: Number,
    default: 200
  }
})

const emit = defineEmits(['click'])

const backtopRef = ref(null)

const isShow = ref(false)

const scrollParent = useScrollParent(backtopRef)

const handleClick = (event) => {
  emit('click', event)
  scrollParent.value?.scrollTo({
    top: 0,
    behavior: props.immediate ? 'auto' : 'smooth'
  })
}

const scroll = () => {
  isShow.value = scrollParent.value ? getScrollTop(scrollParent.value) >= +props.offset : false
}

useEventListener(scrollParent, 'scroll', useThrottle(scroll))

</script>
<script>
export default {
  name: 'UvBackTop'
}
</script>

<style lang="scss">
:root {
  --lz-back-top-bg-color: #1989fa;
  --lz-back-top-border-radius: 50%;
  --lz-back-top-transition-time: 0.3s;
  --lz-back-top-width: 40px;
  --lz-back-top-height: 40px;
  --lz-back-top-z-index: 100;
  --lz-back-top-position-right: 30px;
  --lz-back-top-position-bottom: 40px;
  --lz-back-top-transform: scale(0);
}
.lz-back-top {
  position: fixed;
  right: var(--lz-back-top-position-right);
  bottom: var(--lz-back-top-position-bottom);
  z-index: var(--lz-back-top-z-index);
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--lz-back-top-width);
  height: var(--lz-back-top-height);
  border-radius: var(--lz-back-top-border-radius);
  background-color: var(--lz-back-top-bg-color);
  transition: transform var(--lz-back-top-transition-time);
  .lz-back-top-icon {
    transform: rotate(-180deg);
  }
}
.back-top-leave-to,
.back-top-enter-from {
  transform: var(--lz-back-top-transform);
}
</style>
