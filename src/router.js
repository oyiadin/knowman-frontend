import Vue from 'vue'
import Router from 'vue-router'
import Auth from '@/views/Auth'
import Doc from '@/views/Doc'
import Cat from '@/views/Cat'
import CatCreation from '@/views/CatCreation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/cat/root'
    },
    {
      path: '/auth',
      name: 'Auth',
      component: Auth
    },
    {
      path: '/cat/:path',
      name: 'Cat',
      component: Cat,
      children: [
        {
          path: 'new',
          name: 'CatCreation',
          component: CatCreation
        }
      ]
    },
    {
      path: '/doc/:path',
      name: 'Doc',
      component: Doc
    }
  ]
})
