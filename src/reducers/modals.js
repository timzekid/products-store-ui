import ActionTypes from '../constants/ActionTypes.js';

const DEFAULT_STATE = {
    isAddProductModalShown: false,
    isEditProductModalShown: false
};

export default function modals(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case ActionTypes.SHOW_ADD_PRODUCT_MODAL: {
            return {
                ...state,
                isAddProductModalShown: true
            };
        }
        case ActionTypes.CLOSE_ADD_PRODUCT_MODAL: {
            return {
                ...state,
                isAddProductModalShown: false
            };
        }


        case ActionTypes.SHOW_EDIT_PRODUCT_MODAL: {
            return {
                ...state,
                isEditProductModalShown: true
            };
        }
        case ActionTypes.CLOSE_EDIT_PRODUCT_MODAL: {
            return {
                ...state,
                isEditProductModalShown: false
            };
        }
        default:
            return state;
    }
}
