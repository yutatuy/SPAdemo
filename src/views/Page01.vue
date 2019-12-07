<template>
  <div class="p-page01 c-page">
    <div class="c-page__mv p-page01__mv">
      <dl class="c-mvTxt">
        <dt class="u-fs-40-26">Page01</dt>
        <dt>テキストテキスト</dt>
      </dl>
    </div>
    <div class="l-main__inner">
      <section class="c-pageTxt l-main__inner u-mb-50-sp">
        <p class="js-fade">
          テキストテキストテキストテキストテキストテキストテキストテキストテキスト
          <br />テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </p>
      </section>
      <section class="c-page__content">
        <ul class="c-pageList">
          <router-link tag="li" to="/page01/item01" class="c-pageListItem u-flex--pc u-mb-30-sp">
            <dl class="c-pageListItem__txt">
              <dt class="p-itemRight u-mb-30 u-flex--pc">
                <h2 class="u-fs-30-22">Item01</h2>
                <p class="u-fs-14">項目1</p>
              </dt>
              <dd class="u-mb-30">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</dd>
              <dd>
                <router-link
                  to="/page01/item01"
                  class="c-pageList__link u-fs-14 u-hidden-sp"
                >テキストテキスト</router-link>
              </dd>
            </dl>
            <div class="c-pageListItem__img p-page01__img--01"></div>
          </router-link>
          <router-link tag="li" to="/page01/item02" class="c-pageListItem u-flex--pc u-mb-30-sp">
            <dl class="c-pageListItem__txt">
              <dt class="p-itemRight u-mb-30 u-flex--pc">
                <h2 class="u-fs-30-22">Item02</h2>
                <p class="u-fs-14">項目2</p>
              </dt>
              <dd class="u-mb-30">テキストテキストテキストテキストテキストテキストテキストテキスト</dd>
              <dd>
                <router-link
                  to="/page01/item02"
                  class="c-pageList__link u-fs-14 u-hidden-sp"
                >テキストテキスト</router-link>
              </dd>
            </dl>
            <div class="c-pageListItem__img p-page01__img--02"></div>
          </router-link>
          <router-link tag="li" to="/page01/item03" class="c-pageListItem u-flex--pc u-mb-30-sp">
            <dl class="c-pageListItem__txt">
              <dt class="p-itemRight u-mb-30 u-flex--pc">
                <h2 class="u-fs-30-22">Item03</h2>
                <p class="u-fs-14">項目3</p>
              </dt>
              <dd
                class="u-mb-30"
              >テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</dd>
              <dd>
                <router-link
                  to="/page01/item03"
                  class="c-pageList__link u-fs-14 u-hidden-sp"
                >テキストテキスト</router-link>
              </dd>
            </dl>
            <div class="c-pageListItem__img p-page01__img--03"></div>
          </router-link>
        </ul>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/scss/app.scss";
.p-page01__mv {
  background: url("./../../static/images/page01-fv.jpg") center center/cover
    no-repeat;
}
.p-page01__img--01 {
  background: url("./../../static/images/item01.jpg") center center/cover
    no-repeat;
}
.p-page01__img--02 {
  background: url("./../../static/images/item02.jpg") center center/cover
    no-repeat;
}
.p-page01__img--03 {
  background: url("./../../static/images/item03.jpg") center center/cover
    no-repeat;
}
.p-page01 .c-pageListItem:hover {
  opacity: 0.7;
  transition: opacity 0.3s ease-out;
}
</style>
