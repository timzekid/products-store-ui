import ActionTypes from '../constants/ActionTypes.js';
import { formatProduct } from '../utils/apiResponseFormatter.js';

const DEFAULT_STATE = {
    productsList: [],
    totalCount: 0
};

export default function products(state = DEFAULT_STATE, action) {
    console.log('action', action);
    switch (action.type) {
        case ActionTypes.LIST_PRODUCTS_SUCCESS: {
            return {
                ...state,
                productsList: action.payload.data.map(product => formatProduct(product)),
                totalCount: action.payload.meta.totalCount
            };
        }
        case ActionTypes.LIST_PRODUCTS_FAIL: {
            console.error(`${ActionTypes.LIST_PRODUCTS_FAIL} error`, action.error);

            return { ...state };
        }

        case ActionTypes.ADD_NEW_PRODUCT_FAIL: {
            console.error(`${ActionTypes.ADD_NEW_PRODUCT_FAIL} error`, action.error);

            return { ...state };
        }
        default:
            return state;
    }
}
