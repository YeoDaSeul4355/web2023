function IntroSection(props) {
  return (
    <section id="introSection" className={props.attr}>
      <h3 className="blind">근•현대 미술의 특징</h3>
      <div className="intro__inner container">
        <div className="intro__title">
          <span>FRONTEND</span>
          <h3>
            근•현대 <br />
            미술의 특징
          </h3>
          <p>
            현대미술의 특징 중 대표적인 네 가지
            <br />
            특징을 소개해 드리겠습니다.
          </p>
        </div>
        <div className="intro__desc">
          <div>
            <h4 className="icon-bg1">다양한 매체와 형식의 활용</h4>
            <p>
              현대미술은 회화와 조각뿐만 아니라 사진, 설치미술, 퍼포먼스 아트, 디지털 아트 등 다양한 매체와 형식을
              포용합니다.
            </p>
          </div>
          <div>
            <h4 className="icon-bg2">주관적이고 개인적인 표현</h4>
            <p>
              현대미술은 개인의 경험, 감정, 생각 등을 중시하며 주관적인 표현을 강조합니다. 예술가들은 자신의 내면 세계를
              표현하고, 사회 문제에 대한 비판적인 시각을 제시합니다.
            </p>
          </div>
          <div>
            <h4 className="icon-bg3">사회 및 정치적 콘텍스트의 탐구</h4>
            <p>
              현대미술은 사회와 정치, 문화적인 콘텍스트에 대한 탐구와 비판을 통해 사회적인 메시지를 전달하는 경향이
              있습니다.
            </p>
          </div>
          <div>
            <h4 className="icon-bg4">개념과 아이디어의 중요성</h4>
            <p>
              현대미술은 작품의 개념과 아이디어의 중요성을 강조합니다. 시각적인 면모보다는 작품에 담긴 의미와 아이디어에
              초점을 맞추며, 작품이 갖는 사회적, 문화적, 철학적인 의미를 탐구합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default IntroSection;
