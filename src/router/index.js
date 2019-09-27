import Vue from 'vue'
import Router from 'vue-router'
import Auth from '@/views/Auth'
import Doc from '@/views/Doc'
import Cat from '@/views/Cat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/cat/all'
    },
    {
      path: '/auth',
      name: 'Auth',
      component: Auth
    },
    {
      path: '/cat/:id',
      name: 'Cat',
      component: Cat
    },
    {
      path: '/doc/:id',
      name: 'Doc',
      component: Doc
    }
  ]
})
