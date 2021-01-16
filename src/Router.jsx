import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import Cart from './components/Cart/Cart';
import CartPage from './CartPage';
import Home from './containers/home/Home';
import Header from './components/Header/Header';

function Router({
    addItem,
    cartItems,
    removeItem,
    substractItem,
    get,
}) {
    return (
        <BrowserRouter>
            <Header />
            <Cart
                cartItems={cartItems}
                removeItem={removeItem}
                addItem={addItem}
                substractItem={substractItem}
            />
            <Switch>
                <Route path="/cart">
                    <CartPage
                        cartItems={cartItems}
                        removeItem={removeItem}
                        addItem={addItem}
                        substractItem={substractItem}
                    />
                </Route>
                <Route path="/">
                    <Home addItem={addItem} getItem={get} substractItem={substractItem} />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
