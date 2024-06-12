<template>
  <div>
    <demoBlock title="点击反馈">
      <lz-grid
        clickable
      >
        <lz-grid-item
          v-for="item in 8"
          :key="item"
          :text="'文字'+item"
          icon-name="modular"
        />
      </lz-grid>
    </demoBlock>
    <demoBlock title="自定义列数">
      <lz-grid
        column-num="3"
      >
        <lz-grid-item
          v-for="item in 9"
          :key="item"
          :text="'文字'+item"
          icon-name="modular"
        />
      </lz-grid>
    </demoBlock>
    <demoBlock title="格子间距">
      <lz-grid
        gutter="10"
      >
        <lz-grid-item
          v-for="item in 8"
          :key="item"
          :text="'文字'+item"
          icon-name="modular"
        />
      </lz-grid>
    </demoBlock>
    <demoBlock title="内容横排">
      <lz-grid
        direction="row"
        reverse
      >
        <lz-grid-item
          v-for="item in 8"
          :key="item"
          :text="'文字'+item"
          icon-name="modular"
          @click="handleClick(item)"
        />
      </lz-grid>
    </demoBlock>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import { uvGrid, uvGridItem } from 'lz-ui'
const handleClick = (item) => {
  console.log(item)
}
</script>

<style lang="scss" scoped>

</style>
