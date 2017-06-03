import { combineEpics } from 'redux-observable';
import { listProductsRequest } from './products.js';

export default combineEpics(
    listProductsRequest
);
