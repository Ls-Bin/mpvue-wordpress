import axios from 'axios'
// import fs from 'fs'

const baseURL = 'http://ls-bin.xyz/index.php'

axios.defaults.adapter = function(config) {
  return new Promise((resolve, reject) => {
    console.log(config)
    // TODO wx.request(...)

    wx.request({
      ...config,
      url: config.url,
      data: config.params,
      success: res => {
        if (res.statusCode < 200 || res.statusCode > 300) {
          return reject(res || {})
        }
        return resolve(res || {})
      },
      complete: res => {
        // TODO:
      }
    })
  })
}

/**
 * 获取info参数
 */
function getInfo() {
  return axios({
    url: `${baseURL}/wp-json`
  })
}
/**
 * 获取文章列表
 * @param {Object} params -请求参数
 */
function getPostList(params) {
  return axios({
    url: `${baseURL}/wp-json/wp/v2/posts`,
    params
  })
}

/**
 *  获取文章详情
 * @param {Number} id -文章id
 */
function getPostDetail(id) {
  return axios({
    url: `${baseURL}/wp-json/wp/v2/posts/${id}`
  })
}

export { getPostList, getPostDetail, getInfo }
