<template>
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
</template>

<style lang="scss" scoped>
@import "../../assets/scss/app.scss";
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
</style>
