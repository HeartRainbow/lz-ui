<template>
  <div>
    <demoBlock title="点击反馈">
      <lz-cell
        clickable
        title="test"
        value="内容"
      />
    </demoBlock>
    <demoBlock title="卡片式">
      <lz-cell-group
        card
        gap
      >
        <lz-cell
          title="test"
          value="内容"
        />
        <lz-cell
          title="test"
          value="内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"
        />
      </lz-cell-group>
    </demoBlock>
    <demoBlock title="字体大小">
      <lz-cell
        size="16"
        title="test"
        value="内容"
      />
    </demoBlock>
    <demoBlock title="添加图标">
      <lz-cell
        icon="add"
        icon-color="#4fc0a7"
        size="16"
        title="test"
        value="内容"
      />
    </demoBlock>
    <demoBlock title="显示箭头">
      <lz-cell-group card>
        <lz-cell
          arrow
          title="test"
          value="内容"
        />
        <lz-cell
          arrow
          arrow-direction="down"
          title="test"
          value="内容"
        />
      </lz-cell-group>
    </demoBlock>
    <demoBlock title="使用插槽">
      <lz-cell>
        <template #title>
          自定义title
        </template>
        <template #value>
          自定义value
        </template>
      </lz-cell>
    </demoBlock>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import { uvCell, uvCellGroup } from 'lz-ui'

</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
</style>
