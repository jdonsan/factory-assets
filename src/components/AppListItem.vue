<template>
  <li class="app-list-item">
    <router-link :to="navigation">
      <p>{{ tag }}</p>
      <h3>{{ title }} (<small>{{ detail }}</small>)</h3>
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
      required: true,
    },

    tag: {
      type: String,
      required: true,
    },

    navigation: {
      type: String,
      required: true,
    }
  }
};
</script>

<style lang="scss" scoped>

</style>

