import React from 'react';

function MapServiceSection() {
    return (
        <section id="mapService" className="mapService__wrap noto">
            <div className="mapService__inner container">
                <div className="titleWrap">
                    <h2>매장찾기</h2>
                    <input type="text" className="search__box" placeholder="매장명을 검색해주세요!" />
                    <img className="searchBarBtn" src="/assets/images/map/searchYellow.png" alt="" />
                    <div className="tagWrap">
                        <ul className="tags">
                            <li className="tag">
                                <a href="/">
                                    <h3>24시간</h3>
                                </a>
                            </li>
                            <li className="tag">
                                <a href="/">
                                    <h3>택배</h3>
                                </a>
                            </li>
                            <li className="tag">
                                <a href="/">
                                    <h3>ATM</h3>
                                </a>
                            </li>
                            <li className="tag">
                                <a href="/">
                                    <h3>와인</h3>
                                </a>
                            </li>
                            <li className="tag">
                                <a href="/">
                                    <h3>커피</h3>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="sectionBackground">
                    <img className="mapPaper" src="/assets/images/map/mapPaper.png" alt="지도" />
                    <img className="pin" src="/assets/images/map/mapPin.png" alt="지도" />
                </div>
            </div>
        </section>
    );
}

export default MapServiceSection;
