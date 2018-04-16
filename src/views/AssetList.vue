<template>
  <div class="view-asset-list">
    <ul class="app-list">
      <li class="app-list-item" v-for="asset in assets" :key="asset.id">
        <router-link :to="'assets/' + asset.id">
          <h3>{{ asset.name }}</h3>
          <p>{{ asset.currency }}</p>
          <p>{{ asset.risk_family }}</p>
        </router-link>
      </li>
    </ul>
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

