//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    checkList: [],
    loading: true,
    openID: ''
  },
  // 停止监控
  stop: function(event) {
    wx.request({
      url: 'https://going.run/weixin',
      data: {
        type: 'finish',
        id: event.currentTarget.id
      },
      success: (res) => {
        const data = JSON.parse(res.data)
        console.log(data)
        this.setData({
          checkList: data
        })
      },
      fail: (res) => {
        console.log(res)
      }
    })
  },
  add: function (event) {
    wx.navigateTo({
      url: 'add'　　// 页面 A
    })
  },
  onLoad: function () {
    wx.login({
      success: (res) => {
        if (res.code) {
          console.log(res.code)
          const userCode = res.code
          //发起网络请求
          wx.request({
            url: 'https://going.run/weixin',
            data: {
              type: 'login',
              code: userCode
            },
            success: (res) => {
              console.log(res.data)
              const data = JSON.parse(res.data)
              console.log(data)
              this.setData({
                openID: data['openID'],
                checkList: data['value']
              })
            },
            fail: (res) => {
              console.log(res)
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  }
})
