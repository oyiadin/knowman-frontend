import Vue from 'vue'
import Vuex from 'vuex'
import cred from './cred'
import notify from './notify'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cred,
    notify
  },
  actions: {
    init (cxt) {
      cxt.dispatch('cred/init')
    }
  }
})
