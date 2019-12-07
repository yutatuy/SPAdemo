<template>
  <div class="p-access c-page">
    <div class="c-page__mv p-access__mv">
      <dl class="c-mvTxt">
        <dt class="u-fs-40-26">Access</dt>
        <dt>アクセス</dt>
      </dl>
    </div>
    <div class="l-main__inner">
      <section class="c-pageTxt l-main__inner u-mb-50-sp">
        <h1 class="u-fs-24-18">お気軽にお問い合わせください</h1>
      </section>
      <section class="p-access__content u-flex--pc">
        <ul class="p-accessContentList u-mb-30-sp">
          <li>
            <dl class="p-accessContentItem u-flex">
              <dt>所在地</dt>
              <dd>
                〒123-4567
                <br />東京都東京市東京0-0-0
              </dd>
            </dl>
          </li>
          <li>
            <dl class="p-accessContentItem u-flex">
              <dt>Email</dt>
              <dd>
                <a target="_blank" href="mailto:infoinfo@info.com">
                  <span class="u-underbar">infoinfo@info.com</span>
                </a>
              </dd>
            </dl>
          </li>
          <li>
            <dl class="p-accessContentItem u-flex">
              <dt>Tel</dt>
              <dd>
                <a target="_blank">
                  <span class="u-underbar">123-4567-8910</span>
                </a>
              </dd>
            </dl>
          </li>
        </ul>
        <div class="p-accessContentMap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.988242869072!2d-72.5471569490902!3d-13.163141190684971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916d9a5f89555555%3A0x3a10370ea4a01a27!2z44Oe44OB44Ol44O744OU44OB44Ol!5e0!3m2!1sja!2sjp!4v1575707832553!5m2!1sja!2sjp"
            width="100%"
            height="450"
            frameborder="0"
            style="border:0;"
            allowfullscreen
          ></iframe>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/scss/app.scss";
.p-access__mv {
  background: url("../../static/images/access-fv.jpg") center center/cover
    no-repeat;
}

.p-accessContentList {
  @include mq(o-sp) {
    width: 50%;
  }
  > li {
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
  }
  > li:first-child {
    border-top: 1px solid #ccc;
  }
}
.p-accessContentItem {
  @include mq(o-sp) {
    padding: 0 20px;
    justify-content: space-between;
  }
  > dt {
    width: 70px;
    font-weight: bold;
  }
  > dd {
    @include mq(o-sp) {
      width: 250px;
    }
    margin-left: 30px;
  }
}
.p-accessContentList {
  @include mq(o-sp) {
    margin-right: 50px;
  }
}
.p-accessContentMap {
  width: 50%;
  @include mq(u-sp) {
    width: 100%;
  }
}
</style>
