'use strict'
import * as ActionTypes from '../actions_temp/list';

const initState = {
    data: null
};


function map(state = initState, actions) {
    const { type, payload } = actions
    switch (type) {
        case ActionTypes.SET_MAP:
            return Object.assign({}, initState, { data: payload });
        default:
            return state;
    }
}

export default {
    map
};