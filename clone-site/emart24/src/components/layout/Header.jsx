function Header() {
    return (
        <header id="header" className="header__wrap noto" role="heading" aria-level="1">
            <div className="header__inner container">
                <h1 className="header__logo">
                    <a href="/">
                        <img src="/assets/images/header/logo.png" alt="로고" />
                    </a>
                </h1>
                <div className="header__nav" role="navigation">
                    <ul>
                        <li>
                            <a href="/">상품</a>
                            <ul className="submenu">
                                <li>
                                    <a href="/">행사 상품</a>
                                </li>
                                <li>
                                    <a href="/">차별화 상품</a>
                                </li>
                                <li>
                                    <a href="/">Fresh Food</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="/">매장찾기</a>
                            <ul className="submenu">
                                <li>
                                    <a href="/">매장찾기</a>
                                </li>
                                <li>
                                    <a href="/">3D 매장 체험</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="/">서비스</a>
                            <ul className="submenu">
                                <li>
                                    <a href="/">APP 서비스</a>
                                </li>
                                <li>
                                    <a href="/">생활 서비스</a>
                                </li>
                                <li>
                                    <a href="/">제휴 서비스</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="/">이벤트</a>
                            <ul className="submenu">
                                <li>
                                    <a href="/">진행중인 이벤트</a>
                                </li>
                                <li>
                                    <a href="/">종료된 이벤트</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="/">창업안내</a>
                            <ul className="submenu">
                                <li>
                                    <a href="/">이마트24 특징</a>
                                </li>
                                <li>
                                    <a href="/">창업 가이드</a>
                                </li>
                                <li>
                                    <a href="/">창업 설명회</a>
                                </li>
                                <li>
                                    <a href="/">창업 성공기</a>
                                </li>
                                <li>
                                    <a href="/">창업 상담</a>
                                </li>
                                <li>
                                    <a href="/">추천 매장 소개</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
export default Header;
