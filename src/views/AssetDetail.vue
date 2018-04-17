<template>
  <div class="view-asset-detail">
    <app-title>Detalle del activo</app-title>
    <app-card v-if="asset">
      <app-card-header>{{ asset.name }}</app-card-header>
      <app-card-content>
          <app-card-visual title="Precios" >
            <app-line-chart 
              v-if="asset.prices"
              :dataset="asset.prices"
              :height="400"
            />
          </app-card-visual> 
          <app-card-item description="Divisa" :value="asset.currency" />
          <app-card-item description="Emisor" :value="asset.issuer && asset.issuer.name" />
          <app-card-item description="ISIN" :value="asset.isin" />
          <app-card-item description="Región" :value="asset.region && asset.region.name" />
          <app-card-item description="Familia de riesgo" :value="asset.risk_family" />
          <app-card-item description="Sector" :value="asset.sector" />
      </app-card-content>
    </app-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { ASSET_ACTIONS } from '@/store'
import AppTitle from '@/components/AppTitle'
import AppCard from '@/components/AppCard'
import AppCardHeader from '@/components/AppCardHeader'
import AppCardContent from '@/components/AppCardContent'
import AppCardVisual from '@/components/AppCardVisual'
import AppCardItem from '@/components/AppCardItem'
import AppLineChart from '@/components/AppLineChart'

export default {
  name: 'AssetDetail',

  components: {
    AppTitle,
    AppCard,
    AppCardHeader,
    AppCardContent,
    AppCardVisual,
    AppCardItem,
    AppLineChart
  },

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

