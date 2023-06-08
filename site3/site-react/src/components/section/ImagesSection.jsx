import React from 'react';

import { Link } from 'react-router-dom';
const imageTitle = {
  title: '근대 미술 대표 화가',
  desc: '근•현대 미술의 유명한 대표 화가들을 소개합니다.',
};
const imageText = [
  {
    image: '../assets/images/image/artist01.png',
    title: '알폰스 무하',
    link: '/',
  },
  {
    image: '../assets/images/image/artist02.png',
    title: '마르크 샤갈',
    link: '/',
  },
  {
    image: '../assets/images/image/artist03.png',
    title: '살바도르 달리',
    link: '/',
  },
];

function ImageText({ image, title, link }) {
  return (
    <div className="member">
      <figure className="images__header">
        <img src={image} alt={title} />
      </figure>
      <div className="images__body">
        <h4>{title}</h4>
        <Link to={link} className="btn">
          작품 보기
        </Link>
      </div>
    </div>
  );
}

function ImagesSection(props) {
  return (
    <section id="imagesSection" className={props.attr}>
      <h3>{imageTitle.title}</h3>
      <p>{imageTitle.desc}</p>
      <div className="images__inner container">
        {imageText.map((text, index) => (
          <ImageText
            key={index}
            image={text.image}
            title={text.title}
            link={text.link}
          />
        ))}
      </div>
    </section>
  );
}
export default ImagesSection;
