<template>
  <div class="app-container">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'AppContainer'
}
</script>

<style lang="scss" scoped>
.app-container {
    max-width: 1024px;
    margin: 0 auto;
    padding: 0.5rem;
}
</style>

