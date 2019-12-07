<template>
  <div class="p-page02 c-page">
    <div class="c-page__mv p-page02__mv">
      <dl class="c-mvTxt">
        <dt class="u-fs-40-26">Page02</dt>
        <dt>テキストテキスト</dt>
      </dl>
    </div>
    <div class="l-main__inner">
      <section class="c-pageTxt l-main__inner u-mb-50-sp">
        <p class="js-fade">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
      </section>
      <section class="c-page__content u-mb-80">
        <ul class="c-pageList">
          <li class="c-pageListItem u-flex--pc u-mb-30-sp">
            <dl class="c-pageListItem__txt">
              <dt class="p-itemRight u-mb-30">
                <h2 class="u-fs-30-22">タイトルタイトル</h2>
              </dt>
              <dd
                class="u-mb-30"
              >テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</dd>
            </dl>
            <div class="c-pageListItem__img p-page02__img--01"></div>
          </li>
          <li class="c-pageListItem u-flex--pc u-mb-30-sp">
            <dl class="c-pageListItem__txt">
              <dt class="p-itemRight u-mb-30">
                <h2 class="u-fs-30-22">タイトルタイトル</h2>
              </dt>
              <dd
                class="u-mb-30"
              >テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</dd>
            </dl>
            <div class="c-pageListItem__img p-page02__img--02"></div>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/scss/app.scss";
.p-page02__mv {
  background: url("./../../static/images/page02-fv.jpg") center center/cover
    no-repeat;
}
.p-page02__img--01 {
  background: url("./../../static/images/page02-01.jpg") center center/cover
    no-repeat;
}
.p-page02__img--02 {
  background: url("./../../static/images/page02-02.jpg") center center/cover
    no-repeat;
}
.p-page02 .c-pageListItem {
  cursor: default;
}
</style>
