var editBtnGroup = require("../../../template/editBtnGroup/editBtnGroup.js")
Page({
    data: {
        title: '教育背景',
        nextBtn: '下一步',
        eduData1: '2000-01-01',
        eduSchool1: '',
        eduCont1: '',
        eduData2: '2000-01-01',
        eduSchool2: '',
        eduCont2: ''
    },
    save: function (e) {
        editBtnGroup.next('../exp/exp')
    },
    back: function () {
        editBtnGroup.back()
    }
})