import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/AssetList'
import About from '@/views/AssetDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/assets',
      name: 'assets',
      component: AssetList
    },
    {
      path: '/assets/:id',
      name: 'asset',
      component: AssetDetail
    }
  ]
})
