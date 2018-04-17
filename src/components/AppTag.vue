<template>
  <span class="app-tag">{{ value }}</span>
</template>

<script>
export default {
  name: 'AppTag',

  props: {
    value: {
      type: String | Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_colors";

.app-tag {
  display: inline-block;
  padding: 0.1rem 0.5rem;
  margin-bottom: 0.5rem;
  background: $color-basic-ligth-2;
  color: $color-secondary;
}
</style>

