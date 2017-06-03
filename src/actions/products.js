import ActionTypes from '../constants/ActionTypes.js';

export function listProductsRequest() {
    return {
        type : ActionTypes.LIST_PRODUCTS_REQUEST
    };
}
