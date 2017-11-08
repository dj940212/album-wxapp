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
    appid: 'wx2e8f44a0207c43a9',
    secret: '91f6fd7cad06726faaf5d3e0899f26bb'
  }
})