import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom'
import Cart from './containers/cart/Cart'
import Home from './containers/home/Home'
import Header from './components/_header/Header'

function Router() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/cart">
                    <Cart />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
