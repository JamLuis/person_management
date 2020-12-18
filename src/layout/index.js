import React, { Component } from 'react'
import { Provider } from 'react-redux';
import Login from './temp_component/login';
import configStore from './store';
import Reducers from './reducers_temp';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { renderRoutes } from 'react-router-config';
import Home from './temp_component/home';
import Child from './temp_component/child';

class Layout extends Component {

    getRouter = () => {
        const routes = [
            {
                path: '/',
                component: Home,
                routes: [
                    {
                        path: '/child',
                        component: Child
                    }, 
                    {
                        path: '/login',
                        component: Login
                    }
                ]
            }

        ]

        return routes;
    }

    render() {
        const history = createBrowserHistory();
        const store = configStore(Reducers);
        const route = this.getRouter();
        return (
            <Provider store={store}>
                <BrowserRouter history={history}>
                    {renderRoutes(route)}
                </BrowserRouter>
            </Provider>
        )
    }
}
export default Layout