import axios from 'axios'
import store from './store'

const service = axios.create({
  baseURL: '/api/',
  timeout: 5000
})

function request (obj, callback) {
  console.log(obj)
  service(obj).then((res) => {
    console.log(res.data)
    if (res.data.err) {
      notify({
        content: res.data.err,
        level: 'error'
      })
      callback(res.data.err, res.data)
    } else {
      callback(null, res.data)
    }
  })
}

function notify (obj) {
  return store.dispatch('notification/notify', obj)
}

export default {
  request,
  notify
}
