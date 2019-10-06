import utils from '@/utils'

export default {
  register (data, callback) {
    utils.request({
      method: 'put',
      url: '/cred',
      data
    }, callback)
  },
  login (data, callback) {
    utils.request({
      method: 'post',
      url: '/cred',
      data
    }, callback)
  },
  logout (callback) {
    utils.request({
      method: 'delete',
      url: '/cred'
    }, callback)
  },
  fetchUserInfo (callback) {
    utils.request({
      method: 'get',
      url: '/cred/userInfo'
    }, callback)
  }
}
