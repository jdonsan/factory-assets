<template>
  <div class="view-asset-list">
    <app-list>
      <app-list-item 
        v-for="asset in assets" 
        :key="asset.id"
        :title="asset.name"
        :detail="asset.currency"
        :tag="asset.risk_family"
        :navigation="'assets/' + asset.id"
      />
    </app-list>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { ASSET_ACTIONS } from '@/store'
import AppList from '@/components/AppList'
import AppListItem from '@/components/AppListItem'

export default {
  name: 'AssetList',

  components: {
    AppList,
    AppListItem
  },

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

