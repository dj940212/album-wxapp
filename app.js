import './style/base.sass'
import './vendor'
// app.js
App({
  async getUserInfo () {
    const { code } = await wx.loginAsync()
    const { userInfo } = await wx.getUserInfoAsync()
    this.globalData.userInfo = userInfo

	console.log("code: ",code)
    return {userInfo, code}
  },

  globalData: {
    userInfo: null,
    qiniuCDN: 'http://osmai097y.bkt.clouddn.com',
    serverUrl: 'http://127.0.0.1:8087/api2',
  }
})