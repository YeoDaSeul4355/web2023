import React from 'react';
import Main from '../layout/Main';

import SliderSection from '../section/SliderSection.jsx';
import IntroSection from '../section/IntroSection.jsx';
import ImagesSection from '../section/ImagesSection.jsx';
import CardsSection from '../section/CardsSection.jsx';
import YoutubeSection from '../section/YoutubeSection.jsx';
import UnsplashSection from '../section/UnsplashSection.jsx';
import MoviesSection from '../section/MoviesSection.jsx';

function Home() {
  return (
    <>
      <Main>
        <SliderSection attr={'slider__wrap section dream5'} />
        <IntroSection attr={'intro__wrap section bg-blue dream5'} />
        <ImagesSection attr={'images__wrap section center dream5'} />
        <CardsSection attr={'cards__wrap section center bg-blue dream5'} />
        <YoutubeSection attr={'youtube__wrap section dream5'} />
        <UnsplashSection attr={'unsplash__wrap section bg-blue dream5'} />
        <MoviesSection attr={'movies__wrap section dream5'} />
      </Main>
    </>
  );
}

export default Home;
