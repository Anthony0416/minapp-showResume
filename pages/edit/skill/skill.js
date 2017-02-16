var editBtnGroup = require("../../../template/editBtnGroup/editBtnGroup.js")
Page({
    data: {
        title: '专业技能',
        nextBtn: '下一步'
    },
    save: function (e) {
        editBtnGroup.next('../intro/intro')
    },
    back: function () {
        editBtnGroup.back()
    }
})