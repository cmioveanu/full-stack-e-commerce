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
  const [total, setTotal] = useState(0);

  //cart methods
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
    if (product.quantity === 1) {
      setCart(cart => cart.filter(item => item.id !== product.id));
    }
    else {
      const newCart = [...cart];
      const productIndex = newCart.indexOf(product);
      newCart[productIndex].quantity--;
      setCart(newCart);
    }
  }

  const removeAllFromCart = (product) => {
    const amountToRemove = product.quantity * product.unit_price;
    total - amountToRemove <= 0 ? setTotal(0) : setTotal(oldTotal => oldTotal - amountToRemove);

    setCart(cart => cart.filter(item => item.id !== product.id));
  }

  const showCart = () => {
    const cartContainer = document.querySelector('.cart');
    cartContainer.style.className == 'isShown'
      ? cartContainer.style.className = 'isHidden'
      : cartContainer.style.className = 'isSHown';
  }

  const addToTotal = (amount) => {
    console.log("adding to total..");
    setTotal(old => old + parseFloat(amount));
  }

  const removeFromTotal = (amount) => {
    console.log("removing from total..");
    total - amount <= 0 ? setTotal(0) : setTotal(oldTotal => oldTotal - parseFloat(amount));
  }

  const showHideCart = () => {
    const cart = document.querySelector('#cart');
    if(cart.style.minWidth !== '300px') {
      cart.style.minWidth = '300px';
      cart.style.padding = '3rem';
    } else {
      cart.style.minWidth = '0';
      cart.style.padding = '0';
    }
  }

  

  return (
    <Router>
      <div className="App">
        <Header removeFromCart={removeFromCart}
            showHideCart={showHideCart}
            cart={cart}/>
        <Cart cart={cart}
          showCart={showCart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          addToTotal={addToTotal}
          removeFromTotal={removeFromTotal}
          total={total}
          removeAllFromCart={removeAllFromCart}
        />

        <Switch>
          <Route exact path="/">
            <BannerWatches />
            <Bestsellers addToCart={addToCart}
              addToTotal={addToTotal}
            />
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
