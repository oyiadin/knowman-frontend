import utils from '../utils'

export default {
  getInfo (callback) {
    utils.request({
      method: 'get',
      url: '/auth/userInfo'
    }, callback)
  },
  login (data, callback) {
    utils.request({
      method: 'post',
      url: '/auth',
      data
    }, callback)
  },
  register (data, callback) {
    utils.request({
      method: 'put',
      url: '/auth',
      data
    }, callback)
  },
  logout (callback) {
    utils.request({
      method: 'delete',
      url: '/auth'
    }, callback)
  }
}
