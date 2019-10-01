import utils from '../utils'

export default {
  fetchSubcats (url, callback) {
    utils.request({
      method: 'get',
      url: `/cat/${url}/subcats`
    }, callback)
  },
  fetchDocs (url, callback) {
    utils.request({
      method: 'get',
      url: `/cat/${url}/docs`
    }, callback)
  },
  newCat (parent, data, callback) {
    utils.request({
      method: 'put',
      url: `/cat/${parent}`,
      data
    }, callback)
  }
}
