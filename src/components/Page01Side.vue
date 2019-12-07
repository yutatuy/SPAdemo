<template>
  <div class="p-page01Side">
    <div class="p-page01SideTtl u-mb-30">
      <dl class="p-page01SideTtl__txt">
        <h2 class="u-fs-40-26">Page01</h2>
        <p>テキストテキスト</p>
      </dl>
    </div>
    <div class="p-page01Categoty">
      <ul class="p-page01Categoty__list u-mb-50-sp">
        <li class="p-page01Categoty__listItem" v-bind:class="{'u-catActive': this.sideActive == 1}">
          <router-link to="/page01/item01">Item01</router-link>
        </li>
        <li class="p-page01Categoty__listItem" v-bind:class="{'u-catActive': this.sideActive == 2}">
          <router-link to="/page01/item02">Item02</router-link>
        </li>
        <li class="p-page01Categoty__listItem" v-bind:class="{'u-catActive': this.sideActive == 3}">
          <router-link to="/page01/item03">Item03</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page01Side",
  data() {
    return {
      is: this.sideActive
    };
  },
  props: {
    sideActive: {
      type: Number,
      required: true
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/scss/app.scss";
.p-page01Side {
  @include mq(o-sp) {
    flex: 0 0 auto;
    width: 25%;
    min-width: 250px;
    margin-right: 70px;
  }
}
.p-page01SideTtl {
  background-color: $colorDark;
  @include mq(o-sp) {
    width: 100%;
    height: 250px;
    padding: 80px 0 0 30px;
  }
  @include mq(u-sp) {
    padding: 30px 0 30px 30px;
  }
}
.p-page01SideTtl__txt {
  display: inline-block;
  color: #fff;
  text-align: left;
  > h2 {
    line-height: 1.2;
  }
}
.p-page01Categoty__ttl {
  border-bottom: 1px solid $colorNormal;
}
.p-page01Categoty__list {
  @include mq(u-sp) {
    display: flex;
    justify-content: space-between;
  }
}
.p-page01Categoty__listItem {
  @include mq(o-sp) {
    border-bottom: 1px solid #ccc;
    overflow: hidden;
  }
  @include mq(u-sp) {
    font-size: 10px;
    text-align: center;
    border: 1px solid #ccc;
    width: 32%;
    height: 35px;
    line-height: 35px;
  }
}

.p-page01Categoty__listItem a {
  display: block;
  @include mq(o-sp) {
    padding: 15px 0 15px 10px;
    position: relative;
    cursor: pointer;
  }
}
.p-page01Categoty__listItem a:hover {
  @include mq(o-sp) {
    color: #fff;
    transition: color 0.2s ease-out;
    &:after {
      left: 0;
      transition: left 0.2s ease-out;
    }
  }
}
.p-page01Categoty__listItem a:after {
  @include mq(o-sp) {
    position: absolute;
    top: -1px;
    left: -100%;
    content: "";
    display: block;
    background-color: rgba($colorNormal, 0.7);
    width: 100%;
    height: 100%;
    z-index: -1;
  }
}
</style>
