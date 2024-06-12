<template>
  <uvPopup
    class="cascader-popup"
    v-model="show"
    close
    round
    v-bind="popupProps"
  >
    <div class="lz-cascader">
      <uvTab
        v-if="show"
        color="#969799"
        :acitve-index="acitveIndex"
        @change="tabChange"
        :list="tabList"
        :placeholder="placeholder"
        scroll
        shrink
        v-bind="tabProps"
      />
      <div class="lz-cascader-content" ref="contentRef">
        <div
          class="lz-cascader-content-list"
          @touchstart="touchstart"
          @touchmove="touchmove"
          @touchend="touchend"
          ref="contentListRef"
          :style="{width: `${listWidth}px`,transform: `translateX(${transformX}px)`}"
        >
          <div class="lz-cascader-content-item-warp" v-for="(item,index) in tabs" :key="index">
            <div
              @click="tabItemClick(chil)"
              class="lz-cascader-content-item"
              v-for="(chil,idx) in item.options"
              :class="chil[valueKey]===item.selected?.[valueKey] ?'lz-cascader-content-active-item':''"
              :key="idx"
            >
              <div>{{ chil[labelKey] }}</div>
              <uvIcon v-if="chil[valueKey]===item.selected?.[valueKey]" name="select" size="20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </uvPopup>
</template>

<script setup>
import { ref, nextTick, computed, watch } from 'vue'
import uvPopup from '../popup'
import uvTab from '../tab'
import uvIcon from '../icon'
import { useTouch } from '../../hooks/index'

const props = defineProps({
  popupProps: {
    type: Object,
    default: () => ({})
  },
  tabProps: {
    type: Object,
    default: () => ({})
  },
  list: {
    type: Array,
    default: () => ([])
  },
  labelKey: {
    type: String,
    default: 'label'
  },
  valueKey: {
    type: String,
    default: 'value'
  },
  childrenKey: {
    type: String,
    default: 'children'
  },
  placeholder: {
    type: String,
    default: '请选择'
  }
})

const emit = defineEmits(['finish', 'change', 'close'])

const show = ref(false)

const open = () => {
  show.value = true
}

const close = () => {
  show.value = false
  emit('close')
}

const acitveIndex = ref(0)

const tabs = ref([])

const contentRef = ref(null)
const contentListRef = ref(null)
const itemDomList = ref(null)
const pageWidth = ref(0)

watch([() => show.value, () => tabs.value.length], () => {
  if (show.value) {
    nextTick(() => {
      pageWidth.value = contentRef.value.offsetWidth
      itemDomList.value = contentRef.value.querySelectorAll('.lz-cascader-content-item-warp')
    })
  }
})

// 轮播总宽度
const listWidth = computed(() => {
  return tabs.value.length * pageWidth.value
})

const currentSelect = ref()
const tabItemClick = (item) => {
  currentSelect.value = item[props.valueKey]
  emit('change', item[props.valueKey])
  updateTabs()
  if (!item[props.childrenKey]) {
    const value = []
    const label = []
    tabs.value.forEach(it => {
      if (it.selected) {
        value.push(it.selected[props.valueKey])
        label.push(it.selected[props.labelKey])
      }
    })
    emit('finish', {
      value: value.join('/'),
      label: label.join('/')
    })
    close()
  }
}

const tabList = computed(() => {
  const { labelKey, placeholder } = props
  const arr = []
  tabs.value.forEach(item => {
    const { selected } = item
    const title = selected ? selected[labelKey] : placeholder
    arr.push(title)
  })
  return arr
})

watch(acitveIndex, (newValue) => {
  transformX.value = -pageWidth.value * newValue
})

const tabChange = (idx) => {
  acitveIndex.value = idx
}

const touch = useTouch()

const transformX = ref(0)

let startX = 0

const addAnimation = () => {
  contentListRef.value.style.transition = 'transform 0.3s ease'
}
const removeAnimation = () => {
  contentListRef.value.style.transition = 'none'
}

function touchstart (event) {
  touch.start(event)
  startX = transformX.value
}

function touchmove (event) {
  touch.move(event)
  removeAnimation()
  const { deltaX } = touch
  if (deltaX.value < 0 && acitveIndex.value === itemDomList.value.length - 1) { // 左移且index为最后一张
    return
  } else if (deltaX.value > 0 && acitveIndex.value === 0) { // 右移且当前index为0
    return
  }
  transformX.value = startX + deltaX.value
}

function touchend (event) {
  const { deltaX } = touch
  addAnimation()
  let moveIndex = acitveIndex.value
  if (deltaX.value < (-pageWidth.value / 3)) {
    moveIndex++
    if (moveIndex > itemDomList.value.length - 1) {
      moveIndex = itemDomList.value.length - 1
    }
  } else if (deltaX.value > (pageWidth.value / 3)) {
    moveIndex--
    if (moveIndex < 0) {
      moveIndex = 0
    }
  }
  acitveIndex.value = moveIndex
  transformX.value = -pageWidth.value * acitveIndex.value
}

const getSelectedOptionsByValue = (
  options,
  value
) => {
  const { valueKey, childrenKey } = props
  for (const option of options) {
    if (option[valueKey] === value) {
      return [option]
    }

    if (option[childrenKey]) {
      const selectedOptions = getSelectedOptionsByValue(
        option[childrenKey],
        value
      )
      if (selectedOptions) {
        return [option, ...selectedOptions]
      }
    }
  }
}
const updateTabs = () => {
  const { list, valueKey, childrenKey } = props

  if (currentSelect.value !== undefined) {
    const selectedOptions = getSelectedOptionsByValue(list, currentSelect.value)

    if (selectedOptions) {
      let optionsCursor = list

      tabs.value = selectedOptions.map((option) => {
        const tab = {
          options: optionsCursor,
          selected: option
        }

        const next = optionsCursor.find(
          (item) => item[valueKey] === option[valueKey]
        )
        if (next) {
          optionsCursor = next[childrenKey]
        }

        return tab
      })

      if (optionsCursor) {
        tabs.value.push({
          options: optionsCursor,
          selected: null
        })
      }

      nextTick(() => {
        acitveIndex.value = tabList.value.length - 1
      })
      return
    }
  }

  tabs.value = [
    {
      options: list,
      selected: null
    }
  ]
}
updateTabs()

watch(() => props.list, updateTabs, { deep: true })

defineExpose({
  open,
  close
})
</script>
<script>
export default {
  name: 'UvCascader'
}
</script>

<style lang="scss">
:root {
  --lz-cascader-height: 70vh;
  --lz-cascader-content-padding: 10px 0;
  --lz-cascader-content-item-padding: 10px 16px;
  --lz-cascader-content-item-font-size: 14px;
  --lz-cascader-content-item-color: #323233;
  --lz-cascader-content-item-acitve-bg-color: #f2f3f5;
}
.cascader-popup {
  --lz-popup-content-title-padding: 10px 16px;
}
.lz-cascader {
  display: flex;
  width: 100%;
  height: var(--lz-cascader-height);
  flex-direction: column;
  .lz-cascader-content {
    overflow: hidden;
    padding: var(--lz-cascader-content-padding);
    width: 100%;
    min-height: 0;
    flex: 1 0;
    .lz-cascader-content-list {
      position: relative;
      display: flex;
      height: 100%;
      .lz-cascader-content-item-warp {
        position: relative;
        display: flex;
        overflow: auto;
        width: 100%;
        flex-direction: column;
        .lz-cascader-content-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: var(--lz-cascader-content-item-padding);
          width: 100%;
          font-size: var(--lz-cascader-content-item-font-size);
          color: var(--lz-cascader-content-item-color);
          &:active {
            background-color: var(--lz-cascader-content-item-acitve-bg-color);
          }
        }
        .lz-cascader-content-active-item {
          font-weight: 700;
          color: #1989fa;
        }
      }
    }
  }
}

</style>
