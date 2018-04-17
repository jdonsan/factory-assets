<template>
  <div class="app-loader">
    <div v-if="loading" class="app-loader--on">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <slot v-else></slot>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AppLoader',

  computed: {
    ...mapState(['loading'])
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/_colors";

.app-loader {
  &--on {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    position: relative;
    margin: 3rem auto;

    span {
      display: inline-block;
      width: 20px;
      height: 20px;
      border-radius: 100%;
      background-color: $color-primary;
      margin: 35px 5px;

      &:nth-child(1) {
        animation: bounce 1s ease-in-out infinite;
      }

      &:nth-child(2) {
        animation: bounce 1s ease-in-out 0.33s infinite;
      }

      &:nth-child(3) {
        animation: bounce 1s ease-in-out 0.66s infinite;
      }
    }
  }
}

@keyframes bounce {
  0%,
  75%,
  100% {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }

  25% {
    -webkit-transform: translateY(-20px);
    -ms-transform: translateY(-20px);
    -o-transform: translateY(-20px);
    transform: translateY(-20px);
  }
}
</style>
