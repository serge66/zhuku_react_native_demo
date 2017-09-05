'use strict';

import {combineReducers} from 'redux';
import loginIn from './Login'; // 导入登录的redux处理过程

const rootReducer = combineReducers({ // 将所有的redux处理逻辑包装在一起

    loginIn: loginIn
});

export default rootReducer; // 导出,作为统一入口