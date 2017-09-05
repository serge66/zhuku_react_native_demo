'use strict';

import types from '../actions/Types'; // 导入事件类别,用来做事件类别的判断

// 初始状态

const initialState = {
    status: 'init',
    isSuccess: false,
    data: null
}
// 不同类别的事件使用switch对应处理过程

export default function loginIn(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_IN_INIT:
            console.log('reducers login: init');
            return {
                ...state,
                status: 'init',
                isSuccess: false,
                data: null
            }
            break;
        case types.LOGIN_IN_DOING:
            console.log('reducers login: doing');
            return {
                ...state,
                status: 'doing',
                isSuccess: false,
                data: null
            }
            break;
        case types.LOGIN_IN_DONE:
            console.log('reducers login: success');
            return {
                ...state,
                status: 'success',
                isSuccess: true,
                data: action.data
            }
            break;
        case types.LOGIN_IN_ERROR:
            console.log('reducers login: error');
            return {
                ...state,
                status: 'error',
                isSuccess: false,
                data: null
            }
            break;
        default:
            console.log('reducers login: default');
            return state;

    }
}