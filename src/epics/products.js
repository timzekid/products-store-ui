import { Observable } from 'rxjs/Observable';

import ActionTypes from '../constants/ActionTypes.js';

export function listProductsRequest(action$, store) {
    return action$.ofType(ActionTypes.LIST_PRODUCTS_REQUEST)
      .switchMap(() => {
          const limit = store.getState().products.limit;
          const offset = store.getState().products.offset;

          return Observable.ajax.getJSON(`http://localhost:8080/api/v1/products?offset=${offset}&limit=${limit}`)
            .map(data => ({
                type: ActionTypes.LIST_PRODUCTS_SUCCESS,
                payload: { ...data }
            }))
            .catch(error => [
                {
                    type: ActionTypes.LIST_PRODUCTS_FAIL,
                    error: { error }
                }
            ]);
      });
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

export function refetchProductsAfterAddition(action$, store) {
    return action$.ofType(ActionTypes.ADD_NEW_PRODUCT_SUCCESS)
        .switchMap(() => {
            const limit = store.getState().products.limit;
            const offset = store.getState().products.offset;

            return Observable.ajax.getJSON(`http://localhost:8080/api/v1/products?offset=${offset}&limit=${limit}`)
              .map(data => ({
                  type: ActionTypes.LIST_PRODUCTS_SUCCESS,
                  payload: { ...data }
              }))
              .catch(error => [
                  {
                      type: ActionTypes.LIST_PRODUCTS_FAIL,
                      error: { error }
                  }
              ]);
        });
}

export function closeProductsModalAfterAddition(action$) {
    return action$.ofType(ActionTypes.ADD_NEW_PRODUCT_SUCCESS)
        .mapTo({ type: ActionTypes.CLOSE_ADD_PRODUCT_MODAL });
}

export function showProductRequest(action$) {
    return action$.ofType(ActionTypes.SHOW_PRODUCT_REQUEST)
      .switchMap((action) =>
          Observable.ajax.getJSON(`http://localhost:8080/api/v1/products/${action.payload.id}`)
            .map(data => ({
                type: ActionTypes.SHOW_PRODUCT_SUCCESS,
                payload: { ...data }
            }))
            .catch(error => [
                {
                    type: ActionTypes.SHOW_PRODUCT_FAIL,
                    error: { error }
                }
            ])
      );
}

export function deleteProductRequest(action$) {
    return action$.ofType(ActionTypes.DELETE_PRODUCT_REQUEST)
      .switchMap(action =>
          Observable.ajax({
              method: 'DELETE',
              url: `http://localhost:8080/api/v1/products/${action.payload.id}`
          })
            .map(data => ({
                type: ActionTypes.DELETE_PRODUCT_SUCCESS,
                payload: { ...data }
            }))
            .catch(error => [
                {
                    type: ActionTypes.DELETE_PRODUCT_FAIL,
                    error: { error }
                }
            ])
      );
}
