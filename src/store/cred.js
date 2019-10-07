import api from '@/api'
import utils from '@/utils'

let state = {
  loggedIn: false,
  username: ''
}

const mutations = {
  login (state, payload) {
    state.loggedIn = true
    state.username = payload.username
  },
  clear (state) {
    state.loggedIn = false
    state.username = ''
  }
}

const actions = {
  init (cxt) {
    api.cred.fetchUserInfo({
      success (_, res) {
        cxt.commit('login', res.user)
      },
      tokenInvalid (_, res) {
        utils.notify({
          content: 'Invalid token, flushed, please retry.',
          level: 'error'
        })
      },
      tokenRequired (_, res) {
        utils.notify({
          content: 'Please login',
          level: 'warn'
        })
      }
    })
  },
  updateUserStatus (cxt) {
    api.cred.fetchUserInfo({
      success (_, res) {
        cxt.commit('login', res.user)
      },
      _anyError (_, res) {
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
