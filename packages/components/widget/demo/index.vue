<template>
  <div>
    <demoBlock title="基本使用">
      <uv-button type="primary" @click="openWidget(0)">
        打开widget1
      </uv-button>
      <uv-button type="primary" @click="openWidget(1)">
        打开widget2
      </uv-button>
      <uv-button type="primary" @click="box = !box">
        box控制
      </uv-button>
    </demoBlock>

    <!-- 第一个 Widget -->
    <Widget v-model="show[0]" draggable closable fullscreen>
      <template #head>我是头 1</template>
      <div>我是内容区域 1</div>
    </Widget>

    <!-- 第二个 Widget -->
    <Widget v-model="show[1]" draggable closable fullscreen>
      <template #head>我是头 2</template>
      <div>我是内容区域 2</div>
    </Widget>

    <!-- 固定位置的 Widget -->
    <Widget style="top: 200px; left: 10px" v-model="box" :resizeable="true" :draggable="true" closable fullscreen width="200px"
      height="120px" />
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue';
import { Widget, uvButton } from 'ui';
import { ref } from 'vue';

const show = ref([true, true]);  // 用数组来管理多个 Widget 的显示状态
const box = ref(true);

const openWidget = (index) => {
  show.value[index] = !show.value[index];
};
</script>
