<template>
  <section class="section-asset">
		<app-title>Detalle del activo</app-title>
		<app-card>
			<app-card-header>{{ asset.name }}</app-card-header>
			<app-card-content>
					<app-card-visual title="Precios" >
						<app-line-chart v-if="asset.prices" :dataset="asset.prices" :height="400" />
					</app-card-visual> 
					<app-card-item description="Divisa" :value="asset.currency.name" />
					<app-card-item description="Emisor" :value="asset.issuer.name" />
					<app-card-item description="ISIN" :value="asset.isin" />
					<app-card-item description="Región" :value="this.formatLevel(this.asset.region, 'region_level', 2)" />
					<app-card-item description="Familia de riesgo" :value="formatLevel(this.asset.risk_family, 'sub_family', '')" />
					<app-card-item description="Sector" :value="formatLevel(this.asset.sector, 'sector_level', 2)" />
			</app-card-content>
		</app-card>
  </section>
</template>

<script>
import AppTitle from '@/components/AppTitle'
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

