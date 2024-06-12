<template>
  <div
    class="lz-divider"
    :class="[hairline?'lz-divider-hairline':'',dashed?'lz-divider-dashed':'',position==='left'?'lz-divider-left':'',position==='right'?'lz-divider-right':'']"
  >
    <slot />
  </div>
</template>

<script setup>

defineProps({
  // 0.5px线
  hairline: {
    type: Boolean,
    default: false
  },
  // 虚线
  dashed: {
    type: Boolean,
    default: false
  },
  // 位置left和right可选
  position: {
    type: String
  }
})
</script>
<script>
export default {
  name: 'UvDivider'
}
</script>

<style lang="scss">
:root {
  --lz-divider-margin: 16px 0;
  --lz-divider-font-size: 14px;
  --lz-divider-border-color: #ebedf0;
  --lz-divider-color: #969799;
  --lz-divider-line-height: 1px;
  --lz-divider-content-distance: 10px;
  --lz-divider-left-line-max-width: 10%;
  --lz-divider-right-line-max-width: 10%;
}
.lz-divider {
  display: flex;
  align-items: center;
  margin: var(--lz-divider-margin);
  font-size: var(--lz-divider-font-size);
  border-style: solid;
  border-width: 0;
  border-color: var(--lz-divider-border-color);
  color: var(--lz-divider-color);
  &::before,
  &::after {
    box-sizing: border-box;
    display: block;
    height: var(--lz-divider-line-height);
    border-style: inherit;
    border-width: var(--lz-divider-line-height) 0 0;
    border-color: inherit;
    content: "";
    flex: 1;
  }
  &::before {
    margin-right: var(--lz-divider-content-distance);
  }
  &::after {
    margin-left: var(--lz-divider-content-distance);
  }
}
.lz-divider-hairline {
  &::before,
  &::after {
    transform: scaleY(0.5);
  }
}
.lz-divider-dashed {
  border-style: dashed;
}
.lz-divider-left {
  &::before {
    max-width: var(--lz-divider-left-line-max-width);
  }
}
.lz-divider-right {
  &::after {
    max-width: var(--lz-divider-right-line-max-width);
  }
}
</style>
