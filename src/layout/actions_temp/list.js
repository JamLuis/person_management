'use strict'
import { push } from 'connected-react-router'
export const SET_LIST = 'SET_LIST';

export function setList(data) {
    return dispatch => {
        dispatch({ type: SET_LIST, payload: data });
        dispatch(push('/'))
        
    }
}

export const SET_MAP = 'SET_MAP';

export function setMap(data) {
    return dispatch => {
        dispatch({ type: SET_MAP, payload: data });
    }
}