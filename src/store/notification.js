let state = {
  notifying: false,
  content: '',
  level: ''
}

const mutations = {}

const actions = {
  notify (cxt, obj) {
    cxt.state.notifying = true
    cxt.state.content = obj.content
    cxt.state.level = obj.level
    setTimeout(() => {
      cxt.state.notifying = false
    }, 2000)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
