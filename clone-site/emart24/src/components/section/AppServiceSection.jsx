import React from 'react';

function AppServiceSection() {
    return (
        <section id="appService" className="appService__wrap noto">
            <div className="appService__inner container">
                {/* <div className="grayBackground"></div> */}
                <div className="appServicePreview">
                    <div className="mockUp">
                        <img src="/assets/images/app/mockUpImg.png" alt="목업이미지" />
                    </div>
                </div>
                <div className="description">
                    <div className="titleWrap">
                        <div className="textTitle">
                            <h2>우주편의점</h2>
                            <h1 className="sectionName">“놀아 버는” 편의점</h1>
                            <h1 className="sectionName">지구에 없던 FUN의점</h1>
                        </div>
                        <div className="textButton">
                            <span className="buttonText">
                                <a href="/">자세히 보기</a>
                            </span>
                            <div className="icon">
                                <a href="/">
                                    <img src="/assets/images/app/more.png" alt="전체보기" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="outLinkWrap">
                        <div className="button">
                            <a href="/" className="goStoreButton">
                                <div className="icon">
                                    <img src="/assets/images/app/downLoadIcon.png" alt="앱스토어이동" />
                                </div>
                                <h1>앱 다운로드</h1>
                            </a>
                        </div>
                        <div className="more"> 이마트24 신규 앱 다운로드 하세요! </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AppServiceSection;
