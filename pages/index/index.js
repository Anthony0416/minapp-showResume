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
    education: '',
    experience: '',
    skill: '',
    introduction: ''
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
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
    var education = wx.getStorageSync('education')
    var experience = wx.getStorageSync('experience')
    var skill = wx.getStorageSync('skill')
    var introduction = wx.getStorageSync('introduction')
    // 判断数据是否存在
    if (name||sex||nation||birthday||schoolTag||wanted||phone||email||education||experience||skill||introduction) {
      that.setData({
        name: name,
        sex: sex,
        nation: nation,
        birthday: birthday,
        schoolTag: schoolTag,
        wanted: wanted,
        phone: phone,
        email: email,
        education: education,
        experience: experience,
        skill: skill,
        introduction: introduction
      })
    } else {
      that.setData({
        disabled: !this.data.disabled
      })
    }
  },
  show: function() {
    wx.navigateTo({
      url: '../show/show?name='+this.data.name+'&sex='+this.data.sex+'&nation='+this.data.nation+'&birthday='+this.data.birthday+'&schoolTag='+this.data.schoolTag+'&wanted='+this.data.wanted+'&phone='+this.data.phone+'&email='+this.data.email+'&education='+this.data.education+'&experience='+this.data.experience+'&skill='+this.data.skill+'&introduction='+this.data.introduction
    })
  },
  edit: function() {
    wx.redirectTo({
      url: '../edit/edit'
    })
  }
})
