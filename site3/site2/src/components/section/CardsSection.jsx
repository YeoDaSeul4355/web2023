function CardsSection(props) {
  return (
    <section id="cardsSection" className={props.attr}>
      <h3>대표 작품 구경하기</h3>
      <p>각 시대별로 유명했던 작품들을 모아놓았습니다.</p>
      <div className="cards__inner container">
        <div className="cards__btn">
          <ul>
            <li className="active">
              <a href="/">1880년대</a>
            </li>
            <li>
              <a href="/">1920년대</a>
            </li>
            <li>
              <a href="/">1940년대</a>
            </li>
            <li>
              <a href="/">1960년대</a>
            </li>
          </ul>
        </div>
        <div className="cards__conts">
          <div className="card">
            <figure className="card__header">
              <img src="./assets/images/card/card01.jpg" alt="백일몽" />
            </figure>
            <div className="card__body">
              <span>
                <img src="./assets/images/card/card_icon01.png" alt="알폰스 무하" />
              </span>
              <div>
                <h4>백일몽</h4>
                <p>알폰스 무하</p>
              </div>
            </div>
          </div>
          <div className="card">
            <figure className="card__header">
              <img src="./assets/images/card/card02.jpg" alt="빨강, 파랑 그리고 노랑" />
            </figure>
            <div className="card__body">
              <span>
                <img src="./assets/images/card/card_icon02.png" alt="피에트 몬드리안" />
              </span>
              <div>
                <h4>구성II - 빨강, 파랑 그리고 노랑</h4>
                <p>피에트 몬드리안</p>
              </div>
            </div>
          </div>
          <div className="card">
            <figure className="card__header">
              <img src="./assets/images/card/card03.jpg" alt="별이 빛나는 밤" />
            </figure>
            <div className="card__body">
              <span>
                <img src="./assets/images/card/card_icon03.png" alt="빈센트 반고흐" />
              </span>
              <div>
                <h4>별이 빛나는 밤</h4>
                <p>빈센트 반고흐</p>
              </div>
            </div>
          </div>
          <div className="card">
            <figure className="card__header">
              <img src="./assets/images/card/card04.jpg" alt="KISS" />
            </figure>
            <div className="card__body">
              <span>
                <img src="./assets/images/card/card_icon04.png" alt="구스타프 클림트" />
              </span>
              <div>
                <h4>KISS</h4>
                <p>구스타프 클림트</p>
              </div>
            </div>
          </div>
          <div className="card">
            <figure className="card__header">
              <img src="./assets/images/card/card05.jpg" alt="Ophelia" />
            </figure>
            <div className="card__body">
              <span>
                <img src="./assets/images/card/card_icon05.png" alt="존 에버렛 밀레이" />
              </span>
              <div>
                <h4>Ophelia</h4>
                <p>존 에버렛 밀레이</p>
              </div>
            </div>
          </div>
          <div className="card">
            <figure className="card__header">
              <img src="./assets/images/card/card06.jpg" alt="꿈(La rve)" />
            </figure>
            <div className="card__body">
              <span>
                <img src="./assets/images/card/card_icon06.png" alt="파블로 피카소" />
              </span>
              <div>
                <h4>꿈(La rve)</h4>
                <p>파블로 피카소</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default CardsSection;
