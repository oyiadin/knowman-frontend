import Vue from 'vue'
import Router from 'vue-router'
import Auth from '@/views/Auth'
import Doc from '@/views/Doc'
import Cat from '@/views/Cat'
import NewCat from '@/views/NewCat'

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
      path: '/newcat/:url',
      name: 'NewCat',
      component: NewCat
    },
    {
      path: '/cat/:url',
      name: 'Cat',
      component: Cat
    },
    {
      path: '/doc/:url',
      name: 'Doc',
      component: Doc
    }
  ]
})
