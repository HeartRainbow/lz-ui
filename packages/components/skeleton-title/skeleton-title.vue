<template>
  <div class="lz-skeleton-title" :class="round?'lz-skeleton-title-round':''" :style="{width:titleWidth}" />
</template>

<script setup>
defineProps({
  round: {
    type: Boolean,
    default: false
  },
  titleWidth: {
    type: String,
    default: '40%'
  }
})
</script>
<script>
export default {
  name: 'UvSkeletonTitle'
}
</script>

<style lang="scss">
:root {
  --lz-skeleton-title-height: 16px;
  --lz-skeleton-title-bg-color: #f2f3f5;
  --lz-skeleton-title-margin-bottom: 12px;
}
.lz-skeleton-title {
  margin-bottom: var(--lz-skeleton-title-margin-bottom);
  height: var(--lz-skeleton-title-height);
  background-color: var(--lz-skeleton-title-bg-color);
  &-round {
    border-radius: var(--lz-skeleton-border-radius);
  }
}

</style>
