function EventItemSection() {
    return (
        <section id="event" className="event__wrap section noto">
            <div className="eventItem__inner container">
                <div className="titleWrap">
                    <div className="title mb30">
                        <h2 className="eventTitle noto7">6월 행사 상품</h2>
                        <div class="buttonWrap">
                            <a href="/" class="textButton">
                                <span class="buttonText">전체보기</span>
                                <div class="icon">
                                    <img src="/assets/images/event/more.png" alt="전체보기" />
                                </div>
                            </a>
                        </div>
                    </div>

                    <ul class="categories">
                        <li class="category active">
                            <div class="icon onePOneIcon">
                                <img class="onePOne" src="/assets/images/event/onePOne.png" alt="1+1" />
                            </div>
                            <h2>1+1</h2>
                            <div class="iconGo">
                                <img src="/assets/images/event/arrowNext.png" alt="1+1이동" />
                            </div>
                            <div class="categoriedBackground"></div>
                        </li>
                        <li class="category">
                            <div class="icon twoPOneIcon">
                                <img class="twoPOne" src="/assets/images/event/twoPTwo.png" alt="2+1" />
                            </div>
                            <h2>2+1</h2>
                            <div class="iconGo">
                                <img src="/assets/images/event/arrowNext.png" alt="2+1이동" />
                            </div>
                            <div class="categoriedBackground"></div>
                        </li>
                        <li class="category">
                            <div class="icon newIcon">
                                <img class="new" src="/assets/images/event/new.png" alt="신상품" />
                            </div>
                            <h2>신상품</h2>
                            <div class="iconGo">
                                <img src="/assets/images/event/arrowNext.png" alt="신상품이동" />
                            </div>
                            <div class="categoriedBackground"></div>
                        </li>
                    </ul>
                </div>
                <div className="contentWrap">
                    <div className="productWrap">
                        <div className="onePoneProduct">
                            <div className="product">
                                <a href="/">
                                    <div className="eventProductImg">
                                        <img src="/assets/images/event/eventImg01.png" alt="" />
                                    </div>
                                    <h4>풀무원: 액티비아</h4>
                                    <p>1,500원</p>
                                </a>
                            </div>
                            <div className="product">
                                <a href="/">
                                    <div className="eventProductImg">
                                        <img src="/assets/images/event/eventImg02.png" alt="" />
                                    </div>
                                    <h4>빙그레: 초코타임</h4>
                                    <p>2,000원</p>
                                </a>
                            </div>
                            <div className="product">
                                <a href="/">
                                    <div className="eventProductImg">
                                        <img src="/assets/images/event/eventImg03.png" alt="" />
                                    </div>
                                    <h4>남양: 빅토리아 탄산수</h4>
                                    <p>1,300원</p>
                                </a>
                            </div>
                            <div className="product">
                                <a href="/">
                                    <div className="eventProductImg">
                                        <img src="/assets/images/event/eventImg04.png" alt="" />
                                    </div>
                                    <h4>자연은: 말린 제로</h4>
                                    <p>2,300원</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default EventItemSection;
