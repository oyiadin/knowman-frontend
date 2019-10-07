import utils from '@/utils'

export default {
  register (data, callbacks) {
    utils.request({
      method: 'put',
      url: '/cred',
      data
    }, callbacks)
  },
  login (data, callbacks) {
    utils.request({
      method: 'post',
      url: '/cred',
      data
    }, callbacks)
  },
  logout (callbacks) {
    utils.request({
      method: 'delete',
      url: '/cred'
    }, callbacks)
  },
  fetchUserInfo (callbacks) {
    utils.request({
      method: 'get',
      url: '/cred/userInfo'
    }, callbacks)
  }
}
