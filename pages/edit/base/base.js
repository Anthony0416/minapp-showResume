var editBtnGroup = require("../../../template/editBtnGroup/editBtnGroup.js")
Page({
    data: {
        sexArr: ["男", "女"],
        index: 0,
        title: '个人基本信息',
        nextBtn: '下一步',
        name: '',
        sex: '',
        nation: '',
        birthday: '1990-01-01',
        schoolTag: '',
        wanted: '',
        phone: '',
        email: ''
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
            email: wx.getStorageSync('email')
        })
    },
    bindName: function (e) {
        this.setData({
            name: e.detail.value
        })
    },
    bindSex: function (e) {
        var s = e.detail.value
        this.setData({
            index: s
        })
        if (s == 1) {
            console.log(1)
            this.setData({
                sex: "女"
            })
        } else {
            this.setData({
                sex: "男"
            })
        }
    },
    bindNation: function (e) {
        this.setData({
            nation: e.detail.value
        })
    },
    bindBirthday: function (e) {
        this.setData({
            birthday: e.detail.value
        })
    },
    bindSchoolTag: function (e) {
        this.setData({
            schoolTag: e.detail.value
        })
    },
    bindWanted: function (e) {
        this.setData({
            wanted: e.detail.value
        })
    },
    bindPhone: function (e) {
        this.setData({
            phone: e.detail.value
        })
    },
    bindEmail: function (e) {
        this.setData({
            email: e.detail.value
        })
    },
    save: function (e) {
        wx.setStorageSync('name', this.data.name)
        wx.setStorageSync('sex', this.data.sex)
        wx.setStorageSync('nation', this.data.nation)
        wx.setStorageSync('birthday', this.data.birthday)
        wx.setStorageSync('schoolTag', this.data.schoolTag)
        wx.setStorageSync('wanted', this.data.wanted)
        wx.setStorageSync('phone', this.data.phone)
        wx.setStorageSync('email', this.data.email)
        editBtnGroup.next('../edu/edu')
    },
    back: function (e) {
        editBtnGroup.back()
    }
})