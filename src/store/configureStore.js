import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import productsReducer from '../reducers/products.js';
import rootEpic        from '../epics';

const epicMiddleware = createEpicMiddleware(rootEpic);

export default function configureStore() {
    return createStore(
        productsReducer,
        applyMiddleware(epicMiddleware)
    );
}
