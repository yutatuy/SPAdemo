<template>
  <div class="l-wrap">
    <div id="app">
      <Loading @LoadingEnd="Loaded" />
      <div v-bind:class="{'u-scrollStop': isMenuShow === true || isLoading === true}">
        <HeaderItem @menuMethods="updateMenu" />
        <main class="l-main">
          <router-view />
        </main>
        <FooterItem />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderItem from "./components/HeaderItem"; //ヘッダー
import FooterItem from "./components/FooterItem"; //フッダー
import Loading from "./components/Loading"; //ローディング
import Home from "./views/Home";
export default {
  name: "App",
  data() {
    return {
      isMenuShow: false,
      isLoading: true
    };
  },
  components: {
    HeaderItem,
    FooterItem,
    Loading,
    Home
  },
  methods: {
    //SPのメニューが開いたときにスクロールを停止する
    updateMenu(isMenuShow) {
      this.isMenuShow = isMenuShow;
    },
    //Loadingのときにスクロールを停止する
    Loaded() {
      this.isLoading = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.kv_leave {
  opacity: 1;
}
.kv_leave-to {
  opacity: 0;
}
.kv_leave-active {
  transition: opacity 0.5s;
}
</style>
