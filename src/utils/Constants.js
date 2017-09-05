const Constants= {
    url: 'http://a.app.qq.com/o/simple.jsp?pkgname:user.zhuku.com',
    text: "全国建筑企业管理软件",
    title: "筑库",
    imageurl: "http://gl.zhu-ku.com/upload/images/zhukufx.png",//筑库图标
    videourl: "http://video.sina.com.cn/p/sports/cba/v/2013-10-22/144463050817.html",
    musicurl: "http://music.huoxing.com/upload/20130330/1364651263157_1085.mp3",
    //默认用户图像
    DEFAULTUSERAVATAR: "http://gl.zhu-ku.com/upload/images/default_head_portrait.png",
    UMENGPUSH_ALIAS_TYPE: "zhuku",

    //推送跳转类目标示（类目在这里的意思是：已完成或者未完成或操作中）
    NOTIFACATION_FLAG: "notifacation_flag",
    ActiveOpacityNum: 0.8,

    //------保存在store中的key,注意key中不可以使用_下划线
    USER_NAME:'USERNAME',
    USER_DEPARTMENT_ID:'USERDEPARTMENTID',
    USER_DEPARTMENT:'USERDEPARTMENT',
    USER_PHONE:'USERPHONE',
    USER_ACCOUNTS:'USERACCOUNTS',
    SERVER_ERROR:'网络连接失败,请检查网络后重试',
    //内网
    BASE_URL:'http://192.168.31.4:48080/zkpms-api/',
    //自验证环境
    // BASE_URL:'http://121.43.163.28:18080/zkpms-api/',
};

global.constants = Constants;

export default Constants;