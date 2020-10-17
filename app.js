//app.js
var mta= require('./mta_analysis')
App({
  globalData: {
    openid: null
  },
  onLaunch: function (options) {
    console.log(mta)
    mta.App.init({
      "appID":"500730176",
      "autoReport": true,
  	  "statParam": true,
      "lauchOpts": options,
      "ignoreParams": [],
    })
  },
  onShareAppMessage: function () {
    
  }
})