// pages/index/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading: true,
    flightList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
        arrCityName: data.arrCityName,
      })
      wx.request({
        url: 'https://going.run/weixin',
        data: {
          type: 'search',
          flightDate: data.flightDate,
          depCity: data.depCity,
          arrCity: data.arrCity
        },
        success: (res) => {
          console.log(res.data)
          if (res.data.err == 0) {
            this.setData({
              flightList: res.data.data,
              loading: false
            })
          } else {
            
            wx.redirectTo({
              url: 'add'　　// 页面 B
            })
            wx.showToast({
              title: res.data.message,
              icon: 'none',
              duration: 2000
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
    var app = getApp()
    // 订阅消息
    wx.requestSubscribeMessage({
      tmplIds: ['Fk0bFqqG8g7pYUh3FBWio6RRRjQGlBYuMPrz5I1uSjk', 'XOGLi_2DSbmJd4pp442pl4HwhdRpVbspo7ucEhHv0Eg'],
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
            depTime: activeItem.depTime
          },
          success: (res) => {
            if (res.data.err === 0) {
              wx.showToast({
                title: '添加成功',
                icon: 'success',
                duration: 2000
              })
              wx.redirectTo({
                url: 'index'　　// 页面 A
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