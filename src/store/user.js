import api from '../api'

let state = {
  loggedIn: false,
  username: ''
}

const mutations = {
  updateInfo (state) {
    api.auth.getInfo((err, res) => {
      if (!err && res) {
        state.loggedIn = true
        state.username = res.user.username
      } else {
        state.loggedIn = false
      }
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
