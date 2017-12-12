import Vue from 'vue'
import Router from 'vue-router'
import Nav from '@/components/Nav'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Nav',
      component: Nav
    }
  ]
})
