// pages/index/search.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading: true,
    flightList: [],
    select: 'lvyou'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData.userInfo)
    this.setData({
      loading: true
    })
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.on('acceptDataFromOpenerPage', (data) => {
      this.setData({
        flightDate: data.flightDate,
        depCity: data.depCity,
        arrCity: data.arrCity,
        depCityName: data.depCityName,
        arrCityName: data.arrCityName
      })
      this.data.select = data.select
      wx.request({
        url: 'https://going.run/weixin',
        data: {
          type: 'search',
          flightDate: data.flightDate,
          depCity: data.depCity,
          arrCity: data.arrCity,
          select: data.select
        },
        success: (res) => {
          console.log(res.data)
          if (!res.data) {
            wx.showModal({
              title: '查询失败',
              content: '系统正在维护!',
              success (res) {
                wx.navigateBack({
                  url: 'add'　　// 页面 B
                })
              }
            })
            return
          }
          if (res.data.err == 0) {
            this.setData({
              flightList: res.data.data,
              loading: false
            })
          } else {
            wx.showModal({
              title: '查询失败',
              content: res.data.message,
              success (res) {
                wx.navigateBack({
                  url: 'add'　　// 页面 B
                })
              }
            })
          }
          
        },
        fail: (res) => {
          console.log(res)
        }
      })
    })
  },
   // 监控
  jiankong: function(event) {
    console.log(app.globalData.checkNum)
    app.globalData.userInfo.maxNum = app.globalData.userInfo.maxNum || 4
    if ((app.globalData.checkNum + 1) > app.globalData.userInfo.maxNum) {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '超出当前用户最大同时监控数量，首页高级设置中可以查看或升级会员及最大监控数量！'
      })
      console.log('禁止增加!')
      return
    }
    // 订阅消息
    wx.requestSubscribeMessage({
      tmplIds: ['Fk0bFqqG8g7pYUh3FBWio6RRRjQGlBYuMPrz5I1uSjk', 'urcU2yTZ3qXAZDVvHbWx9xImDMyzYtpknSLfXlIRm58', 'XOGLi_2DSbmJd4pp442pl4HwhdRpVbspo7ucEhHv0Eg'],
      success: (res) => {
        let activeItem = {"flightNo": "*", "depTime": '0000'}
        if (event.currentTarget.id != '*') {
          activeItem = this.data.flightList[parseInt(event.currentTarget.id)]
        }
        wx.request({
          url: 'https://going.run/weixin',
          data: {
            type: 'add',
            openid: app.globalData.openid,
            flightDate:  this.data.flightDate,
            flightNo: activeItem.flightNo,
            depCity: this.data.depCity,
            arrCity: this.data.arrCity,
            depCityName: this.data.depCityName,
            arrCityName: this.data.arrCityName,
            depTime: activeItem.depTime,
            vip: app.globalData.userInfo.isVIP ? 1 : 0,
            phone: app.globalData.userInfo.phone,
            rate: app.globalData.userInfo.rate,
            select: app.globalData.userInfo.select,
          },
          success: (res) => {
            if (res.data.err === 0) {
              wx.showToast({
                title: '添加成功',
                icon: 'success',
                duration: 2000
              })
              app.globalData.checkNum++
              let temp = this.data.flightList
              if (temp[parseInt(event.currentTarget.id)]) temp[parseInt(event.currentTarget.id)].isAdd = true
              this.setData({
                flightList: temp
              })
            }
          },
          fail: (res) => {
            console.log(res)
          }
        })
      },
      fail: (res) => {
        console.log(res)
      }
    })
  },
  subscribe: function (event) {
    var app = getApp()
    wx.requestSubscribeMessage({
      tmplIds: ['Fk0bFqqG8g7pYUh3FBWio6RRRjQGlBYuMPrz5I1uSjk', '8mo5DIYVV7lWxmeNufmCFnqGS0eLUsYOVuONb6G1G6M'],
      success: (res) => {
        wx.request({
          url: 'https://going.run/weixin',
          data: {
            type: 'dingyue',
            openid: app.globalData.openid
          },
          success: (res) => {
          }
        })
        console.log(res)
      }
    })
  },
  onShareAppMessage: function () {
    
  }
})