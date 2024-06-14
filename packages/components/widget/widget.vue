<!-- Widget.vue -->
<template>
  <div v-bind="$attrs" class="uv-dialog-wrapper">
    <transition name="drag-win">
      <div class="drag-dialog ban-select-font" ref="dragWin" v-show="modelValue" v-resize="props.resizeable">
        <!-- 拖拽窗体头部 -->
        <div class="drag-bar" :style="headStyle" v-drag="props.draggable">
          <slot name="head" />
          <div class="drag-btn drag-close" @click="handleCancelClick" v-if="closable" />
          <i class="drag-btn drag-full" @click="fullScreenClick" v-if="fullscreen" />
        </div>
        <!-- 拖拽框主要部分 -->
        <div class="drag-main" :style="mainStyle">
          <slot />
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { drag, resize } from '../../directives';

const vDrag = drag
const vResize = resize


// 定义 props
const props = defineProps({
  title: String,
  message: {
    type: String,
    default: "",
  },
  modelValue: {
    type: Boolean,
    default: true,
  },
  width: {
    type: String,
    default: "500px",
  },
  height: {
    type: String,
    default: "400px",
  },
  headHeight: {
    type: String,
    default: "35px",
  },
  headStyle: {
    type: String,
    default: "",
  },
  mainStyle: {
    type: String,
    default: "",
  },
  resizeable: [String, Boolean],
  draggable: [String, Boolean],
  closable: {
    type: Boolean,
    default: false,
  },
  fullscreen: {
    type: Boolean,
    default: false,
  },
  confirmButtonDisabled: {
    type: Boolean,
    default: false,
  },
  showCancelButton: {
    type: Boolean,
    default: false,
  },
  cancelButtonText: {
    type: String,
    default: "取消",
  },
  cancelButtonColor: {
    type: String,
    default: "#000000",
  },
  cancelButtonDisabled: {
    type: Boolean,
    default: false,
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: false,
  },
  submitCallback: Function,
  cancelCallback: Function,
});

// 记录原来的大小
const recordBox = {
  width: 0,
  height: 0,
  top: 0,
  left: 0,
  fill: false,
};

// 获取窗口实体
const dragWin = ref(null);

// 事件定义
const emit = defineEmits(["update:modelValue", "cancel", "confirm"]);

const operationClick = (type) => {
  if (props.confirmButtonDisabled && type === "confirm") return false;
  if (props.cancelButtonDisabled && type === "cancel") return false;

  if (type === "confirm") emit("confirm");
  if (type === "cancel") emit("cancel");

  emit("update:modelValue", !props.modelValue);
  return true;
};

// const handleCancelClick = () => {
//   if (props.cancelCallback) {
//     props.cancelCallback(operationClick('cancel'));
//   } else {
//     emit('update:modelValue', false);
//   }
// };

const handleCancelClick = () => {
  if (props.cancelCallback) {
    props.cancelCallback();
  }
  emit('update:modelValue', false);
};

// 全屏控件
const fullScreenClick = () => {
  const tmp = dragWin.value;
  const style = dragWin.value.style;

  if (!style.width || style.width !== "100vw") {
    recordBox.fill = false;
  }

  if (recordBox.fill) {
    style.width = `${recordBox.width}px`;
    style.height = `${recordBox.height}px`;
    style.top = `${recordBox.top}px`;
    style.left = `${recordBox.left}px`;
  } else {
    recordBox.width = tmp.offsetWidth;
    recordBox.height = tmp.offsetHeight;
    recordBox.top = tmp.offsetTop;
    recordBox.left = tmp.offsetLeft;

    style.width = "100vw";
    style.height = "100vh";
    style.top = "0px";
    style.left = "0px";
  }

  recordBox.fill = !recordBox.fill;
};
</script>

<style lang="scss" scoped>
/* 样式定义 */
.ban-select-font {
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
  user-select: none;
}

.drag-dialog {
  position: fixed;
  width: v-bind("props.width");
  height: v-bind("props.height");
  left: calc(50% - v-bind("props.width") / 2);
  top: calc(50% - v-bind("props.height") / 2);
  box-sizing: border-box;
  padding: 8px;
  overflow: hidden;
  color: #fff;
  min-width: 200px;
  min-height: 200px;
  max-width: 100vw;
  max-height: 100vh;
  background-color: #313438;
}

.drag-bar {
  width: 100%;
  cursor: move;
  height: v-bind("props.headHeight");
  border-bottom: 1px solid #fff;
  box-sizing: border-box;
  padding: 1px 2px 9px;
}

.drag-btn {
  width: 25px;
  height: 25px;
  float: right;
  cursor: pointer;
  margin-left: 5px;
  border-radius: 50%;
}

.drag-full {
  background-color: #28c940b8;
}

.drag-full:hover {
  background-color: #28c93f;
}

.drag-close {
  background-color: #f2473ec7;
}

.drag-close:hover {
  background-color: #f2473e;
}

.drag-main {
  width: 100%;
  height: calc(100% - v-bind("props.headHeight"));
  box-sizing: border-box;
  overflow: auto;
  font-size: 13px;
  line-height: 1.6;
}

.drag-win-enter-from,
.drag-win-leave-to {
  opacity: 0;
  transform: scale(0);
}

.drag-win-enter-to,
.drag-win-leave-from {
  opacity: 1;
}

.drag-win-enter-active,
.drag-win-leave-active {
  transition: all 0.5s ease;
}
</style>
