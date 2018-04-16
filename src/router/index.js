import Vue from 'vue'
import Router from 'vue-router'
import AssetList from '@/views/AssetList'

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
    }
  ]
})
