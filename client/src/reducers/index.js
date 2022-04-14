import React from 'react';
import {combineReducers} from 'redux';
import CartReducer from './includes/CartReducer';
const rootReducer = combineReducers({
    carts: CartReducer
})

export default rootReducer;