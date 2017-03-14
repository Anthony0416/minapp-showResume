function quit() {
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

function goto(add) {
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

module.exports.quit = quit
module.exports.goto = goto
module.exports.save = save