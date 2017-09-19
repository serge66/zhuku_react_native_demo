'use strict';

import Type from './Types';
import ToastUtils from '../utils/ToastUtils';

let mDispatch;

function _requestObj(opt) {

    return new Request(global.constants.BASE_URL + 'api/admin/index', {
        method: 'GET',
        headers: {
            'X-REST-TOKEN': opt
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
        // global.gv.setAccessToken(headers.get('X-REST-TOKEN'));
        // console.log('从header种获取的token：' + global.gv.getAccessToken(''));

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

        mDispatch(indexSuccess(responseJson));

        // let navigateAction = NavigationActions.reset({     index: 0,     actions: [
        // NavigationActions.navigate({routeName: 'Home'}), //or routeName:'Main' ] });
        // thiz     .props     .navigation     .dispatch(navigateAction);

    } else {
        // ToastUtils.show("网络连接失败，请重连后重试");
        ToastUtils.show(responseJson.message);
        mDispatch(indexError(responseJson));
    }
}

function _catch(error) {
    console.log('error indexall:' + error);
    // thiz.setState({isShowProgress: false});
    // ToastUtils.show(global.constants.SERVER_ERROR)
    mDispatch(indexError(error));
}

export function doIndex(opt) {
    return (dispatch) => {
        mDispatch = dispatch;
        dispatch(isIndexing());

        var request = _requestObj(opt);
        let result = fetch(request)
            .then(_status)
            .then(_json)
            .then(_parseJson)
            .catch(_catch);

    }
}

function isIndexing() {
    return {type: Type.indexAll.ISINDEXING, status: 'init'}
}

function indexSuccess(data) {
    return {type: Type.indexAll.INDEXSUCCESS, data: data, status: 'done'}
}

function indexError(data) {
    return {type: Type.indexAll.INDEXERROR, data: data, status: 'error'}
}