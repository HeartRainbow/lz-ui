<template>
  <div class="lz-skeleton-image">
    <lz-icon
      :size="iconSize"
      name="photo"
      :color="iconColor"
    />
  </div>
</template>

<script setup>
import uvIcon from '../icon'
defineProps({
  iconSize: {
    type: String,
    default: '48'
  },
  iconColor: {
    type: String,
    default: '#c8c9cc'
  }
})
</script>
<script>
export default {
  name: 'UvSkeletonImage'
}
</script>

<style lang="scss">
:root {
  --lz-skeleton-image-size: 96px;
  --lz-skeleton-image-bg-color: #f2f3f5;
}
.lz-skeleton-image {
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--lz-skeleton-image-size);
  height: var(--lz-skeleton-image-size);
  background-color: var(--lz-skeleton-image-bg-color);
}

</style>
