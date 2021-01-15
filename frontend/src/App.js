import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { Bestsellers } from './components/Bestsellers';
import { Footer } from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">

        <Header />
        <Banner />
        <Bestsellers />
        <Footer />


      </div>
    </Router>
  );
}

export default App;
