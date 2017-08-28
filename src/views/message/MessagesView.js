import React from "react";
import {
    View,
    Image,
    AppRegistry,
    StyleSheet,
    BackHandler,
    Text,
    TouchableOpacity
} from "react-native";
import GV from "../../utils/GlobalVariable";

let lastBackPressed = 0;
var thiz;
export default class MessagesView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowProgress: false
        };
        thiz = this;
    }

    static navigationOptions = {
        headerTitle: <Text
            style={{
            fontSize: 16,
            alignSelf: 'center',
            textAlignVertical: 'center',
            color: '#000'
        }}
            onPress={() => {
            alert('点击了title')
        }}>
            消息</Text>,
        headerStyle: {
            backgroundColor: "white"
        },
        headerTitleStyle: {
            alignSelf: 'center'
        },
        headerLeft: null
    };

    _requestObj() {
        console.log('---' + GV.ACCESS_TOKEN);
        return new Request('http://121.43.163.28:18080/zkpms-api/api/admin/index/user', {
            method: 'GET',
            headers: {
                'X-REST-TOKEN': GV.ACCESS_TOKEN
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
            // GV.ACCESS_TOKEN = headers.get('X-REST-TOKEN');
            // console.log('从header种获取的token：' + GV.ACCESS_TOKEN);

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
            console.log('---' + response);
            return Promise.reject(new Error(response.statusText))
        }
    }

    _json(res) {
        return res.json()
    }

    _parseJson(responseJson) {
        console.log(responseJson);
        // console.log(responseJson.statusCode); alert(responseJson);
        if (responseJson.success) {
            // thiz._paramsToLastPage(); thiz     .props     .navigation .navigate('Home');
            // let navigateAction = NavigationActions.reset({     index: 0,     actions: [
            //   NavigationActions.navigate({routeName: 'Home'}), //or routeName:'Main' ]
            // }); thiz     .props     .navigation     .dispatch(navigateAction);

            if(responseJson.data){
                var data = responseJson.data;
                GV.USER_NAME = data.f_name;
                GV.USER_DEPARTMENT_ID = data.f_department_id;
                GV.USER_DEPARTMENT = data.f_department_name;
                GV.USER_PHONE = data.f_telephone;
                GV.USER_ACCOUNTS = data.f_account;
                
            }
        } else {
            ToastUtils.show("网络连接失败，请重连后重试");
        }
    }

    _catch(error) {
        console.error(error);
        thiz.setState({isShowProgress: false});
    }

    _requestUserInfo() {

        var request = this._requestObj();

        fetch(request)
            .then(this._status)
            .then(this._json)
            .then(this._parseJson)
            .catch(this._catch);
    }
    login_click() {
        // this._requestUserInfo();
    }
    componentWillMount() {
        console.log('消息界面挂载');
        this._requestUserInfo();
    }

    render() {

        return (
            <View style={[styles.flex, styles.top]}>
                <TouchableOpacity activeOpacity={1} onPress={() => this.login_click()}>
                    <Image
                        style={styles.bottom}
                        source={require('../../assets/img/login/splash_logo.png')}></Image>
                </TouchableOpacity>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    top: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    bottom: {
        width: 300,
        height: 80,
        marginBottom: 40
    }
});
