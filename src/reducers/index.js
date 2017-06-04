import { combineReducers } from 'redux';

import products from './products.js';
import modals   from './modals.js';

const rootReducer = combineReducers({
    products,
    modals
});

export default rootReducer;
