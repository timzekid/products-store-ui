import { combineEpics } from 'redux-observable';
import {
    listProductsRequest,
    addNewProductRequest,
    refetchProductsAfterAddition,
    closeProductsModalAfterAddition,
    showProductRequest,
    deleteProductRequest,
    updateProductRequest,
    closeProductsModalAfterEdition,
    refetchProductAfterEdition
} from './products.js';

export default combineEpics(
    listProductsRequest,
    addNewProductRequest,
    refetchProductsAfterAddition,
    closeProductsModalAfterAddition,
    showProductRequest,
    deleteProductRequest,
    updateProductRequest,
    closeProductsModalAfterEdition,
    refetchProductAfterEdition
);
