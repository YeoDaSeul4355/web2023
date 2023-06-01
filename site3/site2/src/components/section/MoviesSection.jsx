function MoviesSection(props) {
  return (
    <section id="moviesSection" className={props.attr}>
      <div className="movies__inner container">
        <div className="movies__text">
          <h3>예술인들을 위한 추천 영화</h3>
          <p>
            영화를 통해 미술과 작가를 만나보아요.
            <br />
            작품에 대한 시대적 배경을 알 수 있습니다!
          </p>
          <a href="/" className="button-green">
            바로가기
          </a>
        </div>
        <div className="movies__item">
          <div>
            <img src="./assets/images/movies/movies01.png" alt="영화포스터" />
          </div>
          <div>
            <img src="./assets/images/movies/movies02.png" alt="영화포스터" />
          </div>
          <div>
            <img src="./assets/images/movies/movies03.png" alt="영화포스터" />
          </div>
          <div>
            <img src="./assets/images/movies/movies04.png" alt="영화포스터" />
          </div>
          <div>
            <img src="./assets/images/movies/movies05.png" alt="영화포스터" />
          </div>
          <div>
            <img src="./assets/images/movies/movies06.png" alt="영화포스터" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default MoviesSection;
