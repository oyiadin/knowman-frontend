let state = {
  notifying: false,
  content: '',
  level: '',
  timeoutHandlerNumber: null
}

const mutations = {
  addNotification (state, payload) {
    state.notifying = true
    state.content = payload.content
    state.level = payload.level
    state.timeoutHandlerNumber = payload.timeoutHandlerNumber
  },
  delNotification (state) {
    state.notifying = false
  }
}

const actions = {
  notify (cxt, obj) {
    if (cxt.timeoutHandlerNumber) {
      clearTimeout(cxt.timeoutHandlerNumber)
    }
    obj.timeoutHandlerNumber = setTimeout(() => {
      cxt.commit('delNotification')
    }, 2500)
    cxt.commit('addNotification', obj)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
