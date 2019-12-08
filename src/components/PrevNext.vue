<template>
  <ul class="p-pagination">
    <li
      v-for="n of totalPage"
      :key="n"
      v-bind:class="{'u-curPage': n === currentPage, 'u-before': (n === isBefore) && (showRange < isBefore),'u-after': (n === isAfter) && ((totalPage - showRange) >= isAfter)}"
      v-show="showList[n]"
    >
      <a @click="paging(n)">{{n}}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "PrevNext",
  data() {
    return {
      currentPage: this.page,
      showList: [],
      showRange: 2,
      isBefore: "0",
      isAfter: "0"
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
  computed: {},
  methods: {
    catChange() {
      scrollTo(0, 0);
      this.currentPage = 1;
    },
    paging(i) {
      scrollTo(0, 0);
      this.currentPage = i;
      this.$emit("change", this.currentPage);
      this.showNumber(i);
    },
    showNumber(cur) {
      this.hiddenNumber();
      for (let i = 0; i < this.totalPage + 1; i++) {
        if (
          i === 1 ||
          i === this.totalPage ||
          Math.abs(i - cur) <= this.showRange
        ) {
          this.showList.splice(i, 1, true);
        }
      }
      this.isBefore = cur - this.showRange;
      this.isAfter = cur + this.showRange;
    },
    hiddenNumber() {
      for (let i = 0; i < this.totalPage + 1; i++) {
        this.showList.splice(i, 1, false);
      }
    }
  },
  mounted() {
    this.showNumber(1);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/scss/app.scss";
.p-pagination {
  text-align: center;
}
.p-pagination li {
  cursor: pointer;
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-weight: bold;
  background-color: $colorLight;
  color: #fff;
  &:not(:last-child) {
    margin-right: 10px;
  }
}
.p-pagination li a {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
