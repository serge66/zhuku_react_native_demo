'use strict';

import Types from '../actions/Types'; // 导入事件类别,用来做事件类别的判断

// 初始状态

const initialState = {
    data: null,
}
// 不同类别的事件使用switch对应处理过程

export default function loginIn(state = initialState, action) {
    switch (action.type) {
        case Types.user.USER_NAME:
            console.log('reducers user: done');
            return {
                ...state,
                userName: action.data,
            }
            break;

        default:
            console.log('reducers user: default');
            return state;

    }
}