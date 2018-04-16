<template>
  <div id="app">
    <app-container>
      <router-view/>
    </app-container>
  </div>
</template>

<script>
import AppContainer from './components/AppContainer'

export default {
  name: 'App',

  components: {
    AppContainer
  }
}
</script>


<style lang="scss">
@import './assets/scss/app';

body {
  padding: 0;
  background: $color-basic-ligth-2;
}
</style>
