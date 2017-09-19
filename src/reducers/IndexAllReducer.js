'use strict';

import Types from '../actions/Types'; // 导入事件类别,用来做事件类别的判断

// 初始状态

const initialState = {
    indexData:null,
    indexStatus:'',
}
// 不同类别的事件使用switch对应处理过程

export default function indexAll(state = initialState, action) {
    switch (action.type) {
        case Types.indexAll.ISINDEXING:
            console.log('reducers indexAll: ISINDEXING');
            return {
                ...state,
                indexData:null,
                indexStatus:action.status
            }
            break;
        case Types.indexAll.INDEXSUCCESS:
            console.log('reducers indexAll: INDEXSUCCESS');
            return {
                ...state,
                indexData:action.data,
                indexStatus:action.status,
            }
            break;
        case Types.indexAll.INDEXERROR:
            console.log('reducers indexAll: INDEXERROR');
            return {
                ...state,
                indexData:action.data,
                indexStatus:action.status
            }
            break;

        default:
            console.log('reducers indexAll: default');
            return state;

    }
}