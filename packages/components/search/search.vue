<template>
  <div
    class="lz-search"
    :style="{backgroundColor:bgColor}"
  >
    <div
      class="lz-search-content"
      :class="uvSearchClass"
      :style="{backgroundColor:searchBgColor}"
    >
      <div>
        <lz-icon
          name="search"
          size="22"
          color="#99a0ac"
        />
      </div>
      <div
        class="lz-search-content-input"
      >
        <input
          :value="modelValue"
          :style=" {textAlign:inputAlign,backgroundColor:searchBgColor}"
          :disabled="disabled"
          @input="handleInput"
          @focus="handleFocus"
          @blur="handleBlur"
          :placeholder="placeholder"
        >
      </div>
      <div
        @click="clearValueEvent"
        v-if="clearable && modelValue"
        class="lz-search-content-close"
      >
        <lz-icon
          name="error"
          size="22"
          color="#99a0ac"
        />
      </div>
    </div>
  </div>
</template>

<script setup>

import uvIcon from '../icon'
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: '请输入'
  },
  clearable: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  inputAlign: {
    type: String,
    default: 'left'
  },
  bgColor: {
    type: String,
    default: '#fff'
  },
  searchBgColor: {
    type: String,
    default: '#f7f8fa'
  }
})
const emit = defineEmits(['update:modelValue', 'clear', 'focus', 'blur'])
const uvSearchClass = computed(() => {
  return [
    props.round ? 'lz-search-content-round' : ''
  ]
})
function clearValueEvent () {
  emit('update:modelValue', '')
  emit('clear')
}
function handleInput (e) {
  const { value } = e.target
  emit('update:modelValue', value)
}
function handleFocus () {
  emit('focus')
}
function handleBlur (e) {
  const { value } = e.target
  emit('blur', value)
}
</script>
<script>
export default {
  name: 'UvSearch'
}
</script>

<style lang="scss">
:root {
  --lz-search-padding: 10px;
  --lz-search-content-padding: 2px 10px;
  --lz-search-content-border-radius: 4px;
  --lz-search-input-placeholder-color: #d3c9d6;
  --lz-search-input-padding: 8px;
  --lz-search-input-font-size: 14px;
  --lz-search-input-border-radius: 4px;
  --lz-search-input-disabled-color: #d3c9d6;
  --lz-search-content-round-border-radius: 40px;
}
.lz-search {
  position: relative;
  padding: var(--lz-search-padding);
  .lz-search-content {
    display: flex;
    align-items: center;
    padding: var(--lz-search-content-padding);
    border-radius: var(--lz-search-content-border-radius);
    &-input {
      flex: 1;
      font-size: var(--lz-search-input-font-size);
      input {
        padding: var(--lz-search-input-padding);
        width: 100%;
        border: none;
        border-radius: var(--lz-search-input-border-radius);
        outline: none;
      }
      input::placeholder {
        color: var(--lz-search-input-placeholder-color);
      }
      input:disabled {
        color: var(--lz-search-input-disabled-color);
      }
    }
  }
  .lz-search-content-round {
    border-radius: var(--lz-search-content-round-border-radius);
  }
}

</style>
