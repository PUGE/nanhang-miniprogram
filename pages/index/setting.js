// pages/index/setting.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid: '',
    userInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      openid: app.globalData.openid,
      userInfo: app.globalData.userInfo
    })
  },
  bindKeyInput: function (value) {
    console.log(value.detail.value)
    this.data.userInfo.phone = value.detail.value
  },
  radioChange: function (value) {
    console.log(value.detail.value)
    this.data.userInfo.rate = value.detail.value
  },
  saveConfig: function () {
    console.log(this.data.userInfo)
    if (this.data.userInfo.isVIP) {
      // 尝试发送短信
      wx.request({
        url: 'https://going.run/miniprogram',
        data: {
          route: 'sendPhoneMessage',
          appid: 'wxdcfdd904db03fc21',
          openid: app.globalData.openid
        },
        success: (res) => {},
        fail: (res) => {console.log(res)}
      })
      wx.request({
        url: 'https://going.run/miniprogram',
        data: {
          route: 'saveUserData',
          appid: 'wxdcfdd904db03fc21',
          openid: app.globalData.openid,
          value: this.data.userInfo
        },
        success: (res) => {
          wx.showToast({
            title: '设置已保存!',
            icon: 'success',
            duration: 2000
          })
        },
        fail: (res) => {
          console.log(res)
        }
      })
    } else {
      wx.showToast({
        title: '马上上线',
        icon: 'none',
        duration: 2000
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})