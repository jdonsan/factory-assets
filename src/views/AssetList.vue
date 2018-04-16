<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { ASSET_ACTIONS } from '@/store'

export default {
  name: 'AssetList',

  created() {
    this[ASSET_ACTIONS.FETCH_ASSETS]() 
  },

  computed: {
    ...mapGetters(['assets'])
  },

  methods: {
    ...mapActions([ASSET_ACTIONS.FETCH_ASSETS])
  }
}
</script>

