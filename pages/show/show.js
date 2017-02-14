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
        education: '',
        experience: '',
        skill: '',
        introduction: ''
    },
    onLoad: function(options){
        this.setData({
            name: options.name,
            sex: options.sex,
            nation: options.nation,
            birthday: options.birthday,
            schoolTag: options.schoolTag,
            wanted: options.wanted,
            phone: options.phone,
            email: options.email,
            education: options.education,
            experience: options.experience,
            skill: options.skill,
            introduction: options.introduction
        }) 
    },
    // 设置页面分享
    onShareAppMessage: function () {
        return {
            title: '简历',
            desc: '个人简历',
            path: '/pages/show/show?name='+this.data.name+'&sex='+this.data.sex+'&nation='+this.data.nation+'&birthday='+this.data.birthday+'&schoolTag='+this.data.schoolTag+'&wanted='+this.data.wanted+'&phone='+this.data.phone+'&email='+this.data.email+'&education='+this.data.education+'&experience='+this.data.experience+'&skill='+this.data.skill+'&introduction='+this.data.introduction
        }
    }
})