<template>
    <header id="header" :class="attr" role="heading" aria-level="1">
      <div class="header__inner container">
        <h1 class="header__logo">
          <router-link to="/">
            MORDERN <em>art</em>
          </router-link>
        </h1>
        <div class="header__nav" role="navigation">
          <ul>
            <li>
              <router-link to="/image">대표 화가</router-link>
            </li>
            <li>
              <router-link to="/card">유명 작품</router-link>
            </li>
            <li>
              <router-link to="/youtube">유튜브</router-link>
            </li>
            <li>
              <router-link to="/unsplash">이미지</router-link>
            </li>
            <li>
              <router-link to="/movie">영화</router-link>
            </li>
          </ul>
        </div>
      </div>
    </header>
</template>
<script>
export default ({
  props: {
    attr: String
  }
})
</script>
<style lang="scss">
    // header__wrap

    .header__inner {
        text-align: center;

        .header__logo {
            width: 100%;

            a {
                font-size: 30px;
                display: inline-block;
                padding: 5px 5px 0 5px;
                margin: 5px 5px 0 5px;
                text-transform: uppercase;
                font-weight: 800;

                em {
                    text-transform: lowercase;
                    font-weight: 500;
                }
            }
        }
        .header__nav {
            width: 100%;
            ul {
                padding: 0 10%;
                display: flex;
                justify-content: space-between;
            }
            li {

                a {
                    display: inline-block;
                    padding: 10px;
                    margin: 2px;
                    position: relative;

                    &::before {
                        content: '';
                        width: calc(100% - 20px);
                        height: 2px;
                        background-color: #fdbb4a;
                        position: absolute;
                        left: 10px;
                        bottom: 5px;
                        transform: scaleX(0);
                        transition: all 0.3s ease-in-out;
                    }

                    &:hover::before {
                        transform: scaleX(1);
                    }
                }
            }
        }
    }
</style>
