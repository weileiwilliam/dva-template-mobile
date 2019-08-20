import request from '../utils/request'

let host = ''
let marcoApi = '/api/v1'
const mode = process.env.NODE_ENV

if (mode === 'development') {
  marcoApi = '/proxyToMarco/api/v1'
}

/**
 * 登录
 * @param {*} next 接下来跳转的站点
 * @param {*} account 账号
 * @param {*} pass 密码
 */
export function login (payload) {
  let url = host + marcoApi + '/api/v1/session'
  return request.post(url, payload)
}
