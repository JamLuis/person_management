'use strict';
// import { Crypto, WebAPI } from '$utils';
import * as T from '../constants'

//temp for test
export function login(userName, password) {
    return dispatch => {
        dispatch({ type: T.REQUEST_LOGIN });

        setTimeout(() => {
            dispatch({ type: T.LOGIN_SUCCESS, payload: { user: { userName, password } } })
        }, 600);
    }
}

export default {
    login
}