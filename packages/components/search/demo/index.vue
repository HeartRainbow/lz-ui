<template>
  <div>
    <demoBlock title="基本使用">
      <lz-search placeholder="请输入内容" />
    </demoBlock>
    <demoBlock title="修改背景色">
      <lz-search bg-color="#4fc08d" />
    </demoBlock>
    <demoBlock title="修改搜索框的背景色">
      <lz-search
        bg-color="#f6f7f9"
        search-bg-color="#fff"
      />
    </demoBlock>
    <demoBlock title="搜索框圆角">
      <lz-search round />
    </demoBlock>
    <demoBlock title="是否禁用">
      <lz-search disabled />
    </demoBlock>
    <demoBlock title="搜索框内容对齐">
      <lz-search
        input-align="center"
      />
    </demoBlock>
    <demoBlock title="显示可清除图标">
      <lz-search
        v-model="value"
        clearable
      />
    </demoBlock>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import { uvSearch } from 'lz-ui'
import { ref } from 'vue'
const value = ref('')
</script>

<style lang="scss" scoped>

</style>
