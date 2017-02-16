var editBtnGroup = require("../../../template/editBtnGroup/editBtnGroup.js")
Page({
    data: {
        title: '教育背景',
        nextBtn: '下一步'
    },
    save: function (e) {
        editBtnGroup.next('../exp/exp')
    },
    back: function () {
        editBtnGroup.back()
    }
})