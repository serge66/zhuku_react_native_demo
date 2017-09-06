'use strict';

import Types from '../actions/Types'; // 导入事件类别,用来做事件类别的判断

// 初始状态

const initialState = {
    status: 'init',
    isSuccess: false,
    data: null,
    isShowProgress:false,
}
// 不同类别的事件使用switch对应处理过程

export default function loginIn(state = initialState, action) {
    switch (action.type) {
        case Types.login.LOGIN_IN_INIT:
            console.log('reducers login: init');
            return {
                ...state,
                status: 'init',
                isSuccess: false,
                data: null,
                isShowProgress:false,
            }
            break;
        case Types.login.LOGIN_IN_DOING:
            console.log('reducers login: doing');
            return {
                ...state,
                status: 'doing',
                isSuccess: false,
                data: null,
                isShowProgress:true,
            }
            break;
        case Types.login.LOGIN_IN_DONE:
            console.log('reducers login: success');
            return {
                ...state,
                status: 'success',
                isSuccess: true,
                data: action.data,
                isShowProgress:false,
            }
            break;
        case Types.login.LOGIN_IN_ERROR:
            console.log('reducers login: error');
            return {
                ...state,
                status: 'error',
                isSuccess: false,
                data: null,
                isShowProgress:false,
            }
            break;
        default:
            console.log('reducers login: default');
            return state;

    }
}