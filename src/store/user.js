import api from '../api'

let state = {
  loggedIn: false,
  username: ''
}

const mutations = {
  init (state) {
    api.auth.getInfo((err, res) => {
      if (!err && res) {
        state.loggedIn = true
        state.username = res.user.username
      }
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
