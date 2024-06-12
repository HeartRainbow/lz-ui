<template>
  <div>
    <demoBlock title="基本使用">
      <lz-checkbox
        v-model="test1"
        label="数据1"
        @change="change"
      />
    </demoBlock>
    <demoBlock title="自定义形状">
      <lz-checkbox
        v-model="test2"
        label="test2"
        shape="square"
      />
    </demoBlock>
    <demoBlock title="禁用状态">
      <lz-checkbox
        v-model="test2"
        disabled
        label="单选框"
      />
    </demoBlock>
    <demoBlock title="自定义选中背景色">
      <lz-checkbox
        v-model="test2"
        checked-color="red"
      >
        单选框
      </lz-checkbox>
    </demoBlock>
    <demoBlock title="文本位置">
      <lz-checkbox
        v-model="test2"
        label="单选框"
        shape="square"
        label-position="left"
      />
    </demoBlock>
    <demoBlock title="是否两边排布">
      <lz-checkbox
        v-model="test3"
        label="单选框"
        space-between
        label-position="left"
      />
    </demoBlock>
    <demoBlock title="多选组">
      <lz-checkbox-group
        v-model="checkArr"
      >
        <lz-checkbox
          label="test1"
        />
        <lz-checkbox
          label="test2"
        />
        <lz-checkbox
          label="test3"
        />
        <lz-checkbox
          label="test4"
        />
        <lz-checkbox
          label="test41"
        />
        <lz-checkbox
          label="test42"
        />
        <lz-checkbox
          label="test43"
        />
      </lz-checkbox-group>
    </demoBlock>
    <demoBlock title="限制最大选择数量">
      <lz-checkbox-group
        v-model="checkArr1"
        :max="2"
      >
        <lz-checkbox
          label="test1"
        />
        <lz-checkbox
          label="test2"
        />
        <lz-checkbox
          label="test3"
        />
        <lz-checkbox
          label="test4"
        />
      </lz-checkbox-group>
    </demoBlock>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import { uvCheckbox, uvCheckboxGroup } from 'lz-ui'
import { ref } from 'vue'
const test1 = ref(false)
const test2 = ref(true)
const test3 = ref(false)
const checkArr = ref([])
const checkArr1 = ref(['test1'])
const change = (e) => {
  console.log(e)
}
</script>

<style lang="scss" scoped>

</style>
