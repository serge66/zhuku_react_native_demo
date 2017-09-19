"use strict";

const types = {
    login: {
        LOGIN_IN_INIT: 'LOGIN_IN_INIT',
        LOGIN_IN_DOING: 'LOGIN_IN_DOING',
        LOGIN_IN_DONE: 'LOGIN_IN_DONE',
        LOGIN_IN_ERROR: 'LOGIN_IN_ERROR',
        LOGIN_OUT: 'LOGIN_OUT',
    },

    user: {
        USER_NAME: 'USER_NAME',
        USER_AVATOR: 'USER_AVATOR',
        USER_PHONE: 'USER_PHONE',
        USER_DEPARTMENT: 'USER_DEPARTMENT',
    },
    token:{
        TOKEN:'TOKEN',
    },
    indexAll:{
        ISINDEXING:'ISINDEXING',
        INDEXSUCCESS:'INDEXSUCCESS',
        INDEXERROR:'INDEXERROR',
    },
}

export default types;
