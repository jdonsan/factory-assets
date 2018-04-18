<template>
  <section class="section-asset">
		<app-title>Detalle del activo</app-title>

		<app-toolbar :expand="true">
      <app-navigation :show="!!assetPrev" mode="prev" :to="'/assets/' + assetPrev" label="Activo anterior" />
      <app-navigation :show="!!assetNext" mode="next" :to="'/assets/' + assetNext" label="Activo siguiente" />
    </app-toolbar>
			
		<app-card>
			<app-card-header>{{ asset.name }}</app-card-header>
			<app-card-content>
					<app-card-visual title="Precios" >
						<app-line-chart v-if="asset.prices" :options="options" :height="400" :chart-data="dataCollection" />
					</app-card-visual> 
					<app-card-item description="Divisa" :value="asset.currency.name" />
					<app-card-item description="Emisor" :value="asset.issuer.name" />
					<app-card-item description="ISIN" :value="asset.isin" />
					<app-card-item description="Región" :value="formatLevel(asset.region, 'region_level', 2)" />
					<app-card-item description="Familia de riesgo" :value="formatLevel(asset.risk_family, 'sub_family', '')" />
					<app-card-item description="Sector" :value="asset.sector && formatLevel(asset.sector, 'sector_level', 2)" />
			</app-card-content>
		</app-card>
  </section>
</template>

<script>
import AppTitle from '@/components/AppTitle'
import AppToolbar from '@/components/AppToolbar'
import AppNavigation from '@/components/AppNavigation'
import AppCard from '@/components/AppCard'
import AppCardHeader from '@/components/AppCardHeader'
import AppCardContent from '@/components/AppCardContent'
import AppCardVisual from '@/components/AppCardVisual'
import AppCardItem from '@/components/AppCardItem'
import AppLineChart from '@/components/AppLineChart'

export default {
  name: 'SectionAsset',

  components: {
    AppTitle,
    AppToolbar,
    AppNavigation,
    AppCard,
    AppCardHeader,
    AppCardContent,
    AppCardVisual,
    AppCardItem,
    AppLineChart
  },

  props: {
    asset: {
      type: Object,
      required: true
    }
  },

  computed: {
    dataCollection() {
      return {
        datasets: [
          {
            label: 'Precios',
            borderColor: '#70C1B3',
            fill: false,
            data: this.asset.prices.map(data => ({
              x: data.date,
              y: data.value
            }))
          }
        ]
      }
    },

    options() {
      return {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            type: 'time',
            time: {
              max: this.asset.prices[this.asset.prices.length - 1].date,
              min: this.asset.prices[0].date
            }
          }]
        },
        elements: {
          line: { tension: 0 },
          point: { radius: 0 }
        },
        animation: {
          duration: 0
        },
        hover: {
          animationDuration: 0
        },
        responsiveAnimationDuration: 0
      }
    },

    assetPrev() {
      return this.$store.getters.assetPrev(this.asset.id)
    },

    assetNext() {
      return this.$store.getters.assetNext(this.asset.id)
    }
  },

  methods: {
    formatLevel(object, key, level) {
      if (object[key + level]) {
        return object.name + ' / ' + this.formatLevel(object[key + level], key, level + 1)
      } else {
        return object.name
      }
    },
  }
}
</script>

