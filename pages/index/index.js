//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    checkList: [],
    openID: '',
    showHisVal: false,
    noloading: false
  },
  // 停止监控
  stop: function(event) {
    wx.showModal({
      title: '停止监控',
      content: '确定要停止',
      success: (res) => {
        if (res.confirm) {
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
              wx.showToast({
                title: '监控已停止',
                icon: 'success',
                duration: 2000
              })
            },
            fail: (res) => {
              console.log(res)
            }
          })
        }
      }
    })
    
  },
  add: function (event) {
    wx.navigateTo({
      url: 'add'　
    })
  },
  onLoad: function () {
    var app = getApp()
    wx.login({
      success: (res) => {
        if (res.code) {
          console.log(res.code)
          const userCode = res.code
          //获取用户id
          wx.request({
            url: 'https://going.run/weixin',
            data: {
              type: 'login',
              code: userCode
            },
            success: (res) => {
              // console.log(res.data)
              const data = JSON.parse(res.data)
              // console.log(data)
              this.setData({
                openID: data['openID']
              })
              app.globalData.openid = data['openID']
              this.getData()
              // 每分钟刷新数据
              setInterval(this.getData, 60000)
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
  },
  getData: function () {
    wx.request({
      url: 'https://going.run/weixin',
      data: {
        type: 'check',
        openid: app.globalData.openid,
        showHisVal: this.data.showHisVal
      },
      success: (res) => {
        // console.log(res.data)
        const data = JSON.parse(res.data)
        // console.log(data)
        this.setData({
          checkList: data['value'],
          noloading: true
        })
      },
      fail: (res) => {
        console.log(res)
      }
    })
  },
  showHis: function () {
    this.setData({
      noloading: false,
      showHisVal: !this.data.showHisVal
    })
    this.getData()
  },
  onShareAppMessage: function () {
    
  }
})
