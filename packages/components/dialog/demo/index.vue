<template>
  <div>
    <demoBlock title="基本使用">
      <lz-button
        type="primary"
        @click="openDialog"
      >
        打开dialog
      </lz-button>
    </demoBlock>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import { showDialog, uvButton } from 'lz-ui'

const openDialog = () => {
  showDialog({
    title: 'Dialog',
    message: '代码是写出来给人看的，附带能在机器上运行。'
  })
}
</script>

<style lang="scss" scoped>

</style>
