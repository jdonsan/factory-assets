<template>
  <div class="app-card-content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AppCardContent'
}
</script>

<style lang="scss" scoped>
.app-card-content {
  padding: 1rem;
}
</style>

