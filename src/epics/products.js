import { Observable } from 'rxjs/Observable';

import config      from '../config.js';
import ActionTypes from '../constants/ActionTypes.js';

export function listProductsRequest(action$, store) {
    return action$.ofType(ActionTypes.LIST_PRODUCTS_REQUEST)
      .switchMap((action) => {
          const limit = store.getState().products.limit;
          const offset = action.payload ? action.payload.offset : store.getState().products.offset;

          return Observable.ajax.getJSON(`${config.apiPrefix}/products?offset=${offset}&limit=${limit}`)
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
                url: `${config.apiPrefix}/products`,
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

            return Observable.ajax.getJSON(`${config.apiPrefix}/products?offset=${offset}&limit=${limit}`)
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
          Observable.ajax.getJSON(`${config.apiPrefix}/products/${action.payload.id}`)
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
              url: `${config.apiPrefix}/products/${action.payload.id}`
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

export function updateProductRequest(action$) {
    return action$.ofType(ActionTypes.UPDATE_PRODUCT_REQUEST)
        .switchMap(action =>
            Observable.ajax({
                body: JSON.stringify({ data: action.payload }),
                method: 'PUT',
                responseType: 'json',
                url: `${config.apiPrefix}/products/${action.payload.id}`,
                headers: { 'Content-Type': 'application/json' }
            })
            .map(data => {
                if (data.response.error) {
                    return {
                        type: ActionTypes.UPDATE_PRODUCT_FORMAT_ERROR,
                        error: { ...data.response.error }
                    };
                }

                return {
                    type: ActionTypes.UPDATE_PRODUCT_SUCCESS,
                    payload: { ...data.response.data }
                };
            })
            .catch(error => [
                {
                    type: ActionTypes.UPDATE_PRODUCT_FAIL,
                    error: { error }
                }
            ])
        );
}

export function closeProductsModalAfterEdition(action$) {
    return action$.ofType(ActionTypes.UPDATE_PRODUCT_SUCCESS)
        .mapTo({ type: ActionTypes.CLOSE_EDIT_PRODUCT_MODAL });
}

export function refetchProductAfterEdition(action$) {
    return action$.ofType(ActionTypes.UPDATE_PRODUCT_SUCCESS)
      .switchMap((action) =>
          Observable.ajax.getJSON(`${config.apiPrefix}/products/${action.payload.id}`)
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
