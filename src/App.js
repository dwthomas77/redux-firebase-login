/** REACT **/
import React, { Component } from 'react';
/** ROUTER **/
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
/** REDUX **/
import { Provider } from 'react-redux';
/** APP **/
import AuthorizedRoute from './components/controller/Common/Route';
import Authorized from './components/view/Authorized';
import Home from './components/view/Home';
import Login from './components/controller/Login';
import Navigation from './components/view/Common/Navigation';
import './App.css';


class App extends Component {
    render() {
        const { store, history } = this.props;
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
