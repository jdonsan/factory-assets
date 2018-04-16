<template>
  <div id="app">
    <app-header/>
    <app-container>
      <router-view/>
    </app-container>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppContainer from './components/AppContainer'

export default {
  name: 'App',

  components: {
    AppHeader,
    AppContainer
  }
}
</script>

<style lang="scss">
@import './assets/scss/app';

body {
  font-family: 'Kanit', sans-serif;
  padding: 0;
  background: $color-basic-ligth-2;
}
</style>
