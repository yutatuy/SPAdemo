<template>
  <div class="p-page01Child c-page u-pt-50">
    <div class="l-main__inner">
      <div class="p-page01Child__content u-flex--pc">
        <Page01Side :sideActive="sideActive" />
        <div class="p-page01Con">
          <h1>タイトル</h1>
          <p>テキストテキストテキストテキストテキスト</p>
          <h2>サブタイトル</h2>
          <p>テキストテキストテキストテキストテキスト</p>
          <div class="p-imgLeft u-flex--pc">
            <img src="../../../static/images/item01-02.jpg" alt />
            <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
          </div>
          <h2>サブタイトル</h2>
          <p>
            テキストテキストテキストテキストテキストテキストテキストテキスト
            <br />テキストテキストテキストテキストテキストテキスト
          </p>
          <div class="p-imgRight u-flex--pc">
            <img src="../../../static/images/item01-02.jpg" alt />
            <img src="../../../static/images/item01-03.jpg" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Page01Side from "../../components/Page01Side";
export default {
  name: "Item02",
  components: {
    Page01Side
  },
  data() {
    return {
      sideActive: 2
    };
  }
};
</script>
<style scoped lang="scss">
@import "./../../assets/scss/app.scss";
</style>
