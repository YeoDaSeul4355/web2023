function YoutubeSection(props) {
  return (
    <section id="youtubeSection" className={props.attr}>
      <div className="youtube__inner container">
        <div className="youtube__text">
          <h3>현대 미술 유튜버 추천</h3>
          <p>
            다양한 작품들을 자신의 관점으로 해석하는 영상을 준비했습니다.
            <br />
            구독과 좋아요! 부탁드립니다.
          </p>
          <a href="/" className="button-blue">
            자세히 보기
          </a>
        </div>
        <div className="youtube__item">
          <div>
            <img src="./assets/images/youtube/youtube01.png" alt="유튜브" />
          </div>
          <div>
            <img src="./assets/images/youtube/youtube02.png" alt="유튜브" />
          </div>
          <div>
            <img src="./assets/images/youtube/youtube03.png" alt="유튜브" />
          </div>
          <div>
            <img src="./assets/images/youtube/youtube04.png" alt="유튜브" />
          </div>
          <div>
            <img src="./assets/images/youtube/youtube05.png" alt="유튜브" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default YoutubeSection;
