import React from 'react';

function OnlyEmartSection() {
    return (
        <section id="onlyEmart" className="onlyEmart__wrap section noto">
            <div className="onlyEmart__inner container">
                <div className="titleWrap">
                    <div className="title">
                        <h3>ONLY 이마트24</h3>
                        <p>이마트24에서만 있는 차별화 상품을 만나보세요.</p>
                    </div>
                </div>
                <div className="contentWrap">
                    <ul>
                        <li>
                            <a href="/">
                                <div class="imgWrap">
                                    <img src="https://www.emart24.co.kr/image/Njg=" alt="아임이" />
                                </div>
                                <div class="desc">
                                    <div class="pbLogo">
                                        <img src="https://www.emart24.co.kr/image/Mjg2NQ==" />
                                    </div>
                                    <h2 class="pbName">아임이</h2>
                                    <p>사는 맛, 딱 한 방울</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <div class="imgWrap">
                                    <img src="https://www.emart24.co.kr/image/NzI=" alt="Fresh Food" />
                                </div>
                                <div class="desc">
                                    <div class="pbLogo">
                                        <img src="https://www.emart24.co.kr/image/Mjg2NA==" />
                                    </div>
                                    <h2 class="pbName">Fresh Food</h2>
                                    <p>차별화 된 이마트24 Fresh Food</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <div class="imgWrap">
                                    <img src="https://www.emart24.co.kr/image/Mjg2MTg=" alt="김토끼 스튜됴" />
                                </div>
                                <div class="desc">
                                    <div class="pbLogo">
                                        <img src="https://www.emart24.co.kr/image/Mjg2Mw==" />
                                    </div>
                                    <h2 class="pbName">김토끼 스튜됴</h2>
                                    <p>
                                        2023년 토끼해를 맞이 하여,
                                        <br />
                                        김토끼 콜라보
                                    </p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default OnlyEmartSection;
