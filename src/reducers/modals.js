import ActionTypes from '../constants/ActionTypes.js';

const DEFAULT_STATE = {
    isAddProductModalShown: false
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
        default:
            return state;
    }
}
