import api from '@/api'
import utils from '@/utils'

let state = {
  loggedIn: false,
  username: ''
}

const mutations = {
  login (state, payload) {
    state.loggedIn = true
    state.username = payload
  },
  clear (state) {
    state.loggedIn = false
    state.username = ''
  }
}

const actions = {
  init (cxt) {
    api.cred.fetchUserInfo((err, res) => {
      if (!err && res) {
        cxt.commit('login', res.user)
      } else {
        utils.notify({
          content: 'Please login',
          level: 'warn'
        })
      }
    })
  },
  updateUserStatus (cxt) {
    api.cred.fetchUserInfo((err, res) => {
      if (!err && res) {
        cxt.commit('login', res.user)
      } else {
        cxt.commit('clear')
      }
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
