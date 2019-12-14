<template>
  <!-- p-home -->
  <div class="p-home">
    <div class="p-home__mv">
      <video id="js-video" class="p-home__video" autoplay muted playsinline loop>
        <source src="./../../static/video/video.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="l-main__container">
      <!-- p-homeTxt -->
      <section class="p-homeTxt l-main__inner u-mb-50-sp">
        <h1 class="u-fs-40-26 js-fade u-fadeUp-30 u-easeOut u-dr-1500">タイトルタイトルタイトルタイトル</h1>
        <p
          class="js-fade u-fadeUp-30 u-easeOut u-dr-1500"
        >テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
      </section>
      <!-- p-page01 -->
      <section
        class="p-page01 u-mb-150-100 l-main__inner js-fade u-fadeUp-30 u-easeOut u-dr-1000 u-dl-500"
      >
        <ul class="p-page01List">
          <li class="p-page01Item">
            <router-link to="/page01/item01">
              <dl class="p-page01Ttl">
                <dd class="u-fs-30-22">Item01</dd>
                <dt>項目1</dt>
              </dl>
            </router-link>
          </li>
          <li class="p-page01Item">
            <router-link to="/page01/item02">
              <dl class="p-page01Ttl">
                <dd class="u-fs-30-22">Item02</dd>
                <dt>項目2</dt>
              </dl>
            </router-link>
          </li>
          <li class="p-page01Item">
            <router-link to="/page01/item03">
              <dl class="p-page01Ttl">
                <dd class="u-fs-30-22">Item03</dd>
                <dt>項目3</dt>
              </dl>
            </router-link>
          </li>
        </ul>
      </section>
      <!-- p-page02 -->
      <section class="p-home__page02 u-mb-50-sp js-fade u-fadeUp-30 u-easeOut u-dr-1500">
        <div class="p-page02Img">
          <figure class="p-page02Img__img"></figure>
          <div class="p-page02Img__txt">
            <dl class="p-page02ImgHead u-mb-30 js-fade u-fadeUp-30 u-easeOut u-dr-1000">
              <dt class="p-page02ImgHead__ttl u-fs-46-29">page02</dt>
              <dd class="p-page02ImgHead__lead">サブタイトル</dd>
            </dl>
            <p
              class="p-page02ImgBody u-fs-30-22 u-mb-30 u-mb-5-sp js-fade u-fadeUp-30 u-easeOut u-dr-1500"
            >テキストテキストテキストテキストテキストテキストテキストテキスト</p>
            <p
              class="p-page02ImgBottom js-fade u-fadeUp-30 u-easeOut u-dr-1500"
            >テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
          </div>
        </div>
        <div class="p-page02Txt l-main__inner u-mb-30-sp">
          <div class="p-page02Con">
            <div class="p-page02Con__inner">
              <ul class="p-page02ConList u-flex--pc">
                <li class="js-fade u-fadeUp-50 u-linear u-dr-500">
                  <dl class="p-page02ConBox u-mb-30">
                    <dt class="u-fs-24-18">タイトルタイトル</dt>
                    <dd>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</dd>
                  </dl>
                  <p
                    class="u-hidden-pc"
                  >テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                </li>
                <li class="js-fade u-fadeUp-50 u-linear u-dr-500">
                  <dl class="p-page02ConBox u-mb-30">
                    <dt class="u-fs-24-18">タイトルタイトル</dt>
                    <dd>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</dd>
                  </dl>
                  <p
                    class="u-hidden-pc"
                  >テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <router-link to="/page02" class="c-moreBtn p-newsBtn">more</router-link>
      </section>
      <!-- p-news -->
      <section
        class="p-home__news l-main__inner u-mb-150-100 js-fade u-fadeUp-30 u-easeOut u-dr-1500"
      >
        <dl class="p-newsTtlArea">
          <dt class="u-fs-46-29">News</dt>
          <dd>お知らせ</dd>
        </dl>
        <ul class="p-newsTabList">
          <li>
            <a v-on:click="changeNews('1')" v-bind:class="{'u-tabActive': isTabActive === '1'}">ALL</a>
          </li>
          <li>
            <a v-on:click="changeNews('2')" v-bind:class="{'u-tabActive': isTabActive === '2'}">CAT1</a>
          </li>
          <li>
            <a v-on:click="changeNews('3')" v-bind:class="{'u-tabActive': isTabActive === '3'}">CAT2</a>
          </li>
          <li>
            <a v-on:click="changeNews('4')" v-bind:class="{'u-tabActive': isTabActive === '4'}">CAT3</a>
          </li>
        </ul>
        <transition-group tag="ul" class="p-newsConList" name="vue-newsList">
          <li
            v-for="(item, i) in this.list.slice(0, 5)"
            :key="i+1"
            v-bind:class="'p-newsConList__item p-newsConList__item--' + i"
          >
            <ul class="p-newsDetailList">
              <li class="p-newsDetailList__date">{{item.date}}</li>
              <li class="p-newsDetailList__cat">{{item.category}}</li>
              <li class="p-newsDetailList__ttl">{{item.title}}</li>
            </ul>
          </li>
        </transition-group>
        <router-link to="/news" class="c-moreBtn p-newsBtn">more</router-link>
      </section>
    </div>
  </div>
</template>

<script>
import NewsList from "../api/newsList.js"; //Newsの記事データを読み込む
export default {
  name: "Home",
  data: function() {
    return {
      list: NewsList.fetch().slice(0, 5), //News記事をnewsList.jsから呼び出す。
      isTabActive: "1" //Newsのカテゴリーを切り替えるための変数
    };
  },
  methods: {
    //Newsのカテゴリーを切り替える isTavActiveが1なら全て表示
    changeNews: function(num) {
      this.isTabActive = num;
      let changeList = []; //表示したいカテゴリーの記事を保存するためのリスト
      if (num === "1") {
        this.changeList = NewsList.fetch();
      } else if (num === "2") {
        this.changeList = NewsList.fetch().filter(function(value) {
          return value.category === "CAT1";
        });
      } else if (num === "3") {
        this.changeList = NewsList.fetch().filter(function(value) {
          return value.category === "CAT2";
        });
      } else {
        this.changeList = NewsList.fetch().filter(function(value) {
          return value.category === "CAT3";
        });
      }
      this.list = [];
      this.list = this.changeList;
    }
  },
  mounted: function() {
    //u-fadeInを持つクラスinView.jsで操作
    inView(".js-fade").on("enter", el => {
      $(el).addClass("u-fadeIn");
    });
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/app.scss";
//p-home
//p-home__mv
.p-home__mv {
  overflow: hidden;
  position: relative;
  @include mq(o-sp) {
    height: 60vw;
    max-height: calc(100vh - 78px);
  }
  @include mq(u-sp) {
    height: 130vw;
  }
}
.p-home__video {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  @media (max-width: 1460px) {
    width: auto;
    height: 100%;
  }
}
.p-homeTxt {
  position: relative;
  background-color: #fff;
  text-align: center;
  padding: 80px 50px;
  @include mq(u-sp) {
    padding: 35px 20px 0 20px;
    box-shadow: none;
  }
  > h1 {
    margin-bottom: 5px;
  }
}
//p-home__page01
.p-page01List {
  display: flex;
  @include mq(u-sp) {
    display: block;
  }
}
.p-page01Item {
  height: 550px;
  position: relative;
  width: 33.33333%;
  overflow: hidden;
  border-top: 1px solid $colorGray;
  border-right: 1px solid $colorGray;
  color: $colorFont;
  @include mq(u-sp) {
    height: 400px;
    width: 100%;
    border-left: 1px solid $colorGray;
  }
  &:first-child {
    border-left: 1px solid $colorGray;
  }
  > a {
    position: relative;
    height: 100%;
    display: block;
    z-index: 5;
  }
  &:hover {
    @include mq(o-sp) {
      color: #fff;
      transition: all 0.2s ease-out;
      &:after {
        top: 0;
        color: #fff;
        transition: all 0.6s cubic-bezier(0.15, 0.5, 0, 1);
      }
    }
  }
  &:after {
    position: absolute;
    content: " ";
    display: block;
    top: 140px;
    left: 0;
    width: 100%;
    height: 105%;
    z-index: 1;
    @include mq(o-sp) {
      transition: all 0.3s ease-out;
    }
    @include mq(u-sp) {
      top: 80px;
    }
  }
  &:nth-child(1):after {
    background: url("./../../static/images/item01.jpg") center center/cover
      no-repeat;
  }
  &:nth-child(2):after {
    background: url("./../../static/images/item02.jpg") center center/cover
      no-repeat;
  }
  &:nth-child(3):after {
    background: url("./../../static/images/item03.jpg") center center/cover
      no-repeat;
  }
}
.p-page01Ttl {
  text-align: center;
  @include mq(o-sp) {
    padding-top: 20px;
  }
}
//p-home__page02
.p-page02Img {
  width: 100vw;
  height: 600px;
  position: relative;
  background: url("../../static/images/page02-fv.jpg") center center/cover
    no-repeat;
  @include mq(u-sp) {
    height: auto;
  }
}
.p-page02Img__img {
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  @include mq(u-sp) {
    position: static;
  }
  img {
    height: 100%;
  }
}
.p-page02Img__txt {
  position: absolute;
  top: 0;
  right: 0;
  width: 60%;
  padding: 50px 8% 50px 72px;
  height: 100%;
  background-color: $colorLight;
  color: #fff;
  @include mq(sp-pc) {
    width: 75%;
  }
  @include mq(u-sp) {
    position: static;
    width: 100%;
    padding: 40px 25px 80px 25px;
  }
}
.p-page02ImgHead__ttl {
  text-transform: uppercase;
}
.p-page02Con {
  position: relative;
  top: -100px;
  background-color: #fff;
  padding: 60px 50px 0 50px;
  margin-bottom: 20px;
  @include mq(u-sp) {
    top: -50px;
    padding: 30px 30px 0 30px;
  }
}
.p-page02ConList {
  > li {
    flex: 0 0 auto;
    width: calc(50% - 20px / 2);
    @include mq(u-sp) {
      width: 100%;
    }
  }
  > li:nth-child(1) {
    @include mq(o-sp) {
      margin-right: 20px;
    }
    @include mq(u-sp) {
      margin-bottom: 40px;
    }
  }
}
.p-page02ConBox {
  position: relative;
  height: 230px;
  border: 1px solid $colorLight;
  overflow: scroll;
  cursor: pointer;
  background-color: #fff;
  transition: background-color 0.5s;
  width: 100%;
  @include mq(u-sp) {
    height: 180px;
  }
  @include mq(o-sp) {
    &:hover {
      background-color: rgba($colorDark, 0.7);
      transition: background-color 0.5s;
      dd {
        opacity: 1;
        transition: opacity 0.5s;
      }
    }
  }
  > dt {
    position: absolute;
    padding-top: 100px;
    text-align: center;
    width: 100%;
    @include mq(u-sp) {
      padding-top: 70px;
    }
  }
  > dd {
    position: absolute;
    padding: 45px;
    height: calc(100% + 40px);
    z-index: 5;
    color: #fff;
    opacity: 0;
    transition: opacity background-color 0.5s;
    @include mq(u-sp) {
      display: none;
    }
  }
}
.p-home__page02 .c-moreBtn {
  position: relative;
  top: -100px;
  @include mq(u-sp) {
    top: -50px;
  }
}

//p-home__news
.p-home__news {
  position: relative;
  @include mq(o-pc) {
    min-height: 563px;
  }
}
.p-newsTtlArea {
  margin-bottom: 60px;
  @include mq(u-sp) {
    margin-bottom: 30px;
  }
}
.p-newsTabList {
  position: absolute;
  top: 20px;
  right: 20px;
  @include mq(o-pc) {
    right: 0;
  }
  @include mq(u-sp) {
    position: static;
    text-align: center;
    margin-bottom: 35px;
  }
  > li {
    width: 100px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    display: inline-block;
    vertical-align: middle;
    border: 1px solid $colorGray;
    background-color: transparent;
    transition: background-color 0.3s ease-out, color 0.3s ease-out;
    @include mq(u-sp) {
      width: 23%;
      height: 35px;
      line-height: 35px;
    }
    > a {
      cursor: pointer;
      display: block;
      @include mq(o-sp) {
        &:hover {
          color: #fff;
          background-color: $colorDark;
          transition: all 0.3s ease-out;
        }
      }
    }
  }
}
.p-newsConList {
  margin-bottom: 50px;
  > li:not(:last-child) {
    margin-bottom: 25px;
  }
}
@for $i from 0 through 4 {
  .vue-newsList-enter {
    opacity: 0;
  }
  .vue-newsList-enter-active {
    opacity: 0;
    animation: fade-in 0.5s;
    &.p-newsConList__item--#{$i} {
      animation-delay: #{100ms * $i};
    }
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateX(-80px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
.p-newsDetailList {
  > li {
    display: inline-block;
    vertical-align: middle;
  }
  &__date {
    font-size: 13px;
  }
  &__cat {
    font-size: 13px;
    position: relative;
    margin-left: 120px;
    margin-right: 15px;
    width: 150px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border: 1px solid $colorDark;
    @include mq(u-sp) {
      width: 100px;
      height: 25px;
      line-height: 25px;
      margin-left: 70px;
    }
    &:before {
      position: absolute;
      content: " ";
      display: block;
      top: 13px;
      left: -90px;
      width: 80px;
      height: 1px;
      background-color: $colorLight;
      @include mq(u-sp) {
        width: 50px;
        top: 11px;
        left: -60px;
      }
    }
  }
  &__ttl {
    @include mq(u-sp) {
      display: block !important;
      margin-bottom: 0 !important;
    }
  }
}
.p-newsBtn {
  margin: 0 auto;
  display: block;
  max-width: 250px;
  text-align: center;
}
</style>
