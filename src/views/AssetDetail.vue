<template>
  <div class="view-asset-detail">
    <app-loader>
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
            <app-card-item description="Divisa" :value="asset.currency && asset.currency.name" />
            <app-card-item description="Emisor" :value="asset.issuer && asset.issuer.name" />
            <app-card-item description="ISIN" :value="asset.isin" />
            <app-card-item description="Región" :value="regions" />
            <app-card-item description="Familia de riesgo" :value="familes" />
            <app-card-item description="Sector" :value="sectors" />
        </app-card-content>
      </app-card>
    </app-loader>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { ASSET_ACTIONS } from '@/store'
import AppLoader from '@/components/AppLoader'
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
    AppLoader,
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
    },

    regions() {
      return this.asset.region && this.formatLevel(this.asset.region, 'region_level', 2)
    },

    sectors() {
      return this.asset.sector && this.formatLevel(this.asset.sector, 'sector_level', 2)
    },

    familes() {
      return this.asset.risk_family && this.formatLevel(this.asset.risk_family, 'sub_family', '')
    }
  },

  methods: {
    ...mapActions([ASSET_ACTIONS.FETCH_ASSETS]),
    formatLevel(object, key, level) {
      if (object[key + level]) {
        return object.name + ' / ' + this.formatLevel(object[key + level], key, level + 1)
      } else {
        return object.name
      }

    }
  }
}
</script>

