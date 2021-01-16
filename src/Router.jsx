import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import Cart from './components/cart/Cart';
import CartPage from './containers/cart/Cart';
import Home from './containers/home/Home';
import Header from './components/header/Header';

function Router() {
    return (
        <BrowserRouter>
            <Header />
            <Cart />
            <Switch>
                <Route path="/cart">
                    <CartPage />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
