var Gv = {

    /**
     * 用户昵称，默认为null,测试时 江苏沃因思
     */
    USER_NAME: "",

    /**
     * 环信UserName 也就是登录的UserId
     */
    HX_USERNAME: "",

    /**
     * 环信Password
     */
    HX_PASSWORD: "",

    /**
     * 用户id,默认.MAX_VALUE，暂时为-1
     */
    USER_ID: -1,

    /**
     * 用户头像URL
     */
    USER_PORTRAIT: "",

    name(params) {
        
    },

    /**
     * 用户帐号，默认为null,暂时调试为1
     */
    USER_ACCOUNTS: "",

    /**
     * 用户手机号
     */
    USER_PHONE: "",

    /**
     * 用户邮箱
     */
    USER_EMAIL: "",

    /**
     * 用户职务,角色
     */
    USER_JOB: "",

    /**
     * 用户职务,角色id
     */
    USER_JOB_ID: -1,

    /**
     * 用户部门，默认为null,暂时调试为技术部
     */
    USER_DEPARTMENT: "",

    /**
     * 用户部门id，.MAX_VALUE,暂时调试为7Loain
     */
    USER_DEPARTMENT_ID: -1,
    /**
     * 专用于新手帮助，政策隐私说明，调用web
     */
    BASE_WEB_URL: "http://erp.zhu-ku.com/zhuku/",

    /**
     * 公用SharedPreferences文件名
     */
    SP_FINENAME: "zhuku_confige",

    /**
     * DesUtils的秘钥
     */
    DES_UTILS_SECRET: "zhuku",

    /**
     * 当前用户token，默认为null,暂时调试为0000
     * 2016年11月08日14:26:11
     * 暂时默认为0000 切换正式服务器时改成0
     */
    ACCESS_TOKEN: "",

    /**
     * 执行人ID
     */
    EXECUTORID: "",

    /**
     * 生成二维码前缀
     */
    QR_CODE: "woyinsi_",
    /**
     * 本地存储根目录
     */
    // FILE_ROOT : Environment.getExternalStorageDirectory().getAbsolutePath()+ "/Android/data/user.zhuku.com",
    /**
     * 缓存目录
     */
    // FILE_IMAGE_LOADER_CACHE : FILE_ROOT + "/cache",

    /**
     * 业主项目ID(**********************营销项目ID**************************)
     */
    OWNER_PROJECTID: 0,

    /**
     * 业主默认监管的立项项目ID( *****************立项项目ID*********************)
     */
    OWNER_PROJID: 0,

    /**
     * 业主公司ID // 普通用户公司ID也存在这
     */
    OWNER_COMPANYID: -1,

    /**
     * 业主公司ID // 普通用户公司ID也存在这
     */
    OWNER_OPID: -1,

    /**
     * 业主项目经理名称
     */
    OWNER_PROJECT_MANAGER_NAME: "",

    /**
     * null
     */
    NULL: "",

    /**
     * 企业类型---改为用户类型 2017年2月28日 13:37:08
     * 1:需求方  2:供应商----改为0是施工方 1是监管方 2017年2月28日 13:37:36
     */
    COMPANYTYPE: -1,

    /**
     * 企业名称
     */
    COMPANYNAME: "",
    /**
     * 驳回审核的默认回复
     */
    REJECT_CONTEXT: "驳回,审核不通过",
    /**
     * 同意审核的默认回复
     */
    AGREE_CONTEXT: "审核通过，可以执行",
    /**
     * 切换企业UI Flag
     */
    BROADCAST_FILTER: "com.broadcast.switchmain",
    /**
     * 审核回复传值Flag
     */
    DATAS: "datas",

    /**
     * 所有权限列表 在login页面一次性获得
     */
    permissionsIdList: "",

    /**
     * 列表页默认条目个数
     */
    PAGESIZE: 20,

    /**
     * 输入时间间隔
     */
    INPUT_TIME_ERVAL: 1000,

    /**
     * 计数器，计算应用前后台
     * activityCount>:1，那么就是前台，activityCount::0，那就是后台
     */
    activityCount: 0,


};

function name(){

};

Gv.name = name;

export default Gv;