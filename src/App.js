/** REACT **/
import React, { Component } from 'react';
/** ROUTER **/
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
/** REDUX **/
import { Provider } from 'react-redux';
/** APP **/
import AuthorizedRoute from 'controllers/Route';
import Authorized from 'components/Authorized';
import Home from 'components/Home';
import UserAuth from 'controllers/UserAuth';
import PasswordReset from 'controllers/PasswordReset';
import PasswordChange from 'controllers/PasswordChange';
import Navigation from 'controllers/Navigation';
import 'normalize.css';
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
                            <Route path="/user/" component={UserAuth} />
                            <Route path="/user/change" component={PasswordChange} />
                            <Route path="/user/reset" component={PasswordReset} />
                            <AuthorizedRoute path="/authorized" component={Authorized} />
                            <Route path="/reset-password" component={PasswordReset} />
                        </Switch>
                    </div>
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default App;
