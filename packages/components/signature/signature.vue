<template>
  <div class="lz-signature" :style="{height:height}">
    <div class="lz-signature-content" ref="wrapRef">
      <canvas
        ref="canvasRef"
        :width="state.width"
        :height="state.height"
        @touchstart="touchStart"
        @touchmove="touchMove"
        @touchend="touchEnd"
      />
    </div>
    <slot name="footer">
      <div class="lz-signature-footer">
        <div class="lz-signature-footer-clear" @click="clear">
          {{ clearButtonText }}
        </div>
        <div class="lz-signature-footer-confim" @click="submit">
          {{ confirmButtonText }}
        </div>
      </div>
    </slot>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRect } from '../../hooks/index'

const props = defineProps({
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: '200px'
  },
  lineWidth: {
    type: Number,
    default: 3
  },
  penColor: {
    type: String,
    default: '#000'
  },
  exportImgType: {
    type: String,
    default: 'png'
  },
  clearButtonText: {
    type: String,
    default: '清空'
  },
  confirmButtonText: {
    type: String,
    default: '确认'
  }
})

const emit = defineEmits(['start', 'signing', 'end', 'clear', 'submit'])

const wrapRef = ref(null)
const canvasRef = ref(null)

const state = reactive({
  width: 0,
  height: 0,
  ctx: null
})

let canvasRect = ''

onMounted(() => {
  state.ctx = canvasRef.value?.getContext('2d')
  state.width = wrapRef.value?.offsetWidth || 0
  state.height = wrapRef.value?.offsetHeight || 0
})

const touchStart = () => {
  if (!state.ctx) {
    return false
  }

  state.ctx.beginPath()
  state.ctx.lineWidth = props.lineWidth
  state.ctx.strokeStyle = props.penColor
  canvasRect = useRect(canvasRef)

  emit('start')
}

const touchMove = (event) => {
  if (!state.ctx) {
    return false
  }

  const touch = event.touches[0]
  const mouseX = touch.clientX - (canvasRect?.left || 0)
  const mouseY = touch.clientY - (canvasRect?.top || 0)

  state.ctx.lineCap = 'round'
  state.ctx.lineJoin = 'round'
  state.ctx?.lineTo(mouseX, mouseY)
  state.ctx?.stroke()

  emit('signing', event)
}

const touchEnd = (event) => {
  emit('end')
}

const clear = () => {
  if (state.ctx) {
    state.ctx.clearRect(0, 0, state.width, state.height)
    state.ctx.closePath()
  }
  emit('clear')
}

const isCanvasEmpty = (canvas) => {
  const empty = document.createElement('canvas')
  empty.width = canvas.width
  empty.height = canvas.height
  return canvas.toDataURL() === empty.toDataURL()
}

const submit = () => {
  const canvas = canvasRef.value
  if (!canvas) {
    return
  }

  const isEmpty = isCanvasEmpty(canvas)
  const image = isEmpty
    ? ''
    : canvas.toDataURL(
            `image/${props.exportImgType}`,
            props.exportImgType === 'jpg' ? 0.9 : null
    )

  emit('submit', {
    image,
    canvas
  })
}
defineExpose({
  clear,
  submit
})

</script>

<script>
export default {
  name: 'UvSignature'
}
</script>

<style lang="scss">
:root {
  --lz-signature-default-gap: 5px;
  --lz-signature-content-border: 1px dotted #dadada;
  --lz-signature-content-border-radius: 8px;
  --lz-signature-content-bg-color: #ffffff;
  --lz-signature-footer-button-text-padding: 8px 16px;
  --lz-signature-footer-button-text-size: 12px;
  --lz-signature-footer-button-border-radius: 4px;
  --lz-signature-footer-clear-button-border: 1px solid #dcdee0;
  --lz-signature-footer-clear-button-color: #323233;
  --lz-signature-footer-clear-button-bg-color: #ffffff;
  --lz-signature-footer-confim-button-color: #ffffff;
  --lz-signature-footer-confim-button-bg-color: #1989fa;
}
.lz-signature {
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: var(--lz-signature-default-gap);
  .lz-signature-content {
    overflow: hidden;
    width: 100%;
    height: 100%;
    border: var(--lz-signature-content-border);
    border-radius: var(--lz-signature-content-border-radius);
    background-color: var(--lz-signature-content-bg-color);
  }
  .lz-signature-footer {
    display: flex;
    justify-content: flex-end;
    gap: var(--lz-signature-default-gap);
    .lz-signature-footer-clear,
    .lz-signature-footer-confim {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: var(--lz-signature-footer-button-text-padding);
      font-size: var(--lz-signature-footer-button-text-size);
      border-radius: var(--lz-signature-footer-button-border-radius);
    }
    .lz-signature-footer-clear {
      border: var(--lz-signature-footer-clear-button-border);
      color: var(--lz-signature-footer-clear-button-color);
      background-color: var(--lz-signature-footer-clear-button-bg-color);
    }
    .lz-signature-footer-confim {
      color: var(--lz-signature-footer-confim-button-color);
      background-color: var(--lz-signature-footer-confim-button-bg-color);
    }
  }
}

</style>
