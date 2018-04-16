<template>
  <main class="app-container">
      <slot></slot>
  </main>
</template>

<script>
export default {
  name: "AppContainer"
};
</script>

<style lang="scss" scoped>
.app-container {
  max-width: 1024px;
  margin: 0 auto;
  padding: 4rem 0.5rem;
}
</style>

