<template>
  <article class="app-card">
    <slot></slot>
  </article>
</template>

<script>
export default {
  name: 'AppCard'
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors';

.app-card {
  background: $color-basic-ligth-1;
  border-radius: 5px;
}
</style>
