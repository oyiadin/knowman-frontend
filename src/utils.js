import axios from 'axios'
import store from './store'

const service = axios.create({
  baseURL: '/api/',
  timeout: 5000
})

function request (obj, callback) {
  console.debug('[=>]', obj)
  service(obj).then((res) => {
    console.debug('[<=]', res.data)
    if (res.success === 'yes') {
      callback(null, res.data)
    } else {
      if (res.data) {
        callback(res.data.error, res.data)
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
