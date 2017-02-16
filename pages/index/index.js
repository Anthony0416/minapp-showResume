//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    disabled: false,
    name: '',
    sex: '',
    nation: '',
    birthday: '',
    schoolTag: '',
    wanted: '',
    phone: '',
    email: '',
    edu: '',
    exp: '',
    skill: '',
    intro: ''
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
    // 从本地缓存中获取数据
    var name = wx.getStorageSync('name')
    var sex = wx.getStorageSync('sex')
    var nation = wx.getStorageSync('nation')
    var birthday = wx.getStorageSync('birthday')
    var schoolTag = wx.getStorageSync('schoolTag')
    var wanted = wx.getStorageSync('wanted')
    var phone = wx.getStorageSync('phone')
    var email = wx.getStorageSync('email')
    var edu = wx.getStorageSync('edu')
    var exp = wx.getStorageSync('exp')
    var skill = wx.getStorageSync('skill')
    var intro = wx.getStorageSync('intro')
    // 判断数据是否存在
    if (name||sex||nation||birthday||schoolTag||wanted||phone||email||edu||exp||skill||intro) {
      that.setData({
        name: name,
        sex: sex,
        nation: nation,
        birthday: birthday,
        schoolTag: schoolTag,
        wanted: wanted,
        phone: phone,
        email: email,
        edu: edu,
        exp: exp,
        skill: skill,
        intro: intro
      })
    } else {
      that.setData({
        disabled: !this.data.disabled
      })
    }
  },
  show: function() {
    wx.navigateTo({
      url: '../show/show?name='+this.data.name+'&sex='+this.data.sex+'&nation='+this.data.nation+'&birthday='+this.data.birthday+'&schoolTag='+this.data.schoolTag+'&wanted='+this.data.wanted+'&phone='+this.data.phone+'&email='+this.data.email+'&edu='+this.data.edu+'&exp='+this.data.exp+'&skill='+this.data.skill+'&intro='+this.data.intro
    })
  },
  edit: function() {
    wx.redirectTo({
      url: '../edit/base/base'
    })
  }
})
