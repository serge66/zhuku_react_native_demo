'use strict';

import Type from './Types';
import ToastUtils from '../utils/ToastUtils';

var Buffer = require('buffer').Buffer;
let mDispatch;

function _requestObj(opt) {
    var auth = 'Basic ' + new Buffer(opt.account + ':' + opt.pwd).toString('base64');
    // var auth = 'Basic ' + new Buffer('lsj:12345678').toString('base64');
    console.log(auth + '---' + new Buffer(opt.account + ':' + opt.pwd).toString('base64'));
    // http://192.168.31.4:48080/zkpms-api/api/platform/security/token return new
    // Request('http://121.43.163.28:18080/zkpms-api/api/platform/security/token', {
    return new Request(global.constants.BASE_URL + 'api/platform/security/token', {
        method: 'POST',
        headers: {
            'Authorization': auth
        },
        mode: 'cors',
        credentials: 'include'
    });
}

function _status(response) {
    //是否正常返回,ok代表状态码在200-299之间==(response.status >= 200 && response.status < 300)
    if (response.ok) {
        var headers = response.headers;
        console.log(headers.get('Content-Type'));
        global.gv.setAccessToken(headers.get('X-REST-TOKEN'));
        console.log('从header种获取的token：' + global.gv.getAccessToken());

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
            // console.log(key + ':' + value); // 对应values()的返回值
            // console.log(key); // 对应keys()的返回值
        });
        console.log('------------------');

        return Promise.resolve(response);
    } else {
        //TODO 此处登录失败会出现红色弹窗，需优化
        // ToastUtils.show(global.constants.SERVER_ERROR);
        // return Promise.reject(new Error('出错:' + response.statusText))
        return Promise.resolve(response);
    }
}

function _json(res) {
    return res.json()
}

function _parseJson(responseJson) {
    // thiz.setState({isShowProgress: false});
    console.log('responseJson:' + responseJson);
    // console.log(responseJson.statusCode); alert(responseJson);
    if (responseJson.success) {
        // thiz._paramsToLastPage(); thiz     .props     .navigation .navigate('Home');

        mDispatch(loginSuccess(responseJson));

        // let navigateAction = NavigationActions.reset({     index: 0,     actions: [
        // NavigationActions.navigate({routeName: 'Home'}), //or routeName:'Main' ] });
        // thiz     .props     .navigation     .dispatch(navigateAction);

    } else {
        // ToastUtils.show("网络连接失败，请重连后重试");
        ToastUtils.show(responseJson.message);
        mDispatch(loginError());
    }
}

function _catch(error) {
    console.log('error:' + error);
    // thiz.setState({isShowProgress: false});
    ToastUtils.show(global.constants.SERVER_ERROR)
    mDispatch(loginError());
}

export function doLogin(opt) {
    return (dispatch) => {
        mDispatch = dispatch;
        dispatch(isLogining());

        var request = _requestObj(opt);
        let result = fetch(request)
            .then(_status)
            .then(_json)
            .then(_parseJson)
            .catch(_catch);

    }
}

function isLogining() {
    return {type: Type.login.LOGIN_IN_DOING}
}

function loginSuccess(data) {
    return {type: Type.login.LOGIN_IN_DONE, data: data}
}

function loginError() {
    return {type: Type.login.LOGIN_IN_ERROR}
}