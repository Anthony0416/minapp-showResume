function back() {
    wx.showModal({
        title: '提示',
        content: '是否要放弃未保存的内容并返回主页？',
        cancelText: '否',
        confirmText: '是',
        success: function (res) {
            if (res.confirm) {
                wx.redirectTo({
                    url: '../../index/index'
                })
            }
        }
    })
}

function next(add) {
    wx.redirectTo({
        url: add
    })
}

function save() {
    wx.showModal({
        title: '提示',
        content: '保存成功，是否返回主页？',
        cancelText: '否',
        confirmText: '是',
        success: function (res) {
            if (res.confirm) {
                wx.redirectTo({
                    url: '../../index/index'
                })
            }
        }
    })
}

module.exports.back = back
module.exports.next = next
module.exports.save = save