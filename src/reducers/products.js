import ActionTypes from '../constants/ActionTypes.js';
import { formatProduct } from '../utils/apiResponseFormatter.js';
import { formatError } from '../utils/errorFormatter.js';

const DEFAULT_STATE = {
    productsList: [],
    totalCount: 0,
    offset: 0,
    limit: 6,
    errorDuringAddition: { isError: false },
    errorDuringEdition: { isError: false }
};

export default function products(state = DEFAULT_STATE, action) {
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
        case ActionTypes.CHANGE_PRODUCTS_OFFSET: {
            return {
                ...state,
                offset: action.payload.nextOffset
            };
        }


        case ActionTypes.ADD_NEW_PRODUCT_FORMAT_ERROR: {
            console.error(`${ActionTypes.ADD_NEW_PRODUCT_FORMAT_ERROR} error`, action.error);

            const formattedError = formatError(action.error);

            return {
                ...state,
                errorDuringAddition: formattedError
            };
        }
        case ActionTypes.CLOSE_ADD_PRODUCT_MODAL: {
            return {
                ...state,
                errorDuringAddition: { isError: false }
            };
        }
        case ActionTypes.ADD_NEW_PRODUCT_FAIL: {
            console.error(`${ActionTypes.ADD_NEW_PRODUCT_FAIL} error`, action.error);

            return { ...state };
        }


        case ActionTypes.SHOW_PRODUCT_SUCCESS: {
            return {
                ...state,
                productsList: [ formatProduct(action.payload.data) ]
            };
        }
        case ActionTypes.SHOW_PRODUCT_FAIL: {
            console.error(`${ActionTypes.SHOW_PRODUCT_FAIL} error`, action.error);

            return { ...state };
        }


        case ActionTypes.DELETE_PRODUCT_FAIL: {
            console.error(`${ActionTypes.DELETE_PRODUCT_FAIL} error`, action.error);

            return { ...state };
        }


        case ActionTypes.UPDATE_PRODUCT_FORMAT_ERROR: {
            console.error(`${ActionTypes.UPDATE_PRODUCT_FORMAT_ERROR} error`, action.error);

            const formattedError = formatError(action.error);

            return {
                ...state,
                errorDuringEdition: formattedError
            };
        }
        case ActionTypes.UPDATE_PRODUCT_FAIL: {
            console.error(`${ActionTypes.UPDATE_PRODUCT_FAIL} error`, action.error);

            return { ...state };
        }
        case ActionTypes.CLOSE_EDIT_PRODUCT_MODAL: {
            return {
                ...state,
                errorDuringEdition: { isError: false }
            };
        }
        default:
            return state;
    }
}
