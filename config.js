const { resolve } = require('path')
const r = url => resolve(__dirname, url)
const assetsPath = resolve(process.cwd(), './mina')

module.exports = {
  "json": {
    "pages":[
      "pages/index/index",
      "pages/logs/logs",
      "pages/textbutton/textbutton"
    ],
  },
  "window":{
    "backgroundTextStyle":"dark",
    "navigationBarBackgroundColor": "#f8f8f8",
    "backgroundColor": "#fff",
    "navigationBarTitleText": "宝宝相册",
    "navigationBarTextStyle":"black",
    "enablePullDownRefresh" : true
  },
  "assetsPath": assetsPath,
  "app": r('./app.js')
}