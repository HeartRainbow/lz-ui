<template>
  <div>
    <demoBlock title="基本使用">
      <lz-button @click="showMessage">
        点击显示
      </lz-button>
    </demoBlock>
    <demoBlock title="修改持续时间">
      <lz-button @click="showMessage1">
        点击显示
      </lz-button>
    </demoBlock>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import { Message, uvButton } from 'lz-ui'
const showMessage = () => {
  Message({
    content: 'test'
  })
}

const showMessage1 = () => {
  Message({
    content: '持续6s',
    duration: 6000
  })
}

</script>

<style lang="scss" scoped>

</style>
