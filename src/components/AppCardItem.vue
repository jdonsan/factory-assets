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
      type: String | Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/_colors";
@import "../assets/scss/_breakpoints";

.app-card-item {
  display: block;
  padding: 1rem;
  border-bottom: 1px solid $color-basic-ligth-2;

  @media (min-width: $bp-tablets) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  span {
    display: block;
  }

  &-value {
    color: lighten($color-basic-dark, 30%);
    margin: 0.3rem 0;
  }
}
</style>

