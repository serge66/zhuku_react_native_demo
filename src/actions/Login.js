'use strict';

import Type from './Types';

export default function doLogin(){
    return dispatch =>{
        dispatch(isLogining());

        
    }

}

function isLogining(){
    return Type.LOGIN_IN_DOING;
}

function loginSuccess(){
    return Type.LOGIN_IN_DONE;
}

function loginError(){
    return Type.LOGIN_IN_ERROR;
}