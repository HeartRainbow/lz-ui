<template>
  <div>
    <demoBlock title="基本使用">
      <lz-notice-bar text="无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。" />
    </demoBlock>
    <demoBlock title="是否滚动">
      <lz-notice-bar
        text="无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。"
        :scrollable="false"
      />
    </demoBlock>
    <demoBlock title="插槽">
      <lz-notice-bar
        :scrollable="false"
      >
        test
      </lz-notice-bar>
    </demoBlock>
    <demoBlock title="通知栏模式">
      <lz-notice-bar
        mode="link"
        text="米袋虽空——樱花开哉！"
        @click="test"
      />
    </demoBlock>
    <demoBlock title="可关闭">
      <lz-notice-bar
        v-if="isShow"
        class="bottom"
        mode="close"
        speed="90"
        :show-left-icon="false"
        text="无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。"
        @close="close"
      />
    </demoBlock>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import { uvNoticeBar } from 'lz-ui'
import { ref } from 'vue'
const test = () => {
  console.log('点击了')
}
const isShow = ref(true)
const close = () => {
  console.log('关闭了')
  isShow.value = false
}
</script>

<style lang="scss" scoped>

</style>
