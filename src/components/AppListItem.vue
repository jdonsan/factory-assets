<template>
  <li class="app-list-item">
    <router-link :to="navigation">
      <div class="app-list-item-content">
        <app-tag :value="tag" />
        <h3>{{ title }}</h3>
        <p>{{ detail }}</p>
      </div>
      <i class="material-icons">keyboard_arrow_right</i>
    </router-link>
  </li>
</template>

<script>
import AppTag from '@/components/AppTag'

export default {
  name: "AppListItem",

  components: {
    AppTag
  },
  
  props: {
    title: {
      type: String,
      required: true
    },

    detail: {
      type: String|Object,
      required: true
    },

    tag: {
      type: String|Object,
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

  .app-list-item-content {
    flex: 1;
    min-width: 0;

    h3,
    p {
      margin: 0;
      padding: 0;
    }

    h3 {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    p, small {
      color: darken($color-basic-ligth-2, 20%);
    }
  }
}
</style>

