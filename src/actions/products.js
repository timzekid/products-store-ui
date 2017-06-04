import ActionTypes from '../constants/ActionTypes.js';

export function listProductsRequest(payload) {
    return { type : ActionTypes.LIST_PRODUCTS_REQUEST, payload };
}

export function showAddProductModal() {
    return { type : ActionTypes.SHOW_ADD_PRODUCT_MODAL };
}

export function closeAddProductModal() {
    return { type : ActionTypes.CLOSE_ADD_PRODUCT_MODAL };
}

export function addNewProductRequest(payload) {
    return { type : ActionTypes.ADD_NEW_PRODUCT_REQUEST, payload };
}

export function changeProductsOffset(payload) {
    return { type : ActionTypes.CHANGE_PRODUCTS_OFFSET, payload };
}

export function showProductRequest(payload) {
    return { type : ActionTypes.SHOW_PRODUCT_REQUEST, payload };
}

export function deleteProductRequest(payload) {
    return { type : ActionTypes.DELETE_PRODUCT_REQUEST, payload };
}

export function showEditProductModal() {
    return { type : ActionTypes.SHOW_EDIT_PRODUCT_MODAL };
}

export function closeEditProductModal() {
    return { type : ActionTypes.CLOSE_EDIT_PRODUCT_MODAL };
}

export function updateProductRequest(payload) {
    return { type : ActionTypes.UPDATE_PRODUCT_REQUEST, payload };
}
