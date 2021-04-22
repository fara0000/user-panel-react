import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleWare from 'redux-saga';
import {
    createStore,
    applyMiddleware,
} from 'redux';

import App from './app/App';
import rootSagas from './roots/rootSagas';
import rootReducer from './roots/rootReducers';
import './index.css';

function initialize() {
    const root = document.getElementById('root');
    const sagaMiddleWare = createSagaMiddleWare();
    const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));

    sagaMiddleWare.run(rootSagas);

    ((window as any).store = store);

    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        root
    );
}

initialize();