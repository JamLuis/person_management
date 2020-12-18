'use strict';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import RuduxThunk from 'redux-thunk';

function configStore(reducers) {
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    const rootReducer = combineReducers(reducers);
    const store = createStore(rootReducer, {}, composeEnhancer(applyMiddleware(RuduxThunk)));
    return store;
}
export default configStore;