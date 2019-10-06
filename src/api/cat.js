import utils from '@/utils'

export default {
  fetchChildren (path, callback) {
    utils.request({
      method: 'get',
      url: `/cat/${path}/children`
    }, callback)
  },
  update (path, data, callback) {
    utils.request({
      method: 'post',
      url: `/cat/${path}`,
      data
    }, callback)
  },
  create (parentCatPath, data, callback) {
    utils.request({
      method: 'put',
      url: `/cat/${parentCatPath}`,
      data
    }, callback)
  }
}
