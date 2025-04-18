import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProductPage from "./pages/ProductPage"; // kommt später

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
// src/pages/ProductPage.js
export default function ProductPage() {
  return <h2>Product Page – coming soon!</h2>;
}
<Route path="/products" element={<ProductPage />} />

import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}
