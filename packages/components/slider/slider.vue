<template>
  <div
    class="lz-slider"
    :style="{backgroundColor:inactiveColor,height:barHeight+'px'}"

    ref="sliderRef"
  >
    <div
      :style="{width: `${current}%`,backgroundColor:activeColor,height:barHeight+'px'}"
      class="lz-slider-value"
      :class="disabled?'lz-slider-value-disabled':''"
    >
      <div
        class="lz-slider-circle"
        ref="sliderValueRef"
        @touchstart="touchstart"
        @touchmove.stop="touchmove"
        @touchend="touchend"
      >
        <slot name="button">
          <div
            class="lz-slider-circle-content"
            :style="{width:buttonSize+'px',height:buttonSize+'px'}"
          />
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup>

import { useTouch } from '../../hooks/index'
import { onMounted, ref, inject, watch } from 'vue'
const props = defineProps({
  modelValue: {
    type: Number,
    default: 0
  },
  inactiveColor: {
    type: String,
    default: '#ebedf0'
  },
  activeColor: {
    type: String,
    default: '#1989fa'
  },
  barHeight: {
    type: [String, Number],
    default: 3
  },
  buttonSize: {
    type: [String, Number],
    default: 24
  },
  disabled: {
    type: Boolean,
    default: false
  },
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  }
})

const { props: parentProps, validateBlurOrChange } = inject('form-item', {})

const touch = useTouch()
const emit = defineEmits(['update:modelValue', 'change', 'drag-start', 'drag-end'])
const sliderRef = ref(null)
const sliderValueRef = ref(null)
const sliderWidth = ref('')
const current = ref(props.modelValue)
const startValue = ref('')
const dragStatus = ref('') // start dragging ''

watch(() => props.modelValue, (newValue) => {
  if (newValue !== current.value) {
    current.value = newValue
  }
})

onMounted(() => {
  sliderWidth.value = sliderRef.value.offsetWidth
})
function touchstart (e) {
  touch.start(e)
  current.value = props.modelValue
  startValue.value = props.modelValue
  dragStatus.value = 'start'
}
function touchmove (e) {
  if (props.disabled) return
  if (dragStatus.value === 'start') {
    emit('drag-start', e)
  }
  touch.move(e)
  dragStatus.value = 'dragging'
  const delta = touch.deltaX.value
  const total = sliderWidth.value
  const diff = parseInt((delta / total) * (props.max - props.min))
  current.value = startValue.value + diff
  if (current.value < props.min) {
    current.value = props.min
  } else if (current.value > props.max) {
    current.value = props.max
  }
  emit('update:modelValue', current.value)
}

function touchend (e) {
  if (dragStatus.value === 'dragging') {
    emit('drag-end', e)
    emit('change', props.modelValue)
  }
  dragStatus.value = ''
  if (parentProps) {
    validateBlurOrChange('change')
  }
}
</script>
<script>
export default {
  name: 'UvSlider'
}
</script>

<style lang="scss">
:root {
  --lz-slider-height: 3px;
  --lz-slider-border-radius: 50px;
  --lz-slider-circle-content-size: 24px;
  --lz-slider-circle-content-bg-color: #ffffff;
  --lz-slider-circle-content-box-shadow: 0 1px 2px rgb(0 0 0 / 50%);
  --lz-slider-value-disabled-bg-color: #88c0fa !important;
  --lz-slider-disabled-circle-content-box-shadow: 0 1px 2px rgb(0 0 0 / 40%);
}
.lz-slider {
  position: relative;
  margin: 10px 0;
  width: 100%;
  height: var(--lz-slider-height);
  border-radius: var(--lz-slider-border-radius);
  .lz-slider-value {
    position: absolute;
    top: 0;
    left: 0;
    padding: 0 10px;
    height: var(--lz-slider-height);
    border-radius: var(--lz-slider-border-radius);
    transition: all 0.1s;
    .lz-slider-circle {
      position: absolute;
      right: -1px;
      cursor: grab;
      transform: translateY(-50%);
      .lz-slider-circle-content {
        width: var(--lz-slider-circle-content-size);
        height: var(--lz-slider-circle-content-size);
        border-radius: 50%;
        background-color: var(--lz-slider-circle-content-bg-color);
        box-shadow: var(--lz-slider-circle-content-box-shadow);
      }
    }
  }
  .lz-slider-value-disabled {
    background-color: var(--lz-slider-value-disabled-bg-color);
    .lz-slider-circle-content {
      cursor: not-allowed;
      box-shadow: var(--lz-slider-disabled-circle-content-box-shadow);
    }
  }
}
</style>
