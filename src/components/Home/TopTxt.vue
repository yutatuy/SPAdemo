<template>
  <!-- p-homeTxt -->
  <section class="p-homeTxt l-main__inner u-mb-50-sp">
    <h1 class="u-fs-40-26 js-fade u-fadeUp-30 u-easeOut u-dr-1500">タイトルタイトルタイトルタイトル</h1>
    <p class="js-fade u-fadeUp-30 u-easeOut u-dr-1500">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
  </section>
</template>


<style lang="scss" scoped>
@import "../../assets/scss/app.scss";

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
</style>
