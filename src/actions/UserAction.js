"use strict";

import Type from './Types';

export function userName(opt) {
    return (dispatch) => {
        dispatch(dispatchUserName(opt));
    }
}

function dispatchUserName(opt) {
    return {type: Type.user.USER_NAME, data: opt}
}
