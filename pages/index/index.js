//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    checkList: [],
    openID: '',
    showHisVal: false,
    noloading: false,
    loadingText: '正在登录...'
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
              openid: app.globalData.openid,
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
  replay: function(event) {
    wx.showModal({
      title: '重启监控',
      content: '确定要重启监控？',
      success: (res) => {
        if (res.confirm) {
          wx.request({
            url: 'https://going.run/weixin',
            data: {
              type: 'replay',
              openid: app.globalData.openid,
              id: event.currentTarget.id
            },
            success: (res) => {
              const data = JSON.parse(res.data)
              console.log(data)
              this.setData({
                checkList: data
              })
              wx.showToast({
                title: '监控已重启',
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
  startNight: function(event) {
    wx.showModal({
      title: '夜间提醒',
      content: '确定要开启夜间提醒？',
      success: (res) => {
        if (res.confirm) {
          wx.request({
            url: 'https://going.run/weixin',
            data: {
              type: 'startNight',
              openid: app.globalData.openid,
              id: event.currentTarget.id
            },
            success: (res) => {
              const data = JSON.parse(res.data)
              console.log(data)
              this.setData({
                checkList: data
              })
              wx.showToast({
                title: '夜间监控已开启',
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
  stopNight: function(event) {
    wx.showModal({
      title: '夜间提醒',
      content: '确定要关闭夜间提醒？',
      success: (res) => {
        if (res.confirm) {
          wx.request({
            url: 'https://going.run/weixin',
            data: {
              type: 'stopNight',
              openid: app.globalData.openid,
              id: event.currentTarget.id
            },
            success: (res) => {
              const data = JSON.parse(res.data)
              console.log(data)
              this.setData({
                checkList: data
              })
              wx.showToast({
                title: '夜间监控已关闭',
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
  onShow: function () {
    wx.login({
      success: (res) => {
        if (res.code) {
          console.log(res.code)
          const userCode = res.code
          //获取用户id
          wx.request({
            url: 'https://going.run/miniprogram',
            data: {
              route: 'getOpenID',
              code: userCode,
              appid: 'wxdcfdd904db03fc21'
            },
            success: (res) => {
              // console.log(res.data)
              const data = JSON.parse(res.data)
              // console.log(data)
              this.setData({
                openID: data['openID'],
                loadingText: '正在获取航班信息...'
              })
              app.globalData.openid = data['openID']
              this.getData()
              this.getUserInfo()
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
  getUserInfo: function () {
    wx.request({
      url: 'https://going.run/miniprogram',
      data: {
        route: 'getUserData',
        appid: 'wxdcfdd904db03fc21',
        openid: app.globalData.openid,
      },
      success: (res) => {
        const data = JSON.parse(res.data)
        app.globalData.userInfo = data.value
      },
      fail: (res) => {
        console.log(res)
      }
    })
  },
  getData: function () {
    wx.request({
      url: 'https://going.run/weixin',
      data: {
        type: 'getUserData',
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
