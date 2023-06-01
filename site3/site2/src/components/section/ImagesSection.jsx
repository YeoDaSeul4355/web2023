function ImagesSection(props) {
  return (
    <section id="imagesSection" className={props.attr}>
      <h3>근대 미술 대표 화가</h3>
      <p>근•현대 미술의 유명한 대표 화가들을 소개합니다.</p>
      <div className="images__inner container">
        <div className="member">
          <figure className="images__header">
            <img src="./assets/images/image/artist01.png" alt="카드1" />
          </figure>
          <div className="images__body">
            <h4>알폰스 무하</h4>
            <a href="@" className="btn">
              작품 보기
            </a>
          </div>
        </div>
        <div className="member">
          <figure className="images__header">
            <img src="./assets/images/image/artist02.png" alt="카드1" />
          </figure>
          <div className="images__body">
            <h4>마르크 샤갈</h4>
            <a href="@" className="btn">
              작품 보기
            </a>
          </div>
        </div>
        <div className="member">
          <figure className="images__header">
            <img src="./assets/images/image/artist03.png" alt="카드1" />
          </figure>
          <div className="images__body">
            <h4>살바도르 달리</h4>
            <a href="@" className="btn">
              작품 보기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ImagesSection;
