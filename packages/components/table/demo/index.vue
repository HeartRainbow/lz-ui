<template>
  <div>
    <demoBlock title="基本使用">
      <lz-table
        :data="tableData"
        :columns="columns"
      />
    </demoBlock>
    <demoBlock title="插槽">
      <lz-table
        :data="tableData"
        :columns="columns"
      >
        <template #Date="scope">
          <lz-button
            type="warning"
            size="mini"
          >
            {{ scope.data.title }}
          </lz-button>
        </template>
        <template #name="scope">
          <lz-button
            type="primary"
            size="mini"
          >
            {{ scope.data }}
          </lz-button>
        </template>
      </lz-table>
    </demoBlock>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import { uvTable, uvButton } from 'lz-ui'
const columns = [
  {
    title: 'Date',
    prop: 'date',
    titleSlot: 'Date'
  }, {
    title: 'Name',
    prop: 'name'
  }, {
    title: 'State',
    prop: 'state'
  }, {
    title: 'Zip',
    prop: 'zip'
  }
]
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    zip: 'CA 90036'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    zip: 'CA 90036'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    zip: 'CA 90036'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    zip: 'CA 90036'
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    state: 'California',
    zip: 'CA 90036'
  },
  {
    date: '2016-05-11',
    name: 'Tom',
    state: 'California',
    zip: 'CA 90036'
  },
  {
    date: '2016-05-31',
    name: 'Tom',
    state: 'California',
    zip: 'CA 90036'
  }
]
</script>

<style lang="scss" scoped>

</style>
