<template>
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
        <router-link to="/page02" class="c-moreBtn p-page02Btn">more</router-link>
      </section>
</template>


<style lang="scss" scoped>
@import "../../assets/scss/app.scss";

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
.p-page02Btn {
  margin: 0 auto;
  display: block;
  max-width: 250px;
  text-align: center;
}
</style>
