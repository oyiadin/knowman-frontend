import Vue from 'vue'
import Router from 'vue-router'
import Error404 from '@/views/Error404'
import Auth from '@/views/Auth'
import Doc from '@/views/Doc'
import Cat from '@/views/Cat'
import CatList from '@/views/CatList'
import CatCreation from '@/views/CatCreation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      component: Error404
    },
    {
      path: '/',
      redirect: '/cat/root/show'
    },
    {
      path: '/auth',
      name: 'Auth',
      component: Auth
    },
    {
      path: '/cat/:path',
      redirect: '/cat/root/show',
      component: Cat,
      children: [
        {
          path: 'show',
          name: 'CatList',
          components: {
            content: CatList
          }
        },
        {
          path: 'new',
          name: 'CatCreation',
          components: {
            content: CatCreation
          }
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
