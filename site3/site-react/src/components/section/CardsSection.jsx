import React from 'react';

import { Link } from 'react-router-dom';
const cardTitle = {
  title: '대표 작품 구경하기',
  desc: '각 시대별로 유명했던 작품들을 모아놓았습니다.',
};
const cardText = [
  {
    cardImg: './assets/images/card/card01.jpg',
    iconImg: './assets/images/card/card_icon01.png',
    title: '백일몽',
    desc: '알폰스 무하',
  },
  {
    cardImg: './assets/images/card/card02.jpg',
    iconImg: './assets/images/card/card_icon02.png',
    title: '구성II - 빨강, 파랑 그리고 노랑',
    desc: '피에트 몬드리안',
  },
  {
    cardImg: './assets/images/card/card03.jpg',
    iconImg: './assets/images/card/card_icon03.png',
    title: '별이 빛나는 밤',
    desc: '빈센트 반고흐',
  },
  {
    cardImg: './assets/images/card/card04.jpg',
    iconImg: './assets/images/card/card_icon04.png',
    title: 'KISS',
    desc: '구스타프 클림트',
  },
  {
    cardImg: './assets/images/card/card05.jpg',
    iconImg: './assets/images/card/card_icon05.png',
    title: 'Ophelia',
    desc: '존 에버렛 밀레이',
  },
  {
    cardImg: './assets/images/card/card06.jpg',
    iconImg: './assets/images/card/card_icon06.png',
    title: '꿈(La rve)',
    desc: '파블로 피카소',
  },
];

function CardText({ cardImg, iconImg, title, desc }) {
  return (
    <div className="card">
      <figure className="card__header">
        <img src={cardImg} alt={title} />
      </figure>
      <div className="card__body">
        <span>
          <img src={iconImg} alt={desc} />
        </span>
        <div>
          <h4>{title}</h4>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}
function CardsSection(props) {
  return (
    <section id="cardsSection" className={props.attr}>
      <h3>{cardTitle.title}</h3>
      <p>{cardTitle.desc}</p>
      <div className="cards__inner container">
        <div className="cards__btn">
          <ul>
            <li className="active">
              <Link to="/">1880년대</Link>
            </li>
            <li>
              <Link to="/">1920년대</Link>
            </li>
            <li>
              <Link to="/">1940년대</Link>
            </li>
            <li>
              <Link to="/">1960년대</Link>
            </li>
          </ul>
        </div>
        <div className="cards__conts">
          {cardText.map((text, index) => (
            <CardText
              key={index}
              cardImg={text.cardImg}
              iconImg={text.iconImg}
              title={text.title}
              desc={text.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
export default CardsSection;
