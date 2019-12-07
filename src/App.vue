<template>
  <div class="l-wrap">
    <div id="app">
      <!-- <div class="l-main"> -->
      <div v-bind:class="{'u-scrollStop': isMenuShow === true}">
        <HeaderItem @menuMethods="updateMenu" />
        <main class="l-main">
          <router-view />
        </main>
        <FooterItem />
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import HeaderItem from "./components/HeaderItem";
import FooterItem from "./components/FooterItem";
import Home from "./views/Home";
export default {
  name: "App",
  data() {
    return {
      isMenuShow: ""
    };
  },
  components: {
    HeaderItem,
    FooterItem,
    Home
  },
  methods: {
    updateMenu(isMenuShow) {
      this.isMenuShow = isMenuShow;
    }
  }
};
</script>

<style lang="scss">
@import "./assets/scss/app.scss";
.l-wrap {
}
</style>
