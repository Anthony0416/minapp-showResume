var editBtnGroup = require("../../../template/editBtnGroup/editBtnGroup.js")
Page({
    data: {
        title: '自我评价',
        nextBtn: '完 成'
    },
    save: function (e) {
        editBtnGroup.save()
    },
    back: function () {
        editBtnGroup.back()
    }
})