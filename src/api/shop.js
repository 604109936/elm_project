import fetch from './fetch'

// 获取商品列表
export function getGoods (id) {
  // let url = 'https://restapi.ele.me/shopping/v2/menu'
  let url = `proxy?url=https://restapi.ele.me/shopping/v2/menu`
  let params = {restaurant_id: id}
  return fetch(url, params)
}

// 获取评价
export function getRatings (id, hasMore = true, offset = 0, limit = 10) {
  // let url = `https://mainsite-restapi.ele.me/ugc/v2/restaurants/${id}/ratings`
  let url = `proxy?url=https://mainsite-restapi.ele.me/ugc/v2/restaurants/${id}/ratings`
  let params = {has_content: hasMore, offset, limit}
  return fetch(url, params)
}

// 获取商家信息
export function getRestaurant (id) {
  // let url = `https://restapi.ele.me/shopping/restaurant/${id}?extras[]=activities&extras[]=albums&extras[]=license&extras[]=identification&extras[]=qualification`
  let url = `/proxy?url=https://restapi.ele.me/shopping/restaurant/${id}`
  /* let params = {
    'extras': [
      'activities',
      'albums',
      'license',
      'identification',
      'qualification'
    ]
  } */
  let params = {
    state: 111,
    id
  }
  return fetch(url, params)
}
