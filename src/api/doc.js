import utils from '@/utils'

export default {
  create (data, callbacks) {
    utils.request({
      method: 'put',
      url: `/doc`,
      data
    }, callbacks)
  },
  fetchInfo (path, callbacks) {
    utils.request({
      method: 'get',
      url: `/doc/${path}`
    }, callbacks)
  },
  delete (path, callbacks) {
    utils.request({
      method: 'delete',
      url: `/doc/${path}`
    }, callbacks)
  }
}
