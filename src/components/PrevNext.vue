<template>
  <div class="p-pagination">
    <a v-if="currentPage != 1" class="prev" v-on:click="onPrev()">
      <span>&lt;</span>&lt; 前へ
    </a>
    <div class="total">ページ {{currentPage}}/{{totalPage}}</div>
    <a class="next" v-if="currentPage != totalPage" v-on:click="onNext()">
      次へ &gt;
      <span>&gt;</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "PrevNext",
  data() {
    return {
      currentPage: this.page
    };
  },
  props: {
    page: {
      type: Number,
      required: true
    },
    totalPage: {
      type: Number,
      required: true
    }
  },
  computed: {
    prevPage() {
      return Math.max(this.currentPage - 1, 1);
    },
    nextPage() {
      return Math.min(this.currentPage + 1, this.totalPage);
    }
  },
  methods: {
    onPrev() {
      scrollTo(0, 0);
      this.currentPage = this.prevPage;
      this.$emit("change", this.currentPage);
    },
    onNext() {
      scrollTo(0, 0);
      this.currentPage = this.nextPage;
      this.$emit("change", this.currentPage);
    },
    catChange() {
      this.currentPage = 1;
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/scss/app.scss";
.p-pagination {
  text-align: center;
}
.p-pagination * {
  display: inline;
}
a {
  cursor: pointer;
  border: 0;
  background: none;
  font-size: initial;
  margin: 0 1rem;
  > span {
    color: $colorNormal;
  }
}
.next span {
  position: relative;
  left: -5px;
}
</style>
