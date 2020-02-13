<template>
  <!-- p-home -->
  <div class="p-home">
    <div class="p-home__mv">
      <video id="js-video" class="p-home__video" autoplay muted playsinline loop>
        <source src="./../../static/video/video.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="l-main__container">
      <TopTxt />
      <Page01 />
      <Page02 />
      <News />
    </div>
  </div>
</template>

<script>
import TopTxt from "../components/Home/TopTxt";
import Page01 from "../components/Home/Page01";
import Page02 from "../components/Home/Page02";
import News from "../components/Home/News";
export default {
  name: "Home",
  components:{
    TopTxt,
    Page01,
    Page02,
    News,
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
</style>
