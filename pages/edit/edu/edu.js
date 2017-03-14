var editBtnGroup = require("../../../template/editBtnGroup/editBtnGroup.js")
Page({
    data: {
        title: '教育背景',
        backBtn: '上一步',
        nextBtn: '下一步',
        eduDates: [],
        eduSchools: [],
        eduConts: [],
    },
     onLoad: function () {
        // 从本地缓存中获取数据
        this.setData({
            eduDates: wx.getStorageSync('eduDates')||["2010-01-01","2010-01-01"],
            eduSchool: wx.getStorageSync('eduSchools'),
            eduCont: wx.getStorageSync('eduConts'),
        })
        // 根据数组长度渲染页面
        console.log(this.eduDate);
    },
    bindeduSchool: (e) =>{
        console.log(e.detail.value);
    },
    bindFocus: (e) => {
        console.log(e.detail.value);
    },
    save: function (e) {
        editBtnGroup.goto('../exp/exp')
    },
    back: function () {
        editBtnGroup.goto('../base/base')
    }
})