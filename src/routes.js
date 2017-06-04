import React from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';

import App                        from './components/App.jsx';
import ProductsPageContainer      from './containers/pages/ProductsPageContainer.jsx';
import ProductPageContainer       from './containers/pages/ProductPageContainer.jsx';

export default (
    <Route path='/' component={App}>
        <IndexRoute component={ProductsPageContainer} />

        <Route path='/products/:id' component={ProductPageContainer} />

        <Redirect from='*' to='/' />
    </Route>
);
