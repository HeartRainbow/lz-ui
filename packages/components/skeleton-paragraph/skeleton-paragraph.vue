<template>
  <div class="lz-skeleton-paragraph" :class="round?'lz-skeleton-paragraph-round':''" :style="{width:rowWidth}" />
</template>

<script setup>
defineProps({
  round: {
    type: Boolean,
    default: false
  },
  rowWidth: {
    type: String,
    default: '100%'
  }
})
</script>
<script>
export default {
  name: 'UvSkeletonParagraph'
}
</script>

<style lang="scss">
:root {
  --lz-skeleton-paragraph-height: 16px;
  --lz-skeleton-paragraph-bg-color: #f2f3f5;
  --lz-skeleton-paragraph-margin-top: 12px;
}
.lz-skeleton-paragraph {
  height: var(--lz-skeleton-paragraph-height);
  background-color: var(--lz-skeleton-paragraph-bg-color);
  &-round {
    border-radius: var(--lz-skeleton-border-radius);
  }
  &:not(:first-child) {
    margin-top: var(--lz-skeleton-paragraph-margin-top);
  }
}

</style>
