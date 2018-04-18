<template>
  <div :class="['app-toolbar', { 'app-toolbar--expand': expand }]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AppToolbar',

  props: {
    expand: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/_colors";

.app-toolbar {
  display: flex;
  padding: 1rem;
  background: $color-basic-ligth-1;
  border-radius: 5px;
  margin-bottom: 1rem;

  select {
    background: $color-basic-ligth-1;

    &:first-child {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }

    &:last-child {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }

  &--expand {
    justify-content: space-between;
  }
}
</style>

