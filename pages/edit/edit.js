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
        education: '',
        experience: '',
        skill: '',
        introduction: ''
    },
    onLoad: function () {
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
        this.setData({
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
    },
    bindName: function(e) {
        console.log(e.detail.name)
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
            education: e.detail.value
        })
    },
    bindExperience: function(e) {
        this.setData({
            experience: e.detail.value
        })
    },
    bindSkill: function(e) {
        this.setData({
            skill: e.detail.value
        })
    },
    bindIntroduction: function(e) {
        this.setData({
            introduction: e.detail.value
        })
    },
    save: function(e) {
        wx.setStorageSync('name', this.data.name)
        wx.setStorageSync('sex', this.data.sex)
        wx.setStorageSync('nation', this.data.nation)
        wx.setStorageSync('birthday', this.data.birthday)
        wx.setStorageSync('schoolTag', this.data.schoolTag)
        wx.setStorageSync('wanted', this.data.wanted)
        wx.setStorageSync('phone', this.data.phone)
        wx.setStorageSync('email', this.data.email)
        wx.setStorageSync('education', this.data.education)
        wx.setStorageSync('experience', this.data.experience)
        wx.setStorageSync('skill', this.data.skill)
        wx.setStorageSync('introduction', this.data.introduction)
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