import React from 'react';
import Main from '../layout/Main';
import CardsSection from '../section/CardsSection.jsx';
function Card() {
  return (
    <>
      <Main>
        <CardsSection attr={'cards__wrap section center bg-blue dream5'} />
      </Main>
    </>
  );
}

export default Card;
