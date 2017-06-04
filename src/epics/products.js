import { Observable } from 'rxjs/Observable';

import ActionTypes from '../constants/ActionTypes.js';

export function listProductsRequest(action$) {
    return action$.ofType(ActionTypes.LIST_PRODUCTS_REQUEST)
      .switchMap(() =>
          Observable.ajax.getJSON('http://localhost:8080/api/v1/products')
            .map(data => ({
                type: ActionTypes.LIST_PRODUCTS_SUCCESS,
                payload: { ...data }
            }))
            .catch(error => [
                {
                    type: ActionTypes.LIST_PRODUCTS_FAIL,
                    error: { error }
                }
            ])
    );
}

export function addNewProductRequest(action$) {
    return action$.ofType(ActionTypes.ADD_NEW_PRODUCT_REQUEST)
        .switchMap(action =>
            Observable.ajax({
                body: JSON.stringify({ data: action.payload }),
                method: 'POST',
                responseType: 'json',
                url: 'http://localhost:8080/api/v1/products',
                headers: { 'Content-Type': 'application/json' }
            })
            .map(data => {
                if (data.response.error) {
                    return {
                        type: ActionTypes.ADD_NEW_PRODUCT_FORMAT_ERROR,
                        error: { ...data.response.error }
                    };
                }

                return {
                    type: ActionTypes.ADD_NEW_PRODUCT_SUCCESS,
                    payload: { ...data.response.data }
                };
            })
            .catch(error => [
                {
                    type: ActionTypes.ADD_NEW_PRODUCT_FAIL,
                    error: { error }
                }
            ])
        );
}

export function refetchProductsAfterAddition(action$) {
    return action$.ofType(ActionTypes.ADD_NEW_PRODUCT_SUCCESS)
      .switchMap(() =>
          Observable.ajax.getJSON('http://localhost:8080/api/v1/products')
            .map(data => ({
                type: ActionTypes.LIST_PRODUCTS_SUCCESS,
                payload: { ...data }
            }))
            .catch(error => [
                {
                    type: ActionTypes.LIST_PRODUCTS_FAIL,
                    error: { error }
                }
            ])
    );
}

export function closeProductsModalAfterAddition(action$) {
    return action$.ofType(ActionTypes.ADD_NEW_PRODUCT_SUCCESS)
        .mapTo({ type: ActionTypes.CLOSE_ADD_PRODUCT_MODAL });
}
