<template>
  <div class="app-card-item">
    <span class="app-card-item-key">{{ description }}</span>
    <div class="app-card-item-detail">
      <span class="app-card-item-value">{{ value }}</span>
      <ul class="app-card-item-actions" v-if="actions">
        <li v-for="(action, index) in actions" :key="index" @click="action.method">
          <i class="material-icons">{{ action.icon }}</i>
        </li>
      </ul>
    </div>
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
    },

    actions: {
      type: Array,
      required: false
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

  &-actions {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      color: lighten($color-basic-dark, 30%);
      display: inline-block;
    }

    &:hover {
      cursor: pointer;
    }

    @media (min-width: $bp-tablets) {
      margin: 0 1rem;
    }
  }

  &-detail {
    @media (min-width: $bp-tablets) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>

