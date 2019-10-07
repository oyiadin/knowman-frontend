import axios from 'axios'
import store from './store'

const service = axios.create({
  baseURL: '/api/',
  timeout: 5000
})

function requestDefaultSuccessHandler (_, data) {
  console.warn('No default success api callback-handler.')
}

function requestDefaultErrorHandler (err, data) {
  notify({
    content: err.reason,
    level: 'error'
  })
}

function request (obj, callbacks) {
  let defaultErrorHandler = callbacks['_anyError'] || requestDefaultErrorHandler
  console.debug('[=>]', obj)
  service(obj).then((res) => {
    let data = res.data
    console.debug('[<=]', data)
    if (data.success === 'yes') {
      (callbacks['success'] || requestDefaultSuccessHandler)(
        null, data, requestDefaultSuccessHandler)
    } else {
      if (data) {
        (callbacks[data.error.reasonShort] || defaultErrorHandler)(
          data.error, data, requestDefaultErrorHandler)
      } else {
        notify({
          content: 'No response, maybe the server is down.',
          level: 'error'
        })
      }
    }
  })
}

function notify (obj) {
  return store.dispatch('notify/notify', obj)
}

export default {
  request,
  notify
}
