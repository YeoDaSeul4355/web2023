import React from 'react';

import { Link } from 'react-router-dom';
const movieTitle = {
  title: '예술인들을 위한 추천 영화',
  desc: (
    <p>
      영화를 통해 미술과 작가를 만나보아요.
      <br />
      작품에 대한 시대적 배경을 알 수 있습니다!
    </p>
  ),
  link: '/',
};

const movieItem = [
  {
    img: './assets/images/movies/movies01.png',
    title: '러빙 빈센트',
  },
  {
    img: './assets/images/movies/movies02.png',
    title: '따뜻한 색 블루',
  },
  {
    img: './assets/images/movies/movies03.png',
    title: '진주 귀걸이를 한 소녀',
  },
  {
    img: './assets/images/movies/movies04.png',
    title: '파울라',
  },
  {
    img: './assets/images/movies/movies05.png',
    title: '내 사랑',
  },
  {
    img: './assets/images/movies/movies06.png',
    title: '프라다',
  },
];

function MovieItem({ img, title }) {
  return (
    <div>
      <img src={img} alt={title} />
    </div>
  );
}
function MoviesSection(props) {
  return (
    <section id="moviesSection" className={props.attr}>
      <div className="movies__inner container">
        <div className="movies__text">
          <h3>{movieTitle.title}</h3>
          <>{movieTitle.desc}</>
          <Link to={movieTitle.link} className="button-green">
            자세히 보기
          </Link>
        </div>
        <div className="movies__item">
          {movieItem.map((text, index) => (
            <MovieItem key={index} img={text.img} alt={text.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default MoviesSection;
