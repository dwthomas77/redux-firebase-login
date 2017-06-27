import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

import reducers from './reducers'; // Or wherever you keep your reducers

import Home from './components/view/Home';
import Login from './components/controller/Login';

import './App.css';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

console.log('reducers', reducers);

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
    combineReducers({
        ...reducers,
        router: routerReducer
    }),
    applyMiddleware(middleware)
);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
               { /* ConnectedRouter will use the store from Provider automatically */ }
               <ConnectedRouter history={history}>
                   <div>
                       <Route exact path="/" component={Home}/>
                       <Route path="/login" component={Login}/>
                   </div>
               </ConnectedRouter>
            </Provider>
        );
    }
}

export default App;
