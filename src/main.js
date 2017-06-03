import 'babel-polyfill';
import React              from 'react';
import { render }         from 'react-dom';
import { browserHistory } from 'react-router';

import Root           from './containers/Root.jsx';
import configureStore from './store/configureStore.js';

import './assets';
import './vendor/rxjs';

const store = configureStore();

render(
    <Root store={store} history={browserHistory} />,
    document.getElementById('root')
);
