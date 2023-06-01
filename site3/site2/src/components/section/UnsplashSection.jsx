function UnsplashSection(props) {
  return (
    <section id="unsplashSection" className={props.attr}>
      <div className="unsplash__inner container">
        <div className="unsplash__text">
          <h3>작품 이미지 다운로드</h3>
          <p>
            유명 화가들의 작품들을 고화질로 다운로드 받을 수 있습니다.
            <br />
            상업적 이용은 피해주세요!
          </p>
          <a href="/" className="button-yellow">
            바로가기
          </a>
        </div>
        <div className="unsplash__item">
          <div>
            <img src="./assets/images/unsplash/unsplash01.png" alt="unsplashIMG" />
          </div>
          <div>
            <img src="./assets/images/unsplash/unsplash02.png" alt="unsplashIMG" />
          </div>
          <div>
            <img src="./assets/images/unsplash/unsplash03.png" alt="unsplashIMG" />
          </div>
          <div>
            <img src="./assets/images/unsplash/unsplash04.png" alt="unsplashIMG" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default UnsplashSection;
