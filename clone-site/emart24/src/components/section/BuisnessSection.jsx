import React from 'react';

function BuisnessSection() {
    return (
        <section id="buisness" className="buisness__wrap section noto">
            <div class="yellowBackground"></div>
            <div className="buisness__inner container">
                <div className="titleWrap">
                    <h3>창업 안내</h3>
                    <p>창업 안내 이마트24의 스마트한 창업설계를 받아보세요.</p>
                </div>
                <div className="contentWrap">
                    <ul>
                        <li>
                            <a href="/" class="contWrap">
                                <div class="description">
                                    <div class="title">
                                        <h1>창업 가이드</h1>
                                        <div class="iconWrap">
                                            <img src="/assets/images/buisness/circleArrows.png" alt="바로가기" />
                                        </div>
                                    </div>
                                    <h2 class="caption">
                                        이마트24는 경영주님과
                                        <br />
                                        협력적 가치를 공유합니다.
                                    </h2>
                                </div>
                            </a>
                            <a href="/" class="icon3dWrap">
                                <div class="icon">
                                    <img src="/assets/images/buisness/idea.png" alt="" />
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/" class="contWrap">
                                <div class="description">
                                    <div class="title">
                                        <h1>창업 설명회</h1>
                                        <div class="iconWrap">
                                            <img src="/assets/images/buisness/circleArrows.png" alt="바로가기" />
                                        </div>
                                    </div>
                                    <h2 class="caption">
                                        경영주와 함께 하는
                                        <br />
                                        창업 설명회를 신청하세요.
                                    </h2>
                                </div>
                            </a>
                            <a href="/" class="icon3dWrap">
                                <div class="icon">
                                    <img class="calender" src="/assets/images/buisness/calender3d.png" alt="" />
                                    {/* <img class="coins" src="/assets/images/buisness/calenderCoins3d.png" alt="" />
                                    <img class="coin" src="/assets/images/buisness/calenderCoin3d.png" alt="" /> */}
                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="/" class="contWrap">
                                <div class="description">
                                    <div class="title">
                                        <h1>창업 상담</h1>
                                        <div class="iconWrap">
                                            <img src="/assets/images/buisness/circleArrows.png" alt="바로가기" />
                                        </div>
                                    </div>
                                    <h2 class="caption">
                                        창업 전문 컨설턴트의
                                        <br />
                                        상담을 받아보세요.
                                    </h2>
                                </div>
                            </a>
                            <a href="/" class="icon3dWrap">
                                <div class="icon">
                                    <img src="/assets/images/buisness/chatBubble.png" alt="" />
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default BuisnessSection;
