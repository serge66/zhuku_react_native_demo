"use strict";

import React from "react";
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import ToastUtils from "../utils/ToastUtils.js";
import * as Progress from "react-native-progress";
import GV from "../utils/GlobalVariable";
import {NavigationActions} from "react-navigation";

var Buffer = require('buffer').Buffer;
var account = '';
var pwd = '';
const {height, width} = Dimensions.get('window');
var thiz;

export default class LoginView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowProgress: false
        };
        thiz = this;
    }

    static navigationOptions = {
        header: null
    };

    _getData() {
        fetch('http://gl.zhu-ku.com/zhuku/ws/system/auth/getNewVersion/1').then((response) => response.json()).then((resopnseJson) => {
            console.log(resopnseJson);
        }).catch((error) => {
            console.error(error)
        })
    }

    _requestObj() {
        var auth = 'Basic ' + new Buffer(account + ':' + pwd).toString('base64');
        console.log(auth + '--' + new Buffer('wxd:12345678').toString('base64'));
        return new Request('http://121.43.163.28:18080/zkpms-api/api/platform/security/token', {
            method: 'POST',
            headers: {
                'Authorization': auth
            },
            mode: 'cors',
            credentials: 'include'
        });
    }

    _status(response) {
        //是否正常返回,ok代表状态码在200-299之间==(response.status >= 200 && response.status < 300)
        if (response.ok) {
            var headers = response.headers;
            console.log(headers.get('Content-Type'));
            GV.ACCESS_TOKEN = headers.get('X-REST-TOKEN');
            console.log('从header种获取的token：' + GV.ACCESS_TOKEN);

            console.log(response.status);
            console.log(response.statusText);
            console.log(response.type);
            console.log(response.url);
            console.log('------------------');

            // TODO 此处遍历在android中报错 undefined is not a function (evaluating
            // '_iterator[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]()')
            // <unknown> for (let key of headers.keys()) {     console.log(key); //
            // datelast-modified server accept-ranges etag content-length content-type }
            // console.log('------------------'); for (let value of headers.values()) {
            // console.log(value); } console.log('------------------');

            headers.forEach(function (value, key, arr) {
                console.log(key + ':' + value); // 对应values()的返回值
                // console.log(key); // 对应keys()的返回值
            });
            console.log('------------------');

            return Promise.resolve(response)
        } else {
            //TODO 此处登录失败会出现红色弹窗，需优化
            return Promise.reject(new Error(response.statusText))
        }
    }

    _json(res) {
        return res.json()
    }

    _parseJson(responseJson) {
        thiz.setState({isShowProgress: false});
        console.log(responseJson);
        // console.log(responseJson.statusCode); alert(responseJson);
        if (responseJson.success) {
            // thiz._paramsToLastPage(); thiz     .props     .navigation
            // .navigate('Home');

            let navigateAction = NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({routeName: 'Home'}), //or routeName:'Main'
                ]
            });
            thiz
                .props
                .navigation
                .dispatch(navigateAction);

        } else {
            ToastUtils.show("网络连接失败，请重连后重试");
        }
    }

    _catch(error) {
        console.error(error);
        thiz.setState({isShowProgress: false});
    }

    _loginData() {
        if (account == '' || pwd == '') {
            account = 'lsj';
            pwd = '12345678'
        }
        console.log(account + pwd);
        this.setState({isShowProgress: true});

        var request = this._requestObj();

        fetch(request)
            .then(this._status)
            .then(this._json)
            .then(this._parseJson)
            .catch(this._catch);
    }

    _postData() {
        if (this.state.account == '' || this.state.pwd == '') {
            // ToastUtils.show('帐号或密码不能为空'); return;
            this.setState({account: '17740411939', pwd: '00000000'})
        }
        this.setState({isShowProgress: true});
        fetch('http://api.test.zhu-ku.com/zhuku/ws/system/auth/access', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=utf-8',
                // 'Content-Type': 'multipart/form-data', 'Content-Type': 'application/json',
            },
            mode: 'cors',
            credentials: 'include',
            // body: this.formData,
            body: JSON.stringify({'userAccount': this.state.account, 'userPassword': this.state.pwd, 'appKey': this.state.key})
        }).then((response) => response.json()).then((responseJson) => {
            this.setState({isShowProgress: false});
            console.log(responseJson);
            console.log(responseJson.statusCode);
            // alert(responseJson);
            if (responseJson.statusCode === '0000') {

                GV.ACCESS_TOKEN = responseJson.tokenCode;
                if (responseJson.returnData != null) {
                    GV.userAccount = responseJson.returnData.userAccount;
                    GV.USER_ID = responseJson.returnData.userId;
                    GV.USER_NAME = responseJson.returnData.userName;
                    GV.USER_PORTRAIT = responseJson.returnData.userHeadImg;
                    // GV.USER_JOB = responseJson.returnData.userHeadImg;
                    GV.COMPANYNAME = responseJson.returnData.companyName;
                }
                console.log("帐号：" + GV.userAccount + " id：" + GV.USER_ID + " 用户名：" + GV.USER_NAME);

                this._paramsToLastPage();
                this
                    .props
                    .navigation
                    .navigate('Home');

                // let navigateAction = NavigationActions.reset({     index: 0,     actions: [
                // NavigationActions.navigate({routeName: 'Home'})  //or routeName:'Main' ] });
                // this.props.navigation.dispatch(navigateAction);

            } else if (responseJson.statusCode === '1011') {
                ToastUtils.show("帐号或密码不正确");
            } else {
                ToastUtils.show("网络连接失败，请重连后重试");
            }
            // return responseJson.statusDesc;
        }).catch((error) => {
            console.error(error);
            this.setState({isShowProgress: false});
            // alert(error);
        });
    }

    login_click() {
        // 可以用 const reindexToken = await AsyncStorage.getItem('REINDEX_TOKEN');存取
        // this.props.navigation.goBack(); this._postData();
        this._loginData();
        // this._getData(); this._paramsToLastPage();
    }

    _paramsToLastPage() {
        const {navigate, goBack, state} = this.props.navigation;
        // 在第二个页面,在goBack之前,将上个页面的方法取到,并回传参数,这样回传的参数会重走render方法
        state
            .params
            .callback('从LoginView界面回传的数据');
        goBack(null);
    }

    forgot_click() {
        alert("忘记密码")
    }

    select_entry_click() {
        // this.props.navigation.navigate('SelectEntry');
        const {navigate, goBack, state} = this.props.navigation;
        // 在第二个页面,在goBack之前,将上个页面的方法取到,并回传参数,这样回传的参数会重走render方法
        // state.params.callback('从LoginView界面回传的数据');
        goBack(null);
    }

    render() {
        return (
            <View style={[styles.flex, styles.posi]}>
                <View style={[styles.flex, styles.top, styles.topContent]}>
                    <View style={styles.homePage}>
                        <TouchableOpacity activeOpacity={1} onPress={() => this.select_entry_click()}>
                            <Text style={styles.homePageText}>首页</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Image
                            style={{
                            width: 80,
                            height: 100
                        }}
                            resizeMode={'center'}
                            source={require('../assets/img/login/Login_Logo.png')}/>
                    </View>
                    <View style={styles.content}>{/*中间的两个输入模块*/}
                        <View style={styles.account_pwd_line}>
                            <View style={styles.account_pwd}>
                                <Text style={styles.leftText}>帐号</Text>
                                {/*<Text style={styles.rightText}>请输入手机号</Text>*/}
                                <TextInput
                                    placeholder={'请输入手机号'}
                                    multiline={false}
                                    autoFocus={true}
                                    style={styles.rightText}
                                    blurOnSubmit={true}
                                    underlineColorAndroid={'transparent'}
                                    keyboardType={'ascii-capable'}
                                    onChangeText={(text) => {
                                    {/* this.setState({ account: text, }); */
                                    }
                                    account = text;
                                }}/>
                            </View>
                            <View style={styles.line}>{/*一条线*/}
                            </View>
                        </View>
                        <View style={styles.account_pwd_line}>
                            <View style={styles.account_pwd}>
                                <Text style={styles.leftText}>密码</Text>
                                {/* <Text style={styles.rightText}>请输入登录密码</Text>*/}
                                <TextInput
                                    placeholder={'请输入登录密码'}
                                    multiline={false}
                                    autoFocus={false}
                                    style={styles.rightText}
                                    blurOnSubmit={true}
                                    secureTextEntry={true}
                                    underlineColorAndroid={'transparent'}
                                    keyboardType={'ascii-capable'}
                                    onChangeText={(text) => {
                                    {/* this.setState({ pwd: text, }); */
                                    }
                                    pwd = text;
                                }}/>
                            </View>
                            <View style={styles.line}>{/*一条线*/}
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.login_click()}>
                        <View style={styles.loginLayout}>
                            <Text style={styles.loginText}>登录</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.forgot_click()}>
                        <View>
                            <Text style={styles.forgotText}>忘记密码?</Text>
                        </View>
                    </TouchableOpacity>

                </View>
                {this.state.isShowProgress === true
                    ? (
                        <View style={[styles.progressContent, styles.flex]}>
                            <Progress.CircleSnail style={[styles.progress]} color={['#2196F3']} size={60}/>
                        </View>
                    )
                    : (null)
}

            </View>
        );
    }

}

const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    posi: {
        position: 'absolute'
    },
    top: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    homePage: {
        // flex: 1,
        height: 80,
        width: width,
        marginTop: 20,
        // alignSelf: 'flex-end',
    },
    homePageText: {
        alignSelf: 'flex-end',
        marginRight: 20,
        color: '#10b2ff',
        fontSize: 15
    },
    content: {
        //     width: width,     height: height / 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: height / 10
    },
    account_pwd: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',

        // width: width,
        height: height / 15
    },
    account_pwd_line: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // flex: 1,
    },
    leftText: {
        fontSize: 15,
        color: '#000000',
        // width:'60%',
    },
    rightText: {
        fontSize: 13,
        color: '#aaaaaa',
        flex: 1,
        marginLeft: 10
    },
    line: {
        height: 1,
        width: 300,
        backgroundColor: '#e5e5e5'
    },
    loginLayout: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#10b2ff',
        height: 40,
        width: 300,
        marginTop: 20
    },
    loginText: {
        color: '#ffffff',
        fontSize: 15,
        alignSelf: 'center'
    },
    forgotText: {
        fontSize: 12,
        color: '#aaaaaa',
        marginTop: 20
    },
    progress: {
        margin: 10,
        alignSelf: 'center'
    },
    progressContent: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#55555555',
        width: width,
        height: height
    },
    topContent: {
        position: 'absolute',
        height: height
    }
});
