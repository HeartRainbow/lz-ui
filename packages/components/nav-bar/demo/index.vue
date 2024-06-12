<template>
  <div>
    <demoBlock title="基本使用">
      <lz-nav-bar
        title="标题"
      />
    </demoBlock>
    <demoBlock title="返回上级">
      <lz-nav-bar
        title="标题"
        left-title="返回"
        left-arrow
      />
    </demoBlock>
    <demoBlock title="右侧插槽">
      <lz-nav-bar
        title="标题"
        left-title="返回"
        left-arrow
      >
        <template #right>
          <lz-icon
            size="18"
            name="search"
            color="#419dfb"
          />
        </template>
      </lz-nav-bar>
    </demoBlock>
    <demoBlock title="fixed定位">
      <div style="margin-bottom: 10px;">
        <lz-button @click="clickhandle">
          {{ isFixed?'关闭':'开启' }}
        </lz-button>
      </div>
      <lz-nav-bar
        title="标题"
        :fixed="isFixed"
      />
    </demoBlock>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import { uvNavBar, uvIcon, uvButton } from 'lz-ui'
import { ref } from 'vue'

const isFixed = ref(false)
const clickhandle = () => {
  isFixed.value = !isFixed.value
}
</script>

<style lang="scss" scoped>

</style>
