<template>
  <div class="view-asset-detail">
    <app-loader>
      <section-asset v-if="asset && asset.issuer" :asset="asset" />
      <section-asset-comments v-if="asset" :asset-id="asset.id" :comments="asset.comments" />
    </app-loader>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { ASSET_ACTIONS } from '@/store'
import AppLoader from '@/components/AppLoader'
import SectionAsset from '@/components/SectionAsset'
import SectionAssetComments from '@/components/SectionAssetComments'

export default {
  name: 'AssetDetail',

  components: {
    AppLoader,
    SectionAsset,
    SectionAssetComments
  },

  props: {
    id: {
      type: String,
      required: true
    }
  },

  async created() {
    if (this.assets().length === 0) {
      await this[ASSET_ACTIONS.FETCH_ASSETS]()
    }

    await this[ASSET_ACTIONS.FETCH_ASSETS](this.id)
  },

  watch: {
    id: ASSET_ACTIONS.FETCH_ASSETS
  },

  computed: {
    ...mapGetters(['assets']),

    asset() {
      return this.$store.getters.assetById(this.id)
    }
  },

  methods: {
    ...mapActions([ASSET_ACTIONS.FETCH_ASSETS])
  }
}
</script>

