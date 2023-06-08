import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import Image from './components/pages/Image';
import Card from './components/pages/Card';
import Youtube from './components/pages/Youtube';
import Unsplash from './components/pages/Unsplash';
import Movie from './components/pages/Movie';

function App() {
  return (
    <BrowserRouter>
      <Header attr={'header__wrap dream5 bg-blue'} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/image" element={<Image />}></Route>
        <Route path="/card" element={<Card />}></Route>
        <Route path="/youtube" element={<Youtube />}></Route>
        <Route path="/unsplash" element={<Unsplash />}></Route>
        <Route path="/movie" element={<Movie />}></Route>
      </Routes>
      <Footer attr={'footer__wrap section bg-blue dream5'} />
    </BrowserRouter>
  );
}

export default App;
