import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../src/components/navbar';
import Home from '../src/views/home';
import Footer from '../src/components/footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} exact />
      </Routes>
      <Footer/>
  
    
  </BrowserRouter>
  );
}

export default App;
