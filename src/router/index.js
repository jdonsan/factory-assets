import Vue from 'vue'
import Router from 'vue-router'
import AssetList from '@/views/AssetList'
import AssetDetail from '@/views/AssetDetail'

Vue.use(Router)

export default new Router({
  routes: [
    { 
      path: '/', 
      redirect: '/assets' 
    },

    {
      path: '/assets',
      name: 'assets',
      component: AssetList
    },

    {
      path: '/assets/:id',
      name: 'asset-detail',
      component: AssetDetail,
      props: true
    }
  ]
})
