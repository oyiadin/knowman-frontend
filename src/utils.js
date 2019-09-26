import axios from 'axios'
import store from './store'

const service = axios.create({
  baseURL: '/api/',
  timeout: 5000
})

function request (obj, callback) {
  console.log(obj)
  service(obj).then(callback)
}

function notify (obj) {
  return store.dispatch('notification/notify', obj)
}

export default {
  request,
  notify
}
