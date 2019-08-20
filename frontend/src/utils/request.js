import fetch from 'dva/fetch'

function isJSON (input) {
  try {
    JSON.parse(input)
    return true
  } catch (error) {
    return false
  }
}

function checkStatus (response) {
  if (response.status >= 200 && response.status < 300) {
    return parseJSON(response, true)
  } else {
    return parseJSON(response, false)
  }
}

function parseJSON (response, success) {
  return response.text().then(function (text) {
    if (isJSON(text)) {
      text = JSON.parse(text)
      // 统一处理某些权限等相关的逻辑
      if (text && text.hasOwnProperty('error') && text.hasOwnProperty('error_code') && (Number(text.error_code) === 4001101 || Number(text.error_code) === 5002101)) {

      }
    }
    if (success) {
      return Promise.resolve(text)
    } else {
      return Promise.reject(text)
    }
  })
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
function request (url, options) {
  // fetch 默认不带 cookie，这里设置 credentials 为 include 来开启带 cookie 选项
  options = Object.assign(options, { 'credentials': 'include', cache: 'no-cache' })
  return fetch(url, options)
    .then(checkStatus)
    .then(data => {
      return data
    }).catch(err => {
      return Promise.reject(err)
    })
}

export default {
  request: request,
  get: (url) => {
    return request(url, { method: 'get' })
  },
  post: (url, body = {}) => {
    return request(url, {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
  },
  put: (url, body = {}) => {
    return request(url, {
      method: 'put',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
  },
  delete: (url, body = {}) => {
    return request(url, {
      method: 'delete',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
  }
}
