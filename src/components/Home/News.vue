<template>
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
</template>

<script>
import NewsList from "../../../static/news/newsList.js"; //Newsの記事データを読み込む
export default {

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
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/scss/app.scss";

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
