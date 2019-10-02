import utils from '../utils'

export default {
  newDoc (cat, callback) {
    utils.request({
      method: 'put',
      url: `/doc`,
      data: { cat }
    }, callback)
  },
  fetchInfo (url, callback) {
    utils.request({
      method: 'get',
      url: `/doc/${url}`
    }, callback)
  }
}
