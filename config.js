const { resolve } = require('path')
const r = url => resolve(__dirname, url)
const assetsPath = resolve(process.cwd(), './mina')

module.exports = {
  "json": {
    "pages":[
      "pages/index/index",
      "pages/logs/logs",
    ],
  },
  "window":{
    "backgroundTextStyle":"light",
    "navigationBarBackgroundColor": "#fff",
    "navigationBarTitleText": "权利的游戏",
    "navigationBarTextStyle":"black"
  },
  "assetsPath": assetsPath,
  "app": r('./app.js')
}