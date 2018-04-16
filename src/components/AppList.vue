<template>
  <ul class="app-list">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: "AppList"
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors';

.app-list {
  list-style: none;
  border: 0;
  background: $color-basic-ligth-1;
}
</style>
