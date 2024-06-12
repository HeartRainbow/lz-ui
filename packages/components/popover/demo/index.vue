<template>
  <div>
    <demoBlock title="基本使用">
      <lz-popover
        v-model="test"
        :list="list"
        key-name="name"
      >
        <template #reference>
          <lz-button @click="test=true">
            打开
          </lz-button>
        </template>
      </lz-popover>
    </demoBlock>
    <demoBlock title="配置渲染列表">
      <lz-popover
        v-model="test1"
        :list="list"
        key-name="name"
      >
        <template #reference>
          <div style="margin-left: 100px;">
            <lz-button @click="test1=true">
              打开
            </lz-button>
          </div>
        </template>
      </lz-popover>
    </demoBlock>
    <demoBlock title="禁止点击外部关闭">
      <lz-popover
        v-model="test2"
        :list="list"
        close-on-click-action
        :close-on-click-outside="false"
        key-name="name"
      >
        <template #reference>
          <div style="margin-left: 200px;">
            <lz-button @click="test2=true">
              打开
            </lz-button>
          </div>
        </template>
      </lz-popover>
    </demoBlock>
    <demoBlock title="自定义内容">
      <lz-popover
        v-model="test3"
      >
        <template #reference>
          <div style="margin-left: 20px;">
            <lz-button @click="test3=true">
              打开
            </lz-button>
          </div>
        </template>
        <template #default>
          <div style="padding: 10px;">
            <div>无论我们能活多久</div>
            <div>无论我们能活多久</div>
            <div>我们能够享受的只有无法分割的此刻</div>
          </div>
        </template>
      </lz-popover>
    </demoBlock>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import { uvPopover, uvButton } from 'lz-ui'
import { ref } from 'vue'
const test = ref(false)
const test1 = ref(false)
const test2 = ref(false)
const test3 = ref(false)

const list = ref([
  {
    name: '选项一'
  },
  {
    name: '选项二',
    disabled: true
  }, {
    name: '选项三'
  }

])
</script>

<style lang="scss" scoped>

</style>
