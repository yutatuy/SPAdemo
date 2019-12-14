<template>
  <footer class="l-footer">
    <section class="p-footer__access">
      <ul class="p-accessContent u-flex--pc">
        <li class="p-accessConent__item">
          <router-link to="/access">
            <dl>
              <dt>テキスト</dt>
              <dd class="u-fs-24-18">交通アクセス</dd>
            </dl>
          </router-link>
        </li>
        <li class="p-accessConent__item">
          <dl>
            <dt>メールでのお問い合わせ</dt>
            <dd class="u-fs-24-18">
              <a target="_blank" href="mailto:infoinfo@info.com">
                <span class="u-underbar">infoinfo@info.com</span>
              </a>
            </dd>
          </dl>
        </li>
      </ul>
    </section>
    <div class="l-footerContent">
      <div class="l-main__inner">
        <p class="u-fs-13">&copy; 2019 Yuta Ichinose</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterItem"
};
</script>

<style scoped lang="scss">
@import "../assets/scss/app.scss";
.l-footer {
  color: $colorFont;
}
.p-accessContent {
  width: 100vw;
  margin: 0 auto;
  border-top: 1px solid #f1f1f1;
}
.p-accessConent__item {
  width: 100%;
  &:nth-child(1) {
    order: 2;
  }
  &:nth-child(1) a {
    display: block;
    background: linear-gradient(to Left, $colorLight, $colorNormal);
    color: #fff;
    @include mq(o-sp) {
      padding: 35px 0 35px 100px;
    }
    @include mq(u-sp) {
      padding: 20px 20px;
    }
  }
  &:nth-child(2) {
    text-align: right;
    order: 1;
    @include mq(o-sp) {
      padding: 35px 100px 35px 0;
    }
    @include mq(u-sp) {
      text-align: left;
      padding: 20px 20px;
    }
  }
}
.l-footerContent {
  background-color: #000;
  color: #fff;
}
.l-footerContent p {
  @extend .u-ff-mc;
  padding: 10px 0;
  line-height: 1.5;
  text-align: center;
}
</style>
