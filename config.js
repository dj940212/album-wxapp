const { resolve } = require('path')
const r = url => resolve(__dirname, url)
const assetsPath = resolve(process.cwd(), './mina')

console.log("assetsPath:",assetsPath)
module.exports = {
  "json": {
    "entry":[
      "pages/index/index",
      "pages/logs/logs",
      "pages/textbutton/textbutton",
      "pages/obutton/obutton"
    ],
    "page": {
      "pages": [
        "pages/index/index",
        "pages/logs/logs"
      ]      
    }
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