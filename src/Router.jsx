import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom'
import Cart from './containers/cart/Cart'
import Home from './containers/home/Home'
import Header from './components/header/Header'

function Router({ products }) {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/cart">
                    <Cart />
                </Route>
                <Route path="/">
                    <Home products={products} />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
