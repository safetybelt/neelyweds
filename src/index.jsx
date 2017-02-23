import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import reducers from 'reducers';
import { combineReducers } from 'redux';
import createLogger from 'redux-logger';
import { Router, Route, browserHistory } from 'react-router';
import App from './app';
import routes from './routes';

const initialMiddleware = [createLogger({})];

const store = createStore(combineReducers(reducers), compose(applyMiddleware(...initialMiddleware)));

function getContainer(component) {
    return (
        <AppContainer>
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route component={component}>
                        {routes.map((route) => <Route key={route.path} path={route.path} component={route.component} />)}
                    </Route>
                </Router>
            </Provider>
        </AppContainer>
    );
}

render(getContainer(App), document.querySelector("#app"));

if (module.hot) {
    module.hot.accept('./app', () => {
        const App = require('./app').default;
        render(getContainer(App), document.querySelector("#app"));
    });
}
