<template>
  <li class="app-list-item">
    <router-link :to="navigation">
      <div class="app-list-item-content">
        <p>{{ tag }}</p>
        <h3>{{ title }}</h3>
        <p>{{ detail }}</p>
      </div>
      <i class="material-icons">keyboard_arrow_right</i>
    </router-link>
  </li>
</template>

<script>
export default {
  name: "AppListItem",

  props: {
    title: {
      type: String,
      required: true
    },

    detail: {
      type: String,
      required: true
    },

    tag: {
      type: String,
      required: true
    },

    navigation: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_colors";

.app-list-item {
  border-bottom: 1px solid $color-basic-ligth-2;

  a {
    display: flex;
    padding: 1rem;
    text-decoration: none;
    justify-content: space-between;
    align-items: center;
    color: $color-primary;

    &:hover {
      cursor: pointer;
    }
  }

  h3,
  p {
    margin: 0;
    padding: 0;
  }
}

.app-list-item-content {
  flex: 1;
  min-width: 0; 
  
  h3 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>

