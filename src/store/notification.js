let state = {
  notifying: false,
  title: '',
  content: '',
  level: ''
}

const mutations = {}

const actions = {
  notify (cxt, obj) {
    cxt.state.notifying = true
    cxt.state.title = obj.title
    cxt.state.content = obj.content
    cxt.state.level = obj.level
    setTimeout(() => {
      cxt.state.notifying = false
    }, 20000)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
