import React from 'react';
import {combineReducers} from 'redux';
import CartReducer from './includes/CartReducer';
const rootReducer = combineReducers({
    cart: CartReducer
})

export default rootReducer;