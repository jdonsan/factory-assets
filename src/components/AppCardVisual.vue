<template>
  <div class="app-card-visual">
    <h4>{{ title }}</h4>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AppCardVisual',

  props: {
    title: {
      type: String,
      required:true
    }
  }
}
</script>

<style lang="scss" scoped>
.app-card-visual {
  padding: 1rem;
}
</style>

