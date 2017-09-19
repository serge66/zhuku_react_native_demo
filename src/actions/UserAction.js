"use strict";

import Type from './Types';

//异步从本地取用户信息 lsj  2017-09-11 14:11:14
export function userName(opt) {
    return (dispatch) => {
        dispatch(dispatchUserName(opt));
    }
}

function dispatchUserName(opt) {
    return {type: Type.user.USER_NAME, data: opt}
}

//异步从本地取用户部门信息 lsj  2017-09-11 14:11:14
export function userDepartment(opt) {
    return (dispatch) => {
        dispatch(dispatchDepartment(opt));
    }
}

function dispatchDepartment(opt) {
    return {type: Type.user.USER_DEPARTMENT, data: opt}
}

//异步从本地取token信息 lsj  2017-09-11 14:11:14
export function userToken(opt) {
    return (dispatch) => {
        dispatch(dispatchToken(opt));
    }
}

function dispatchToken(opt) {
    return {type: Type.token.TOKEN, data: opt}
}
