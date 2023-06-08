import React from 'react';
const unsplashTitle = {
  title: '작품 이미지 다운로드',
  desc: (
    <p>
      유명 화가들의 작품들을 고화질로 다운로드 받을 수 있습니다.
      <br />
      상업적 이용은 피해주세요!
    </p>
  ),
  link: '/',
};
const unsplashItem = [
  {
    img: './assets/images/unsplash/unsplash01.png',
    alt: 'unsplashIMG1',
  },
  {
    img: './assets/images/unsplash/unsplash02.png',
    alt: 'unsplashIMG2',
  },
  {
    img: './assets/images/unsplash/unsplash03.png',
    alt: 'unsplashIMG3',
  },
  {
    img: './assets/images/unsplash/unsplash04.png',
    alt: 'unsplashIMG4',
  },
];
function UnsplashItem({ img, alt }) {
  return (
    <div>
      <img src={img} alt={alt} />
    </div>
  );
}
function UnsplashSection(props) {
  return (
    <section id="unsplashSection" className={props.attr}>
      <div className="unsplash__inner container">
        <div className="unsplash__text">
          <h3>{unsplashTitle.title}</h3>
          <>{unsplashTitle.desc}</>
          <a href={unsplashTitle.link} className="button-yellow">
            자세히 보기
          </a>
        </div>
        <div className="unsplash__item">
          {unsplashItem.map((text, index) => (
            <UnsplashItem key={index} img={text.img} alt={text.alt} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default UnsplashSection;
