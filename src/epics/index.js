import { combineEpics } from 'redux-observable';
import {
    listProductsRequest,
    addNewProductRequest,
    refetchProductsAfterAddition,
    closeProductsModalAfterAddition
} from './products.js';

export default combineEpics(
    listProductsRequest,
    addNewProductRequest,
    refetchProductsAfterAddition,
    closeProductsModalAfterAddition
);
