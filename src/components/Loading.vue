<template>
  <div class="p-loadingWrapper">
    <transition name="loadBg">
      <div class="p-loading" v-if="this.isLoad">
        <div class="p-loadingLine"></div>
      </div>
    </transition>
    <transition name="loadContent">
      <div class="p-loadingSvg" v-if="this.isLoad">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 883.03 140.16"
          v-if="this.LoadContentShow"
        >
          <g>
            <g class="p-loadingSvg__content">
              <path
                d="M33.28,93c.64,5.76,1.76,8.64,4.16,11.84,3.84,4.8,10.56,7.52,18.72,7.52,12.32,0,19.68-5.44,19.68-14.4a12,12,0,0,0-6.72-11.2c-3.36-1.6-7.36-2.72-24-6.56C30.4,77,25.28,75,19.36,70.88,9.28,63.84,3.84,53.12,3.84,40.16,3.84,15.52,23.68,0,55.2,0,75.52,0,91,6.24,99.68,18.24c4,5.28,5.92,10.08,8,19.2L73.76,41.12C71.84,30.72,66.08,26.4,53.92,26.4c-9.76,0-17,5.28-17,12.64,0,4.48,2.4,7.84,7.52,10.24,3.2,1.44,3.2,1.44,22.08,5.28,12.16,2.56,19.84,5.28,25.92,9.12,11.52,7.2,17.28,17.92,17.28,32.64,0,12-3.84,22.24-11.2,29.44-9.28,9-23.36,13.6-42.08,13.6-13.6,0-27-2.88-35.68-7.84A37.82,37.82,0,0,1,3.52,111c-1.6-3.84-2.4-7.52-3.52-14.88Z"
              />
              <path
                d="M126.24,136.32a171.53,171.53,0,0,0,1.28-23.68V26.08a178.88,178.88,0,0,0-1.28-23.36c7.52.32,13.28.48,23.52.48h35c31.68,0,49.12,15.2,49.12,43,0,28.48-18.24,45.44-49.28,45.44H159.36v20.48a207.74,207.74,0,0,0,1.28,24.16Zm57-71.84c11.2,0,17.76-6.24,17.76-17.28s-6.24-16.8-17.76-16.8H159.36V64.48Z"
              />
              <path
                d="M326.24,136.32A129.94,129.94,0,0,0,322.4,119l-4.32-13.6h-45.6L268.16,119a92.21,92.21,0,0,0-4,17.28H226.72c2.4-4.8,3.84-8.64,7.68-19.52L269,20.48c2.88-7.84,4.32-12.64,5.12-17.28h41.76a127.68,127.68,0,0,0,5.44,17.28L356,116.8c3,8.48,5.6,15,7.68,19.52ZM295,30.56l-14.88,48h30.08Z"
              />
              <path
                d="M448,131.2a29.69,29.69,0,0,1,.16-3.52c-10.72,8.64-18.88,11.52-32.32,11.52-29.12,0-46.72-19.52-46.72-51.84,0-16.64,4.8-29.92,13.76-39,8.16-8.16,19.36-12.48,32.48-12.48,13,0,22.24,3.36,32.8,11.84-.16-2.4-.16-3.84-.16-6.08V28.32c0-11.2-.32-18.08-1.28-25.12h32.8c-1,6.72-1.28,14.4-1.28,25.12V111.2a189.64,189.64,0,0,0,1.28,25.12H448ZM400.16,87.52c0,9.12,2.56,16.48,7.36,21.12A22.17,22.17,0,0,0,423,114.72c14.24,0,24.64-11.84,24.64-27.68,0-15.52-10.24-26.72-24.8-26.72C409,60.32,400.16,70.72,400.16,87.52Z"
              />
              <path
                d="M521.6,96.48c1.6,13,9.12,19.84,21.76,19.84a23.36,23.36,0,0,0,16.16-5.92c2.4-2.24,3.52-4,4.8-8.16l27.84,7.84c-3.68,8.32-6.08,12-10.56,16.48-9.12,9-21.92,13.6-37.76,13.6-15.68,0-28-4.48-37.12-13.6-9.44-9.6-14.56-23.2-14.56-39,0-31.68,20.32-52.64,50.88-52.64,25,0,42.4,13.6,48,37.44,1.28,5.12,1.92,11.84,2.4,21a29,29,0,0,0,.16,3.2ZM563.2,74.4C561,64.16,554.08,58.72,543,58.72c-11.36,0-18.24,5.12-21,15.68Z"
              />
              <path
                d="M606.39,136.32a176,176,0,0,0,1.28-24.16V62.88c0-12.16-.32-17.92-1.28-24.16h31.68v6.72a16.52,16.52,0,0,1-.16,2.24v1.6c8.16-9,17.92-13.12,30.57-13.12,8.32,0,15.2,1.92,20.48,5.76,2.88,2.08,4.48,4,6.56,8C705.44,40.16,715.2,36,729.12,36c22.88,0,34.56,12.48,34.56,36.64v39.68a176.48,176.48,0,0,0,1.28,24H731.68A170.11,170.11,0,0,0,733,112.16v-33c0-12-3.52-16.64-12.64-16.64-8.16,0-15.52,6.4-19.52,17.12v32.64a181.08,181.08,0,0,0,1.28,24H668.8a173,173,0,0,0,1.28-24.16v-33c0-6.72-.64-9.76-2.73-12.48-1.75-2.56-5-4-8.79-4-8.65,0-16,6.24-20.49,17.12v32.32a180.51,180.51,0,0,0,1.28,24.16Z"
              />
              <path
                d="M777.43,87.36c0-32,20.48-52.32,52.8-52.32S883,55.36,883,87c0,31.84-21.12,53-53,53C797.91,140,777.43,119.52,777.43,87.36ZM808,87.2c0,17.76,8.32,28.48,22.24,28.48s21.92-10.4,21.92-28.16C852.15,69.6,844,59,830.39,59,816.31,59,808,69.6,808,87.2Z"
              />
            </g>
          </g>
        </svg>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Loading",
  data() {
    return {
      isLoad: true,
      LoadContentShow: false
    };
  },
  methods: {
    LoadingFinish() {
      this.isLoad = false;
      this.$emit("LoadingEnd");
    },
    LoadingContentStart() {
      this.LoadContentShow = true;
    }
  },
  mounted() {
    //ページ読み込み完了後
    this.$nextTick(() => {
      //ロゴを表示
      setTimeout(this.LoadingContentStart, 900);
      //ローディング終了
      setTimeout(this.LoadingFinish, 3200);
    });
  }
};
</script>

<style scoped lang="scss">
@import "../assets/scss/app.scss";
.p-loading {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  z-index: 9999;
}
.p-loadingLine {
  position: relative;
  width: 100vw;
  height: 100vh;
}
.p-loadingLine::before,
.p-loadingLine::after {
  position: absolute;
  content: " ";
  display: block;
  background-color: $colorLight;
  width: 100%;
  @include mq(o-sp) {
    height: 78px;
  }
  @include mq(u-sp) {
    height: 50px;
  }
}
.p-loadingLine::before {
  bottom: 0;
  right: 0;
  animation: lineBefore ease-in forwards 0.7s;
}
.p-loadingLine::after {
  top: 0;
  left: 0;
  animation: lineAfter ease-in forwards 0.7s;
}
@keyframes lineBefore {
  0% {
    right: -100%;
  }
  80% {
    right: -70%;
  }
  100% {
    right: 0;
  }
}
@keyframes lineAfter {
  0% {
    left: -100%;
  }
  80% {
    left: -70%;
  }
  100% {
    left: 0;
  }
}
.p-loadingSvg {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  z-index: 9999;
  @include mq(o-sp) {
    max-width: 1000px;
  }
  @include mq(u-sp) {
    max-width: 80%;
  }
}

.p-loadingSvg path {
  stroke-width: 1.5; /*縁の太さ*/
  fill: none; /*縁の中の色*/
  stroke: $colorDark; /*縁の色*/
  stroke-dasharray: 600; /*縁の速さ*/
  animation: svgAnime ease-in forwards 1.5s;
}

@keyframes svgAnime {
  0% {
    stroke-dashoffset: 600;
    fill: transparent;
  }
  80% {
    fill: transparent;
  }
  95% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: 0;
    fill: $colorDark;
  }
}
.loadBg-leave {
  left: 0;
}
.loadBg-leave-to {
  left: 100%;
}
.loadBg-leave-active {
  transition-duration: 1s;
  transition-timing-function: cubic-bezier(0.15, 0.35, 0, 1);
}
.loadContent-leave {
  opacity: 1;
}
.loadContent-leave-to {
  opacity: 0;
}
.loadContent-leave-active {
  transition-duration: 1s;
}
</style>
