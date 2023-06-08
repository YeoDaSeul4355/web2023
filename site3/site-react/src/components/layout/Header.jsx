import React from 'react';

import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header id="header" className={props.attr} role="heading" aria-level="1">
      <div className="header__inner container">
        <h1 className="header__logo">
          <Link to="/">
            MORDERN <em>art</em>
          </Link>
        </h1>
        <div className="header__nav" role="navigation">
          <ul>
            <li>
              <Link to="/image">대표 화가</Link>
            </li>
            <li>
              <Link to="/card">유명 작품</Link>
            </li>
            <li>
              <Link to="/youtube">유튜브</Link>
            </li>
            <li>
              <Link to="/unsplash">이미지</Link>
            </li>
            <li>
              <Link to="/movie">영화</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
export default Header;
