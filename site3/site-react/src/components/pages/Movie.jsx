import React from 'react';
import Main from '../layout/Main';
import MoviesSection from '../section/MoviesSection.jsx';
function Movie() {
  return (
    <>
      <Main>
        <MoviesSection attr={'movies__wrap section dream5'} />
      </Main>
    </>
  );
}

export default Movie;
