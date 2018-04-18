<template>
  <header class="app-header">
    <router-link to="/">
      <h1>Factory Asset</h1>
    </router-link>
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
  padding: 1rem;
  position: fixed;
  right: 0;
  left: 0;
  box-shadow: 0px 1px 3px 0px$color-basic-dark;

  a {
    color: $color-basic-ligth-1;
    text-decoration: none;
  }

  h1 {
    margin: 0;
    font-size: 1.5rem;
    text-align: center;
  }
}
</style>

