/** REACT **/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
/** FIREBASE **/
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
/** REDUX **/
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
/** ROUTER **/
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory'
/** OTHER STUFF **/
import config from './config';
import reducers from './reducers';
import sagas from './sagas';
import { setCurrentUser } from './actions';
import AuthorizedRoute from './components/controller/Common/Route';
import Authorized from './components/view/Authorized';
import Home from './components/view/Home';
import Login from './components/controller/Login';
import Navigation from './components/view/Common/Navigation';
import './App.css';

/** Redux Setup **/
const history = createHistory();
const sagaMiddleware = createSagaMiddleware();
const middleware = [
    sagaMiddleware,
    routerMiddleware(history),
];
const store = createStore(
    combineReducers({
        ...reducers,
        router: routerReducer,
    }),
    applyMiddleware(...middleware)
);
sagaMiddleware.run(sagas);

/** Firebase Setup **/
firebase.initializeApp(config.firebase);
firebase.auth().onAuthStateChanged(function(user) { store.dispatch(setCurrentUser(user)) });

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <div className="app">
                        <Navigation />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/login" component={Login} />
                            <AuthorizedRoute path="/authorized" component={Authorized} />
                        </Switch>
                    </div>
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default App;
