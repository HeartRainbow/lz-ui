<template>
  <div>
    <demoBlock title="不同类型">
      <div class="flex">
        <lz-button>默认按钮</lz-button>
        <lz-button type="primary">
          主要按钮
        </lz-button>
        <lz-button type="success">
          成功按钮
        </lz-button>
        <lz-button type="error">
          失败按钮
        </lz-button>
        <lz-button type="info">
          信息按钮
        </lz-button>
        <lz-button type="warning">
          警告按钮
        </lz-button>
      </div>
    </demoBlock>
    <demoBlock title="禁用状态">
      <div class="flex">
        <lz-button disabled>
          默认按钮
        </lz-button>
        <lz-button
          disabled
          type="primary"
        >
          主要按钮
        </lz-button>
        <lz-button
          disabled
          type="success"
        >
          成功按钮
        </lz-button>
        <lz-button
          disabled
          type="error"
        >
          失败按钮
        </lz-button>
        <lz-button
          disabled
          type="info"
        >
          信息按钮
        </lz-button>
        <lz-button
          disabled
          type="warning"
        >
          警告按钮
        </lz-button>
      </div>
    </demoBlock>
    <demoBlock title="加载状态">
      <lz-button
        loading
        type="success"
      >
        加载中
      </lz-button>
    </demoBlock>
    <demoBlock title="使用图标">
      <div class="flex">
        <lz-button
          icon="add"
          icon-color="#f56c6c"
          :icon-size="18"
          type="success"
        >
          添加
        </lz-button>
        <lz-button
          icon="add"
          icon-position="right"
          type="success"
        >
          添加
        </lz-button>
      </div>
    </demoBlock>
    <demoBlock title="修改背景颜色和字体颜色">
      <lz-button
        bg-color="#f79055"
        color="#fff"
      >
        自定义按钮
      </lz-button>
    </demoBlock>
    <demoBlock title="按钮类型">
      <div class="flex">
        <lz-button
          square
          type="success"
        >
          方形按钮
        </lz-button>
        <lz-button
          round
          type="success"
        >
          圆角按钮
        </lz-button>
      </div>
    </demoBlock>
    <demoBlock title="按钮尺寸">
      <div class="flex">
        <lz-button
          size="normal"
          type="success"
        >
          普通按钮
        </lz-button>
        <lz-button
          size="small"
          type="success"
        >
          小型按钮
        </lz-button>
        <lz-button
          size="mini"
          type="success"
        >
          迷你按钮
        </lz-button>
      </div>
    </demoBlock>
    <demoBlock title="块级元素">
      <lz-button
        block
        type="success"
      >
        块级按钮
      </lz-button>
    </demoBlock>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import { uvButton } from 'lz-ui'
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
</style>
