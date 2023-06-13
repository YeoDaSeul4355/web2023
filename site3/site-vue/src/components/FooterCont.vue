<template>
    <footer id="footer" :class="attr" role="contentinfo">
      <div class="footer__inner container">
        <div class="footer__text">
          <h5>Mordern Art</h5>
          <p>
            궁금한 사항은
            <br />
            메일로 연락주세요!
            <br />
            <a href="mailto:dsy1943@naver.com">dsy1943@naver.com</a>
          </p>
          <ul class="sns">
            <li>
              <a href="/">
                <span class="ir">페이스북</span>
              </a>
            </li>
            <li>
              <a href="/">
                <span class="ir">인스타</span>
              </a>
            </li>
            <li>
              <a href="/">
                <span class="ir">유튜브</span>
              </a>
            </li>
            <li>
              <a href="/">
                <span class="ir">깃허브</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="footer__menu">
          <div>
            <h4>전시 일정</h4>
            <ul>
              <li>
                <a href="/">현재 전시</a>
              </li>
              <li>
                <a href="/">다가오는 전시</a>
              </li>
              <li>
                <a href="/">이전 전시</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>미술 용어 사전</h4>
            <ul>
              <li>
                <a href="/">시대적 배경</a>
              </li>
              <li>
                <a href="/">주요 용어</a>
              </li>
              <li>
                <a href="/">흐름과 학파</a>
              </li>
              <li>
                <a href="/">예술 암호 해석</a>
              </li>
              <li>
                <a href="/">예술가의 업적</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>작품 갤러리</h4>
            <ul>
              <li>
                <a href="/">테마별 작품</a>
              </li>
              <li>
                <a href="/">인기 작품</a>
              </li>
              <li>
                <a href="/">신규 작품</a>
              </li>
              <li>
                <a href="/">시대별 작품</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>문의 및 지원</h4>
            <ul>
              <li>
                <a href="/">공지사항</a>
              </li>
              <li>
                <a href="/">문의사항</a>
              </li>
              <li>
                <a href="/">이벤트</a>
              </li>
              <li>
                <a href="/">FAQ</a>
              </li>
              <li>
                <a href="/">1:1 문의</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer__right">Copyright 2023. All Rights Reserved. - Designed by Yeo Da Seul</div>
      </div>
    </footer>
</template>
<script>
export default ({
  props: {
    attr: String
  }
})
</script>
<style lang="scss">
    @import "../assets/scss/setting/mixins.scss";
    .footer__inner {
        @include flex-between;
        flex-wrap: wrap;
        .footer__text {
            width: 20%;

            h5 {
                font-size: 20px;
                margin-bottom: 20px;
            }
            p {
                font-size: 16px;
                font-weight: 300;
                line-height: 1.6;
                color: #808080;
            }
            .sns {
                @include flex-between;
                li {
                    display: inline;
                    a {
                        display: inline-block;
                        width: 45px;
                        height: 45px;
                        @include border(45px);
                        background-color: #f5f5f5;
                        background-image: url(../assets/images/footer/Facebook.svg);
                        background-position: center;
                        background-repeat: no-repeat;
                    }

                    &:nth-child(2) a {
                        background-image: url(../assets/images/footer/Instagram.svg);
                    }
                    &:nth-child(3) a {
                        background-image: url(../assets/images/footer/YouTube.svg);
                    }
                    &:nth-child(4) a {
                        background-image: url(../assets/images/footer/Link.svg);
                    }
                }
            }
        }
        .footer__menu {
            width: 70%;
            display: flex;

            > div {
                width: 25%;

                h4 {
                    font-size: 18px;
                    margin-bottom: 15px;
                    color: #000;
                }

                a {
                    color: #808080;
                    line-height: 1.6;
                    font-weight: 300;
                    font-size: 14px;
                }
            }
        }
        .footer__right {
            font-size: 16px;
            line-height: 1.5;
            font-weight: 300;
            width: 100%;
            border-top: 1px solid #e5e5e5;
            margin-top: 50px;
            padding: 30px;
            color: #808080;
            text-align: center;
        }

    }
</style>
