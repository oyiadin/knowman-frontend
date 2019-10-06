import utils from '@/utils'

export default {
  create (data, callback) {
    utils.request({
      method: 'put',
      url: `/doc`,
      data
    }, callback)
  },
  fetchInfo (path, callback) {
    utils.request({
      method: 'get',
      url: `/doc/${path}`
    }, callback)
  },
  delete (path, callback) {
    utils.request({
      method: 'delete',
      url: `/doc/${path}`
    }, callback)
  }
}
