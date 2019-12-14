<template>
  <header class="l-header">
    <!-- PC -->
    <div class="l-header__inner u-hidden-sp">
      <div class="l-header__menu u-flex--pc">
        <div class="l-headerLogo">
          <router-link to="/">
            <img src="./../../static/images/logo.png" alt="logo" />
          </router-link>
        </div>
        <nav class="l-headerNav">
          <ul class="l-headerList">
            <router-link class="u-fs-14" tag="li" to="/">
              <a>home</a>
            </router-link>
            <router-link class="u-fs-14" tag="li" to="/page01">
              <a>page1</a>
            </router-link>
            <router-link class="u-fs-14" tag="li" to="/page02">
              <a>page2</a>
            </router-link>
            <router-link class="u-fs-14" tag="li" to="/news">
              <a>news</a>
            </router-link>
            <router-link class="u-fs-14" tag="li" to="/access">
              <a>access</a>
            </router-link>
          </ul>
        </nav>
      </div>
    </div>
    <!-- SP -->
    <div class="l-spHeader u-hidden-pc">
      <transition name="v-transSlide">
        <div v-if="this.isMenuShow" class="l-spHeader__slideMenu l-slideMenu">
          <ul class="l-slideMenu__list">
            <li>
              <router-link class="u-fs-14" to="/" @click.native="slideMenu">home</router-link>
            </li>
            <li>
              <router-link class="u-fs-14" to="/page01" @click.native="slideMenu">page1</router-link>
            </li>
            <li>
              <router-link class="u-fs-14" to="/page02" @click.native="slideMenu">page2</router-link>
            </li>
            <li>
              <router-link class="u-fs-14" to="/news" @click.native="slideMenu">news</router-link>
            </li>
            <li>
              <router-link class="u-fs-14" to="/access" @click.native="slideMenu">access</router-link>
            </li>
          </ul>
        </div>
      </transition>
      <div class="l-spHeader__top l-main__inner u-flex">
        <div class="l-spHeader__logo">
          <router-link to="/">
            <img src="./../../static/images/logo.png" alt="logo" />
          </router-link>
        </div>
        <div
          class="l-spHeader__btn u-fs-18"
          v-on:click="this.slideMenu"
          v-bind:class="{'u-menuColorChange': this.isMenuShow === true}"
        >MENU</div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderItem",
  data: function() {
    return {
      isMenuShow: false
    };
  },
  methods: {
    slideMenu: function() {
      this.isMenuShow = !this.isMenuShow;
      //SPメニューが開いたときにスクロールを停止するため親メゾット
      this.$emit("menuMethods", this.isMenuShow);
    }
  }
};
</script>

<style scoped lang="scss">
@import "../assets/scss/app.scss";
.l-header {
  box-shadow: 0 12px 10px -6px rgba(0, 0, 0, 0.2);
}
//transition
.v-transSlide-enter-active,
.v-transSlide-leave-active {
  transition: all 0.5s;
}
.v-transSlide-enter,
.v-transSlide-leave-to {
  opacity: 0;
}
//PC
.l-headerLogo {
  padding: 20px 0 0 0;
  width: 180px;
}
.l-header__inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0;
  z-index: 999;
  @include mq(sp-pc) {
    padding: 0 20px;
  }
}
.l-headerList {
  > li {
    list-style-type: none;
    display: inline-block;
    vertical-align: top;
    overflow: hidden;
    &:not(:last-child) {
      margin-right: 30px;
    }
  }
  > li a {
    text-transform: uppercase;
    position: relative;
    padding: 25px 0;
    display: block;
    font-weight: bold;
    letter-spacing: 2px;
    &:after {
      position: absolute;
      content: " ";
      display: block;
      width: 100%;
      height: 3px;
      right: 101%;
      bottom: 0;
      background-color: $colorNormal;
      transition: right 0.2s;
    }
    &:hover:after {
      right: 0;
      transition: right 0.2s;
    }
  }
}
.l-header__menu {
  justify-content: space-between;
}
//SP
.l-spHeader {
  position: relative;
}
.l-spHeader__logo {
  padding-top: 9px;
  width: 120px;
}
.l-spHeader__top {
  position: relative;
  justify-content: space-between;
  height: 50px;
}
.l-spHeader__btn {
  position: relative;
  cursor: pointer;
  font-weight: bold;
  z-index: 999;
  height: 100%;
  line-height: 50px;
  color: $colorFont;
  transition: color 0.5s;
}
.l-slideMenu {
  position: absolute;
  width: 100%;
  height: 100vh;
  padding: 0 40px;
  background-color: rgba($colorLight, 0.9);
  color: #fff;
  z-index: 100;
}
.l-slideMenu__list {
  padding-top: 80px;
  text-transform: uppercase;
  > li:not(:last-child) {
    margin-bottom: 25px;
  }
  > li a {
    padding-bottom: 10px;
    font-weight: bold;
    display: block;
    border-bottom: 1px solid $colorDark;
  }
}
</style>
