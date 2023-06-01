function Header(props) {
  return (
    <header id="header" className={props.attr} role="heading" aria-level="1">
      <div className="header__inner container">
        <h1 className="header__logo">
          <a href="/">
            MORDERN <em>art</em>
          </a>
        </h1>
        <div className="header__nav" role="navigation">
          <ul>
            <li>
              <a href="#introSection">소개</a>
            </li>
            <li>
              <a href="#imagesSection">대표 화가</a>
            </li>
            <li>
              <a href="#cardsSection">유명 작품</a>
            </li>
            <li>
              <a href="#youtubeSection">유튜브</a>
            </li>
            <li>
              <a href="#unsplashSection">이미지</a>
            </li>
            <li>
              <a href="#moviesSection">영화</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
export default Header;
