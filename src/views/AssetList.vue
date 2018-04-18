<template>
  <div class="view-asset-list">
    <app-loader>
      <app-title>Activos</app-title>
      
      <app-toolbar>
        <app-drop-down :options="currencies" @selection="(value) => currencyCurrent = value" />
        <app-drop-down :options="riskFamilies" @selection="(value) => riskFamilyCurrent = value" />
      </app-toolbar>

      <app-list>
        <app-list-item 
          v-for="asset in assets" 
          :key="asset.id"
          :title="asset.name"
          :detail="'Divisa: ' + asset.currency"
          :tag="asset.risk_family"
          :navigation="'assets/' + asset.id"
          :notifications="asset.comments.length"
        />
      </app-list>
    </app-loader>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { ASSET_ACTIONS } from '@/store'
import AppLoader from '@/components/AppLoader'
import AppToolbar from '@/components/AppToolbar'
import AppDropDown from '@/components/AppDropDown'
import AppTitle from '@/components/AppTitle'
import AppList from '@/components/AppList'
import AppListItem from '@/components/AppListItem'

export default {
  name: 'AssetList',

  components: {
    AppLoader,
    AppToolbar,
    AppDropDown,
    AppTitle,
    AppList,
    AppListItem
  },

  created() {
    this[ASSET_ACTIONS.FETCH_ASSETS]()
  },

  data() {
    return {
      currencyCurrent: null,
      riskFamilyCurrent: null
    }
  },

  computed: {
    ...mapGetters(['currencies', 'riskFamilies']),

    assets() {
      return this.$store.getters.assets(this.currencyCurrent, this.riskFamilyCurrent)
    }
  },

  methods: {
    ...mapActions([ASSET_ACTIONS.FETCH_ASSETS])
  }
}
</script>

