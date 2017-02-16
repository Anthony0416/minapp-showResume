var editBtnGroup = require("../../../template/editBtnGroup/editBtnGroup.js")
Page({
    data: {
        title: '工作经历',
        nextBtn: '下一步'
    },
    save: function (e) {
        editBtnGroup.next('../skill/skill')
    },
    back: function () {
        editBtnGroup.back()
    }
})