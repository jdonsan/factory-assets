<template>
  <header class="app-header">
      <h1>Factory Asset</h1>
  </header>
</template>

<script>
export default {
  name: "AppHeader"
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_colors";

.app-header {
  z-index: 4;
  background: $color-primary;
  color: $color-basic-ligth-1;
  padding: 1rem;
  position: fixed;
  right: 0;
  left: 0;
  box-shadow: 0px 1px 3px 0px$color-basic-dark;

  h1 {
    margin: 0;
    font-size: 1.5rem;
    text-align: center;
  }
}
</style>

