import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import Nav from './components/Nav';
import HomePage from './Pages/Home';
// import Home from './components/StockList';
import Details from './components/Details';
import Price from './Pages/Prices';
import Footer from './components/Bas';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="details" element={<Details />} />
        <Route path="price" element={<Price />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
