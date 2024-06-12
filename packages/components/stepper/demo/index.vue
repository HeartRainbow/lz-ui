<template>
  <div style="margin: 10px auto;width: 95%;">
    <lz-cell-group card>
      <lz-cell
        title="基本使用"
        :label-width="220"
      >
        <template #value>
          <div style="display: flex;justify-content: flex-end;">
            <lz-stepper
              :min="-5"
              v-model="value"
            />
          </div>
        </template>
      </lz-cell>
      <lz-cell
        title="限制为整数"
        :label-width="220"
      >
        <template #value>
          <div style="display: flex;justify-content: flex-end;">
            <lz-stepper
              integer
              v-model="value11"
            />
          </div>
        </template>
      </lz-cell>
      <lz-cell
        title="禁止输入框输入"
        :label-width="220"
      >
        <template #value>
          <div style="display: flex;justify-content: flex-end;">
            <lz-stepper
              disable-input
              v-model="value22"
            />
          </div>
        </template>
      </lz-cell>
      <lz-cell
        :label-width="220"
        title="修改步长，每次+-3"
      >
        <template #value>
          <div style="display: flex;justify-content: flex-end;">
            <lz-stepper
              :step="3"
              v-model="value2"
            />
          </div>
        </template>
      </lz-cell>
      <lz-cell
        :label-width="220"
        title="修改尺寸"
      >
        <template #value>
          <div style="display: flex;justify-content: flex-end;">
            <lz-stepper
              :size="34"
              input-width="40px"
              v-model="value2"
            />
          </div>
        </template>
      </lz-cell>
      <lz-cell
        :label-width="220"
        title="限制输入范围(-1,5)"
      >
        <template #value>
          <div style="display: flex;justify-content: flex-end;">
            <lz-stepper
              :min="-1"
              :max="5"
              v-model="value1"
            />
          </div>
        </template>
      </lz-cell>
    </lz-cell-group>
  </div>
</template>

<script setup>
// import demoBlock from '../../../demo/demo-block.vue'
import { uvStepper, uvCellGroup, uvCell } from 'lz-ui'
import { ref } from 'vue'
const value = ref(2)
const value11 = ref(1)
const value1 = ref(1)
const value2 = ref(1)
const value22 = ref(1)
</script>

<style lang="scss" scoped>

</style>
