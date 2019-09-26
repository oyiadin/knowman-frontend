import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Auth from '@/views/Auth'
import Doc from '@/views/Doc'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/auth',
      name: 'Auth',
      component: Auth
    },
    {
      path: '/doc',
      name: 'Doc',
      component: Doc
    }
  ]
})
