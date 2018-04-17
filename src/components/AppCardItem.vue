<template>
  <div class="app-card-item">
    <span class="app-card-item-key">{{ description }}</span>
    <span class="app-card-item-value">{{ value }}</span>
  </div>
</template>

<script>
export default {
  name: 'AppCardItem',

  props: {
    description: {
      type: String,
      required: true
    },

    value: {
      type: String|Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors';

.app-card-item {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid $color-basic-ligth-2;

  &-value {
    text-align: right;
  }
}
</style>

