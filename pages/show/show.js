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
        edu: '',
        exp: '',
        skill: '',
        intro: ''
    },
    onLoad: function (options) {
        this.setData({
            name: options.name,
            sex: options.sex,
            nation: options.nation,
            birthday: options.birthday,
            schoolTag: options.schoolTag,
            wanted: options.wanted,
            phone: options.phone,
            email: options.email,
            edu: options.edu,
            exp: options.exp,
            skill: options.skill,
            intro: options.intro
        })
    },
    // 设置页面分享
    onShareAppMessage: function () {
        return {
            title: '简历',
            desc: '个人简历',
            path: '/pages/show/show?name=' + this.data.name + '&sex=' + this.data.sex + '&nation=' + this.data.nation + '&birthday=' + this.data.birthday + '&schoolTag=' + this.data.schoolTag + '&wanted=' + this.data.wanted + '&phone=' + this.data.phone + '&email=' + this.data.email + '&edu=' + this.data.edu + '&exp=' + this.data.exp + '&skill=' + this.data.skill + '&intro=' + this.data.intro
        }
    }
})