<template>
  <div>
    <router-link :class="['app-navigation', 'app-navigation--' + mode]" :to="to" v-if="show">
      <i v-if="mode === 'prev'" class="material-icons">keyboard_arrow_left</i>
      {{ label }}
      <i v-if="mode === 'next'" class="material-icons">keyboard_arrow_right</i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'AppNavigation',

  props: {
    mode: {
      type: String,
      required: false,
      default: 'next'
    },

    to: {
      type: String,
      required: true
    },

    label: {
      type: String,
      required: true
    },

    show: {
      type: Boolean,
      required: false,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors';

.app-navigation {
  display: flex;
  align-content: center;
  text-decoration: none;
  color: $color-primary;
  float: right;
}
</style>

