/** React **/
import React from 'react';
import ReactDOM from 'react-dom';

/** Firebase **/
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

/** REDUX **/
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';

/** Routing **/
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware, } from 'react-router-redux';

/** App Configuration **/
import config from './config';
import registerServiceWorker from './registerServiceWorker';

import { setUser } from './actions';
import App from './App';
import './index.css';

/** Firebase Setup **/
window._FIREBASE_ = firebase.initializeApp(config.firebase);
firebase.auth().onAuthStateChanged((user) => {
    if(user && user.uid) {
        const userData = {
            uid: user.uid,
            email: user.email,
        };
        store.dispatch(setUser(userData));
    } else {
        store.dispatch(setUser(null));
    }
});

/** Redux Setup **/
const history = createHistory();
const sagaMiddleware = createSagaMiddleware();
const middleware = [
    sagaMiddleware,
    routerMiddleware(history),
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    combineReducers({
        ...reducers,
        router: routerReducer,
    }),
    composeEnhancers(applyMiddleware(...middleware)),
);

sagaMiddleware.run(sagas);

const appProps = {
    history,
    store,
};

/** Launch the App **/
ReactDOM.render(<App {...appProps}  />, document.getElementById('root'));
registerServiceWorker();
