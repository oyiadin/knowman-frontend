import utils from '@/utils'

export default {
  fetchChildren (path, callbacks) {
    utils.request({
      method: 'get',
      url: `/cat/${path}/children`
    }, callbacks)
  },
  update (path, data, callbacks) {
    utils.request({
      method: 'post',
      url: `/cat/${path}`,
      data
    }, callbacks)
  },
  create (parentCatPath, data, callbacks) {
    utils.request({
      method: 'put',
      url: `/cat/${parentCatPath}`,
      data
    }, callbacks)
  }
}
