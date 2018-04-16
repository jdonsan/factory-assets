<template>
  <h2 class="app-title">
      <slot></slot>
  </h2>
</template>

<script>
export default {
  name: "AppTitle"
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors';

.app-title {
	color: $color-primary;
	padding: 0.5rem;
}
</style>

