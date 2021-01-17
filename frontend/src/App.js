import logo from './logo.svg';
import './App.css';

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

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/">
            <BannerWatches />
            <Bestsellers />
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
