<template>
  <li class="app-list-item">
    <router-link :to="navigation">
      <div class="app-list-item-content">
        <app-tag :value="tag" />
        <h3>{{ title }}</h3>
        <p>{{ detail }}</p>
      </div>
      <div>
        <span class="app-list-item-notifications" v-if="notifications !== 0">
          <i class="material-icons">mode_comment</i>
          <span>{{ notifications }}</span>
        </span>
        <i class="material-icons">keyboard_arrow_right</i>
      </div>
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
    },

    notifications: {
      type: Number,
      required: false
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

  &-content {
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

  &-notifications {
    display: inline-flex;
    position: relative;
    color: $color-basic-ligth-1;
    background: $color-basic-ligth-2;
    border-radius: 100%;
    padding: 0.5rem;
    align-items: center;

    span {
      position: absolute;
      left: 0;
      right: 0;
      display: flex;
      color: $color-primary;
      justify-content: center;
      text-align: center;
      font-weight: bold;
    }
  }
}
</style>

