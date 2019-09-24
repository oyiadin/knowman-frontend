import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import notification from './notification'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    notification
  }
})
