import React from 'react';
import Header from './components/layout/Header.jsx';
import Main from './components/layout/Main.jsx';
import Footer from './components/layout/Footer.jsx';

import SliderSection from './components/section/SliderSection.jsx';
import IntroSection from './components/section/IntroSection.jsx';
import ImagesSection from './components/section/ImagesSection.jsx';
import CardsSection from './components/section/CardsSection.jsx';
import YoutubeSection from './components/section/YoutubeSection.jsx';
import UnsplashSection from './components/section/UnsplashSection.jsx';
import MoviesSection from './components/section/MoviesSection.jsx';

function App() {
  return (
    <>
      <Header attr={'header__wrap dream5 bg-blue'} />
      <Main>
        <SliderSection attr={'slider__wrap section dream5'} />
        <IntroSection attr={'intro__wrap section bg-blue dream5'} />
        <ImagesSection attr={'images__wrap section center dream5'} />
        <CardsSection attr={'cards__wrap section center bg-blue dream5'} />
        <YoutubeSection attr={'youtube__wrap section dream5'} />
        <UnsplashSection attr={'unsplash__wrap section bg-blue dream5'} />
        <MoviesSection attr={'movies__wrap section dream5'} />
      </Main>
      <Footer attr={'footer__wrap section bg-blue dream5'} />
    </>
  );
}

export default App;
