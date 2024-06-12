<template>
  <div
    class="lz-table"
  >
    <div class="lz-table-header-wrapper">
      <div class="lz-table-tr">
        <div
          class="lz-table-th"
          :style="{width:item.width,flex:item.width?'':1}"
          v-for="(item,index) in columns"
          :key="item.prop || index"
        >
          <slot
            :name="item.titleSlot"
            :data="item"
          >
            {{ item.title }}
          </slot>
        </div>
      </div>
    </div>
    <div
      class="lz-table-body-wrapper"
    >
      <div
        class="lz-table-tr"
        v-for="(item,indextr) in data"
        :key="indextr"
      >
        <div
          class="lz-table-td"
          :style="{width:chil.width,flex:chil.width?'':1}"
          v-for="(chil,idx) in columns"
          :key="chil.prop || idx"
        >
          <slot
            :name="chil.prop"
            :data="item[chil.prop]"
          >
            {{ item[chil.prop] || '' }}
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

// import { onMounted, ref } from 'vue'
defineProps({
  data: {
    type: Array,
    default: () => ([])
  },
  columns: {
    type: Array,
    default: () => ([])
  }
})

</script>
<script>
export default {
  name: 'UvTable'
}
</script>
<style lang="scss">
.lz-table {
  display: flex;
  overflow-x: auto;
  width: 100%;
  height: 100%;
  flex-direction: column;
  .lz-table-header-wrapper {
    width: 100%;
  }
  .lz-table-body-wrapper {
    width: 100%;
  }
  .lz-table-tr {
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    .lz-table-th,
    .lz-table-td {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      padding: 10px 0;
      font-size: 14px;
      border-right: 1px solid #ebeef5;
      border-bottom: 1px solid #ebeef5;
      background-color: #ffffff;
      &:last-child {
        border-right: none;
      }
    }
    .lz-table-th {
      font-weight: 700;
      color: #7f7f7f;
    }
    .lz-table-td {
      color: #333333;
    }
  }
}
</style>
