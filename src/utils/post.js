import dayjs from 'dayjs'

/**
 * 格式化文章数据
 * @param {Object} postData 文章数据
 */
function formatPostDetail(postData) {
  let o = JSON.parse(JSON.stringify(postData))
  o.date = dayjs(o.date).format('YYYY年MM月DD日')

  let content = o.content.rendered
  content = content.replace(/figure/g, 'div')
  content = content.replace(
    /\<img/gi,
    '<img style="max-width:100%;height:auto" '
  )
  content = content.replace(/\<p/gi, '<p class="_p" ')
  o.content.rendered = content
  return o
}

export { formatPostDetail }
