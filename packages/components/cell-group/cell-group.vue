<template>
  <div
    class="lz-cell-group"
    :style="{width:gap?'95%':'100%'}"
    :class="card?'lz-cell-group-card':''"
  >
    <slot />
  </div>
</template>

<script setup>

defineProps({
  card: {
    type: Boolean,
    default: false
  },
  gap: {
    type: Boolean,
    default: false
  }
})
</script>
<script>
export default {
  name: 'UvCellGroup'
}
</script>

<style lang="scss">
:root {
  --lz-cell-group-border-top: 1px solid #f5f6f7;
  --lz-cell-group-border-bottom: 1px solid #f5f6f7;
  --lz-cell-group-bg-color: #ffffff;
  --lz-cell-group-card-border-radius: 8px;
}
.lz-cell-group {
  overflow: hidden;
  margin: 0 auto;
  border-top: var(--lz-cell-group-border-top);
  border-bottom: var(--lz-cell-group-border-bottom);
  background-color: var(--lz-cell-group-bg-color);
}
.lz-cell-group-card {
  border-radius: var(--lz-cell-group-card-border-radius);
}
</style>
