function parseJSON(response) {
  return response.json()
}

// 根据后端规范三要素更改此函数代码
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) return response

  const error = new Error(response.statusText)
  error.response = response
  throw error
}

// 处理业务Code
function checkoutCode(response) {
  if (String(response[configs.successCode.key]) === configs.successCode.value) {
    return response.data;
  }
  // 其他特殊业务Code处理，如登录态过期、后端报错

  return response;
}

function catchError(error) {
  console.log('catchError', error);
  // 统一request请求报错处理，弹toast等

  return Promise.reject(error);
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  // options使用规范参考：https://github.github.io/fetch/  ，包含method、headers、body等
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(checkoutCode)
    .catch(catchError);
}
