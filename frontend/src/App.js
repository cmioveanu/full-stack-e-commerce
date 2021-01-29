import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Header } from './components/Header';
import { BannerWatches } from './components/BannerWatches';
import { BannerSunglasses } from './components/BannerSunglasses';
import { Bestsellers } from './components/Bestsellers';
import { Footer } from './components/Footer';
import { Login } from './components/Login';
import { Account } from './components/Account';
import { Cart } from './components/Cart';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const productIndex = cart.indexOf(product);
    if (productIndex == -1) {
      product.quantity = 1;
      setCart([...cart, product]);
      return;
    }
    else {
      const newCart = [...cart];
      
      const newProduct = newCart[productIndex];
      newProduct.quantity++;

      newCart.slice(productIndex)
      setCart(newCart);
    }
  }



  const removeFromCart = (product) => {
    setCart(cart => cart.filter(item => item.id === product.id));
  }

  const showCart = () => {
    const cartContainer = document.querySelector('.cart');
    cartContainer.style.className == 'isShown'
      ? cartContainer.style.className = 'isHidden'
      : cartContainer.style.className = 'isSHown';
  }

  return (
    <Router>
      <div className="App">
        <Header removeFromCart={removeFromCart} />
        <Cart cart={cart}
          showCart={showCart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />

        <Switch>
          <Route exact path="/">
            <BannerWatches />
            <Bestsellers addToCart={addToCart} />
            <BannerSunglasses />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
