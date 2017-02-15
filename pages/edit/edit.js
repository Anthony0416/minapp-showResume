Page({
    data: {
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
        // 从本地缓存中获取数据
        this.setData({
            name: wx.getStorageSync('name'),
            sex: wx.getStorageSync('sex'),
            nation: wx.getStorageSync('nation'),
            birthday: wx.getStorageSync('birthday'),
            schoolTag: wx.getStorageSync('schoolTag'),
            wanted: wx.getStorageSync('wanted'),
            phone: wx.getStorageSync('phone'),
            email: wx.getStorageSync('email'),
            edu: wx.getStorageSync('edu'),
            exp: wx.getStorageSync('exp'),
            skill: wx.getStorageSync('skill'),
            intro: wx.getStorageSync('intro')
        })
    },
    bindName: function(e) {
        this.setData({
            name: e.detail.value
        })
    },
    bindSex: function(e) {
        this.setData({
            sex: e.detail.value
        })
    },
    bindNation: function(e) {
        this.setData({
            nation: e.detail.value
        })
    },
    bindBirthday: function(e) {
        this.setData({
            birthday: e.detail.value
        })
    },
    bindSchoolTag: function(e) {
        this.setData({
            schoolTag: e.detail.value
        })
    },
    bindWanted: function(e) {
        this.setData({
            wanted: e.detail.value
        })
    },
    bindPhone: function(e) {
        this.setData({
            phone: e.detail.value
        })
    },
    bindEmail: function(e) {
        this.setData({
            email: e.detail.value
        })
    },
    bindEducation: function(e) {
        this.setData({
            edu: e.detail.value
        })
    },
    bindExperience: function(e) {
        this.setData({
            exp: e.detail.value
        })
    },
    bindSkill: function(e) {
        this.setData({
            skill: e.detail.value
        })
    },
    bindIntroduction: function(e) {
        this.setData({
            intro: e.detail.value
        })
    },
    save: function(e) {
        wx.clearStorageSync()
        wx.setStorageSync('name', this.data.name)
        wx.setStorageSync('sex', this.data.sex)
        wx.setStorageSync('nation', this.data.nation)
        wx.setStorageSync('birthday', this.data.birthday)
        wx.setStorageSync('schoolTag', this.data.schoolTag)
        wx.setStorageSync('wanted', this.data.wanted)
        wx.setStorageSync('phone', this.data.phone)
        wx.setStorageSync('email', this.data.email)
        wx.setStorageSync('edu', this.data.edu)
        wx.setStorageSync('exp', this.data.exp)
        wx.setStorageSync('skill', this.data.skill)
        wx.setStorageSync('intro', this.data.intro)
        wx.showModal({
            title: '提示',
            content: '保存成功，是否返回主页？',
            cancelText: '否',
            confirmText: '是',
            success: function(res) {
                if (res.confirm) {
                    wx.redirectTo({
                        url: '../index/index'
                    })
                } 
            }
        })
    },
    back: function(e) {
        wx.showModal({
            title: '提示',
            content: '是否要放弃未保存的内容并返回主页？',
            cancelText: '否',
            confirmText: '是',
            success: function(res) {
                if (res.confirm) {
                    wx.redirectTo({
                        url: '../index/index'
                    })
                } 
            }
        })       
    }
})