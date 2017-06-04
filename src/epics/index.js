import { combineEpics } from 'redux-observable';
import {
    listProductsRequest,
    addNewProductRequest,
    refetchProductsAfterAddition,
    closeProductsModalAfterAddition,
    showProductRequest,
    deleteProductRequest
} from './products.js';

export default combineEpics(
    listProductsRequest,
    addNewProductRequest,
    refetchProductsAfterAddition,
    closeProductsModalAfterAddition,
    showProductRequest,
    deleteProductRequest
);
