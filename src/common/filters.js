// 定义一个获取真实图片url的方法
export function imgUrl (hash, params) {
  // 获取图片的名称
  let filename = hash.slice(0, 1) + '/' + hash.slice(1, 3) + '/' + hash.slice(3)
  // 获取图片的后缀名
  let matches = filename.match(/png|jpeg|jpg$/)
  // 需要拼接，返回真实的url
  return `https://fuss10.elemecdn.com/${filename}.${matches[0]}?${params}`
}
