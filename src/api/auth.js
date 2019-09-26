import utils from '../utils'

function errorHandling (result, callback) {
  if (result.data.err) {
    utils.notify({
      title: 'Error',
      content: result.data.err,
      level: 'error'
    })
    callback(result.data.err, result.data)
  } else {
    callback(null, result.data)
  }
}

export default {
  getInfo (callback) {
    utils.request({
      method: 'get',
      url: '/auth/userInfo'
    }, (res) => { errorHandling(res, callback) })
  },

  login (data, callback) {
    utils.request({
      method: 'post',
      url: '/auth',
      data
    }, (res) => { errorHandling(res, callback) })
  },

  register (data, callback) {
    utils.request({
      method: 'put',
      url: '/auth',
      data
    }, (res) => { errorHandling(res, callback) })
  },

  logout (callback) {
    utils.request({
      method: 'delete',
      url: '/auth'
    }, (res) => { errorHandling(res, callback) })
  }
}
