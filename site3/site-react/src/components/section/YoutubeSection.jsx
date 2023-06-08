import React from 'react';
const youtubeTitle = {
  title: '현대 미술 유튜버 추천',
  desc: (
    <p>
      다양한 작품들을 자신의 관점으로 해석하는 영상을 준비했습니다.
      <br />
      구독과 좋아요! 부탁드립니다.
    </p>
  ),
  link: '/',
};
const youtubeItem = [
  {
    img: './assets/images/youtube/youtube01.png',
    title: '유튜브1',
    num: 'dkelkt442',
  },
  {
    img: './assets/images/youtube/youtube02.png',
    title: '유튜브2',
    num: 'dkelkt442',
  },
  {
    img: './assets/images/youtube/youtube03.png',
    title: '유튜브3',
    num: 'dkelkt442',
  },
  {
    img: './assets/images/youtube/youtube04.png',
    title: '유튜브4',
    num: 'dkelkt442',
  },
];

function YoutubeItem({ img, title, num }) {
  return (
    <div>
      <img src={img} alt={title} />
    </div>
  );
}
function YoutubeSection(props) {
  return (
    <section id="youtubeSection" className={props.attr}>
      <div className="youtube__inner container">
        <div className="youtube__text">
          <h3>{youtubeTitle.title}</h3>
          <>{youtubeTitle.desc}</>
          <a href={youtubeTitle.link} className="button-blue">
            자세히 보기
          </a>
        </div>
        <div className="youtube__item">
          {youtubeItem.map((text, index) => (
            <YoutubeItem
              key={index}
              img={text.img}
              title={text.title}
              num={text.num}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
export default YoutubeSection;
