import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/pages/Main';
import Image from './components/pages/Image';
import Card from './components/pages/Card';
import Youtube from './components/pages/Youtube';
import Unsplash from './components/pages/Unsplash';
import Movie from './components/pages/Movie';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/image" element={<Image />}></Route>
        <Route path="/card" element={<Card />}></Route>
        <Route path="/youtube" element={<Youtube />}></Route>
        <Route path="/unsplash" element={<Unsplash />}></Route>
        <Route path="/movie" element={<Movie />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
