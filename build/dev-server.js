require('./check-versions')()
const axios = require('axios')
var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = (process.env.NODE_ENV === 'testing' || process.env.NODE_ENV === 'production')
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: false,
  heartbeat: 2000
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// 定义proxy路由，实现代理跨域
app.get('/proxy', (req, res) => {
  console.log(req.query)
  // 获取url
  let url = req.query.url
  // 获取params
  let params = req.query
  delete params['url']
 /*  axios.get(url, {params}).then(result => {
    console.log(result)
    res.json(result.data)
  }).catch(err => {
    console.log(err)
  }) */
  if (params.state !== '111') {
    axios.get(url, { params }).then(result => {
      console.log(result)
      res.json(result.data)
    }).catch(err => {
      console.log(err)
    })
  } else {
    res.send(`{
    "activities": [
        {
            "attribute": "{'94': {'1': 40.0, '0': 0}, '54': {'1': 20.0, '0': 0}}",
            "description": "满54减20，满94减40",
            "icon_color": "f07373",
            "icon_name": "减",
            "id": 1604779450,
            "is_exclusive_with_food_activity": true,
            "name": "bjhz-正-8号",
            "tips": "满54减20，满94减40",
            "type": 102
        },
        {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1605675875,
            "name": "单品定价",
            "tips": "单品定价"
        },
        {
            "attribute": "25.0",
            "description": "新用户下单立减25元(不与其它活动同享)",
            "icon_color": "70bc46",
            "icon_name": "首",
            "id": 1522552009,
            "is_exclusive_with_food_activity": true,
            "name": "新客立减25",
            "tips": "新用户下单立减25元(不与其它活动同享)",
            "type": 103
        },
        {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1605552603,
            "name": "单品定价",
            "tips": "单品定价"
        },
        {
            "description": "5折奥尔良烤鸡比萨",
            "icon_color": "f07373",
            "icon_name": "折",
            "id": 1325950393,
            "name": "5折奥尔良烤鸡比萨",
            "tips": "5折奥尔良烤鸡比萨"
        },
        {
            "description": "60元浓情十翅",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1323744841,
            "name": "60元浓情十翅",
            "tips": "60元浓情十翅"
        },
        {
            "description": "174六送一果汁",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1292867705,
            "name": "174六送一果汁",
            "tips": "174六送一果汁"
        },
        {
            "description": "87果汁两个套餐三送一",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1292865113,
            "name": "87果汁两个套餐三送一",
            "tips": "87果汁两个套餐三送一"
        },
        {
            "description": "60元花样十翅",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1292388433,
            "name": "60元花样十翅",
            "tips": "60元花样十翅"
        },
        {
            "description": "39元翅盒",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1292379881,
            "name": "39元翅盒",
            "tips": "39元翅盒"
        },
        {
            "description": "福佳白啤酒买三送一",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1291845161,
            "name": "福佳白啤酒买三送一",
            "tips": "福佳白啤酒买三送一"
        },
        {
            "description": "原力分享",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1288027657,
            "name": "原力分享",
            "tips": "原力分享"
        },
        {
            "description": "仲夏",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1288021137,
            "name": "仲夏",
            "tips": "仲夏"
        },
        {
            "description": "新福佳白啤酒",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1288016137,
            "name": "新福佳白啤酒",
            "tips": "新福佳白啤酒"
        },
        {
            "description": "新冰柠檬红茶",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1288002649,
            "name": "新冰柠檬红茶",
            "tips": "新冰柠檬红茶"
        },
        {
            "description": "热血观赛小吃拼盘",
            "icon_color": "f07373",
            "icon_name": "折",
            "id": 1287984009,
            "name": "热血观赛小吃拼盘",
            "tips": "热血观赛小吃拼盘"
        },
        {
            "description": "热血观赛小吃拼盘",
            "icon_color": "f07373",
            "icon_name": "折",
            "id": 1287984057,
            "name": "热血观赛小吃拼盘",
            "tips": "热血观赛小吃拼盘"
        },
        {
            "description": "工作日39",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1287897009,
            "name": "工作日39",
            "tips": "工作日39"
        },
        {
            "description": "工作日39",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1287896169,
            "name": "工作日39",
            "tips": "工作日39"
        },
        {
            "description": "北京29",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1287884737,
            "name": "北京29",
            "tips": "北京29"
        },
        {
            "description": "北京29",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1287884713,
            "name": "北京29",
            "tips": "北京29"
        },
        {
            "description": "福佳白啤酒买三送一",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1287869041,
            "name": "福佳白啤酒买三送一",
            "tips": "福佳白啤酒买三送一"
        },
        {
            "description": "5折饿了么",
            "icon_color": "f07373",
            "icon_name": "折",
            "id": 1287864057,
            "name": "5折饿了么",
            "tips": "5折饿了么"
        },
        {
            "description": "浓情十翅",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1287857561,
            "name": "浓情十翅",
            "tips": "浓情十翅"
        },
        {
            "description": "60元鸡翅",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1275951482,
            "name": "60元鸡翅",
            "tips": "60元鸡翅"
        },
        {
            "description": "39商务午餐",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1262580873,
            "name": "39商务午餐",
            "tips": "39商务午餐"
        },
        {
            "description": "39商务午餐",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1262580665,
            "name": "39商务午餐",
            "tips": "39商务午餐"
        },
        {
            "description": "29商务午餐",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1262573385,
            "name": "29商务午餐",
            "tips": "29商务午餐"
        },
        {
            "description": "29商务午餐",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1262573433,
            "name": "29商务午餐",
            "tips": "29商务午餐"
        },
        {
            "description": "99小龙虾观赛麻辣套餐",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1262563377,
            "name": "99小龙虾观赛麻辣套餐",
            "tips": "99小龙虾观赛麻辣套餐"
        },
        {
            "description": "109小龙虾观赛十八鲜套",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1262556145,
            "name": "109小龙虾观赛十八鲜套",
            "tips": "109小龙虾观赛十八鲜套"
        },
        {
            "description": "87福佳白",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1262540161,
            "name": "87福佳白",
            "tips": "87福佳白"
        },
        {
            "description": "45热血观赛套餐",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1237984569,
            "name": "45热血观赛套餐",
            "tips": "45热血观赛套餐"
        },
        {
            "description": "45热血观赛套餐",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1237984633,
            "name": "45热血观赛套餐",
            "tips": "45热血观赛套餐"
        },
        {
            "description": "5折鸡翅",
            "icon_color": "f07373",
            "icon_name": "折",
            "id": 1236617473,
            "name": "5折鸡翅",
            "tips": "5折鸡翅"
        },
        {
            "description": "19.9元福佳白啤酒",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1236613905,
            "name": "19.9元福佳白啤酒",
            "tips": "19.9元福佳白啤酒"
        },
        {
            "description": "9.9柠檬红茶",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1236599033,
            "name": "9.9柠檬红茶",
            "tips": "9.9柠檬红茶"
        },
        {
            "description": "39翅盒",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1227597401,
            "name": "39翅盒",
            "tips": "39翅盒"
        },
        {
            "description": "36元A6翅盒",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 434543321,
            "name": "36元A6翅盒",
            "tips": "36元A6翅盒"
        }
    ],
    "address": "北京市东城区甘雨胡同31号一层108号铺位",
    "authentic_id": 3383638700180324,
    "business_info": "{}",
    "delivery_mode": {
        "border": "FFFFFF",
        "color": "",
        "id": 2,
        "is_solid": true,
        "text": "商家配送",
        "text_color": "FFFFFF"
    },
    "description": "",
    "distance": 1,
    "favored": false,
    "flavors": [
        {
            "id": 211,
            "name": "披萨意面"
        },
        {
            "id": 234,
            "name": "炸鸡炸串"
        }
    ],
    "float_delivery_fee": 5,
    "float_minimum_order_amount": 0,
    "has_story": false,
    "id": 308624,
    "image_path": "1723c54d8b5a9b582555bc9e97430acfpng",
    "is_new": false,
    "is_premium": true,
    "is_stock_empty": 0,
    "is_valid": 1,
    "latitude": 39.91712411,
    "longitude": 116.41601022,
    "max_applied_quantity_per_order": 1,
    "name": "必胜客宅急送（灯市口餐厅店）",
    "next_business_time": "",
    "only_use_poi": false,
    "opening_hours": [
        "10:00/21:55"
    ],
    "order_lead_time": 31,
    "phone": "",
    "piecewise_agent_fee": {
        "description": "配送费¥5",
        "extra_fee": 0,
        "is_extra": false,
        "no_subsidy_fee": "",
        "rules": [
            {
                "fee": 5,
                "price": 0
            }
        ],
        "tips": "配送费¥5"
    },
    "platform": 0,
    "posters": [
        {
            "id": 5164499,
            "image_hash": "f0f71ec32bc52c68c2a8e01de99648b2png",
            "name": "工作日特惠午餐",
            "url": "eleme://restaurant_promotion?restaurant_id=308624&banner_id=5164499"
        }
    ],
    "promotion_info": "配送费现从9元优惠至5元,该优惠将在小票的本单优惠金额中立减。用餐高峰时间可能会延长送餐时间，请以实际送餐时间为准。如果需要Fapiao请在订单备注Fapiao,我们将为您提供电子Fapiao提取码。比萨尺寸为英寸,指烤盘的直径,仅供参考,实际规格请以克重为准。",
    "qualification": {
        "link": "https://h5.ele.me/shop/certification/#/?restaurant_id=E14134721912418568076",
        "safety_description": "甲级商家"
    },
    "rating": 4.9,
    "rating_count": 610,
    "recent_order_num": 1632,
    "recommend": {
        "is_ad": false,
        "reason": ""
    },
    "recommend_reasons": [
        {
            "name": "回头客多"
        },
        {
            "name": "配送飞快"
        }
    ],
    "regular_customer_count": 0,
    "scheme": "eleme://catering?restaurant_id=308624",
    "shop_sign": {
        "brand_story": "",
        "image_hash": "04bbbec4c0d77828278b9101c40555e3png"
    },
    "status": 1,
    "support_tags": [
        {
            "border": "dddddd",
            "color": "666666",
            "icon": "4e20966ca2a516de3f02fb9c7fd1bc6dpng",
            "text": "披萨意面",
            "type": 1
        }
    ],
    "supports": [
        {
            "border": "90dddddd",
            "description": "该商家支持开发票，请在下单时填写好发票抬头",
            "icon_color": "999999",
            "icon_name": "票",
            "id": 4,
            "name": "开发票",
            "text_color": "666666",
            "two_characters_icon_name": "发票"
        }
    ],
    "theme": {
        "default_color": "2395ff",
        "header_style": 3,
        "hongbao_style": 0,
        "price_color": "ff5339",
        "third_tab_name": "商家",
        "vanish_fields": []
    },
    "type": 0
}`)
  }
})
// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
