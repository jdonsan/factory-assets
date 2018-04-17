<template>
  <div class="view-asset-detail">
    <app-card v-if="asset">
      <app-card-header>{{ asset.name }}</app-card-header>
      <app-card-visual>

      </app-card-visual>
      <app-card-content></app-card-content>
    </app-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { ASSET_ACTIONS } from '@/store'

export default {
  name: 'AssetDetail',

  props: {
    id: {
      type: String,
      required: true
    }
  },

  created() {
    this[ASSET_ACTIONS.FETCH_ASSETS](this.id)
  },

  watch: {
    id: ASSET_ACTIONS.FETCH_ASSETS
  },

  computed: {
    asset() {
      return this.$store.getters.assetById(this.id)
    }
  },

  methods: {
    ...mapActions([ASSET_ACTIONS.FETCH_ASSETS])
  }
}
</script>

