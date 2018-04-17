<template>
  <header class="app-card-header">
    <h3><slot></slot></h3>
  </header>
</template>

<script>
export default {
  name: 'AppCardHeader'
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors';

.app-card-header {
  border-bottom: 1px solid $color-basic-ligth-2;
  padding: 1rem;

  h3 {
    margin: 0;
  } 
}
</style>

