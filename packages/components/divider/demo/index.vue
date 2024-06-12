<template>
  <div>
    <demoBlock title="基本使用">
      <lz-divider>标题</lz-divider>
    </demoBlock>
    <demoBlock title="使用 0.5px 线">
      <lz-divider
        hairline
      >
        标题
      </lz-divider>
    </demoBlock>
    <demoBlock title="开启虚线">
      <lz-divider
        dashed
      >
        标题
      </lz-divider>
    </demoBlock>
    <demoBlock title="内容位置">
      <lz-divider
        position="left"
      >
        标题
      </lz-divider>
      <lz-divider
        position="right"
      >
        标题
      </lz-divider>
    </demoBlock>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import { uvDivider } from 'lz-ui'

</script>

<style lang="scss" scoped>

</style>
