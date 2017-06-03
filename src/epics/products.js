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
