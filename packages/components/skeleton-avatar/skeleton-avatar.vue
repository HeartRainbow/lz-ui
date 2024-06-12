<template>
  <div class="lz-skeleton-avatar" :class="avatarShape==='round'?'lz-skeleton-avatar-round':''" />
</template>

<script setup>
defineProps({
  avatarShape: {
    type: String,
    default: 'round'
  }
})
</script>
<script>
export default {
  name: 'UvSkeletonAvatar'
}
</script>

<style lang="scss">
:root {
  --lz-skeleton-avatar-size: 32px;
  --lz-skeleton-avatar-bg-color: #f2f3f5;
  --lz-skeleton-avatar-margin-right: 12px;
}
.lz-skeleton-avatar {
  margin-right: var(--lz-skeleton-avatar-margin-right);
  width: var(--lz-skeleton-avatar-size);
  height: var(--lz-skeleton-avatar-size);
  background-color: var(--lz-skeleton-avatar-bg-color);
  flex-shrink: 0;
  &-round {
    border-radius: 50%;
  }
}

</style>
