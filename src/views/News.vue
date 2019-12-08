<template>
  <div class="p-news c-page u-pt-50">
    <div class="l-main__inner">
      <div class="p-news__content u-flex--pc">
        <div class="p-newsSide">
          <div class="p-newsSideTtl u-mb-30">
            <dl class="p-newsSideTtl__txt">
              <h2 class="u-fs-40-26">News</h2>
              <p>最新情報</p>
            </dl>
          </div>
          <div class="p-newsCategoty">
            <h2 class="p-newsCategoty__ttl u-fs-18 u-mb-20">CATEGORY</h2>
            <ul class="p-newsCategoty__list u-mb-50-sp">
              <li class="p-newsCategoty__listItem" v-bind:class="{'u-catActive': catActive == 1}">
                <a v-on:click="changeCat('1')">ALL</a>
              </li>
              <li class="p-newsCategoty__listItem" v-bind:class="{'u-catActive': catActive == 2}">
                <a v-on:click="changeCat('2')">CAT1</a>
              </li>
              <li class="p-newsCategoty__listItem" v-bind:class="{'u-catActive': catActive == 3}">
                <a v-on:click="changeCat('3')">CAT2</a>
              </li>
              <li class="p-newsCategoty__listItem" v-bind:class="{'u-catActive': catActive == 4}">
                <a v-on:click="changeCat('4')">CAT3</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="p-newsCon">
          <ul class="p-newsConList">
            <li v-for="(item, i) in this.filterList" :key="i" class="u-mb-50">
              <div class="p-newsDetail">
                <div class="p-newsDetailTop u-fs-18"></div>
                <ul class="p-newsDetailInfo">
                  <li class="p-newsDetailInfo__date">{{item.date}}</li>
                  <li class="p-newsDetailInfo__cat">{{item.category}}</li>
                </ul>
                <h2 class="p-newsDetailTtl u-fs-18 u-mb-20">{{item.title}}</h2>
                <div class="p-newsDetailContent">
                  <div class="u-mb-10" v-html="item.content">{{item.content}}</div>
                  <ul class="p-modalList u-flex">
                    <li v-for="(images, j) in item.image" :key="j" class="p-modalList__item">
                      <figure class="p-modalList__img" @click="openModal(i,j)">
                        <img v-bind:src="require('../../static/images/news/' + images.img)" />
                      </figure>
                      <transition name="modal" appear>
                        <div class="p-modalList__overlay" @click="closeModal(i,j)" v-if="false">
                          <div class="p-modalList__window">
                            <img v-bind:src="require('../../static/images/news/' + images.img)" />
                          </div>
                        </div>
                      </transition>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          <!-- pagenation -->
          <PrevNext ref="prext" :page="page" :totalPage="totalPage" @change="onPageChange" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PrevNext from "../components/PrevNext";
import ImgModal from "../components/ImgModal";
import NewsList from "../api/newsList.js";
export default {
  name: "Home",
  components: {
    PrevNext,
    ImgModal
  },
  data() {
    const list = NewsList.fetch();
    const perPage = 3;
    const maxImg = 8;
    return {
      list,
      catActive: "1",
      page: 1,
      perPage,
      maxImg,
      totalPage: Math.ceil(list.length / perPage),
      count: list.length,
      modalActiveList: [],
      message: ""
    };
  },
  computed: {
    filterList() {
      return this.list.slice(
        (this.page - 1) * this.perPage,
        this.page * this.perPage
      );
    }
  },
  methods: {
    changeCat: function(num) {
      let changeList = [];
      if (num === "1") {
        this.changeList = NewsList.fetch();
      } else if (num === "2") {
        this.changeList = NewsList.fetch().filter(function(value) {
          return value.category === "CAT1";
        });
      } else if (num === "3") {
        this.changeList = NewsList.fetch().filter(function(value) {
          return value.category === "CAT2";
        });
      } else {
        this.changeList = NewsList.fetch().filter(function(value) {
          return value.category === "CAT3";
        });
      }
      this.catActive = num;
      this.page = 1;
      this.list = this.changeList;
      this.totalPage = Math.ceil(this.list.length / this.perPage);
      this.$refs.prext.catChange();
    },
    onPageChange(page) {
      this.page = page;
    },
    openModal(i, j) {
      this.modalActiveList[i].splice(j, 1, true);
    },
    closeModal(i, j) {
      this.modalActiveList[i].splice(j, 1, false);
    }
  },
  created() {
    //modalActiveListを初期化
    for (let i = 0; i < this.perPage; i++) {
      this.modalActiveList[i] = [];
      for (let j = 0; j < this.maxImg; j++) {
        this.modalActiveList[i].splice(j, 1, false);
      }
    }
  }
};
</script>

<style lang="scss" scoped >
@import "../assets/scss/app.scss";
// オーバーレイのトランジション
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.4s;
  // オーバーレイに包含されているモーダルウィンドウのトランジション
  .p-modalList__window {
    transition: opacity 0.4s, transform 0.4s;
  }
}
// ディレイを付けるとモーダルウィンドウが消えた後にオーバーレイが消える
.modal-leave-active {
  transition: opacity 0.6s ease 0.4s;
}
.modal-enter,
.modal-leave-to {
  opacity: 0;

  .p-modalList__window {
    opacity: 0;
    transform: translateY(-20px);
  }
}

.p-newsDetailInfo {
  > li {
    display: inline-block;
    vertical-align: middle;
  }
  &__date {
    font-size: 13px;
  }
  &__cat {
    font-size: 13px;
    position: relative;
    width: 80px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    border: 1px solid $colorDark;
    @include mq(u-sp) {
      width: 100px;
      height: 25px;
      line-height: 25px;
    }
  }
}
.p-newsDetailTtl {
  border-bottom: 2px solid $colorNormal;
}
.p-newsSide {
  @include mq(o-sp) {
    flex: 0 0 auto;
    width: 25%;
    min-width: 250px;
    margin-right: 70px;
  }
}
.p-newsSideTtl {
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
.p-newsSideTtl__txt {
  display: inline-block;
  color: #fff;
  text-align: left;
  > h2 {
    line-height: 1.2;
  }
}
.p-newsCategoty__ttl {
  border-bottom: 1px solid $colorNormal;
}
.p-newsCategoty__list {
  @include mq(u-sp) {
    display: flex;
    justify-content: space-between;
  }
}
.p-newsCategoty__listItem {
  @include mq(o-sp) {
    border-bottom: 1px solid #ccc;
    overflow: hidden;
  }
  @include mq(u-sp) {
    text-align: center;
    border: 1px solid #ccc;
    width: 23%;
    height: 35px;
    line-height: 35px;
  }
}
.p-newsCategoty__listItem a {
  display: block;
  @include mq(o-sp) {
    padding: 15px 0 15px 10px;
    position: relative;
    cursor: pointer;
  }
}
.p-newsCategoty__listItem a:hover {
  @include mq(o-sp) {
    color: #fff;
    transition: color 0.2s ease-out;
    &:after {
      left: 0;
      transition: left 0.2s ease-out;
    }
  }
}
.p-newsCategoty__listItem a:after {
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
.p-modalList__overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}
.p-modalList__window {
  background: #fff;
  overflow: hidden;
  width: 95%;
}
.p-modalList {
  flex-wrap: wrap;
}
.p-modalList__item {
  margin: 0 10px 20px 0;
  @include mq(o-sp) {
    cursor: pointer;
    width: calc(33% - 20px / 3);
    &:nth-child(3n) {
      margin: 0;
    }
  }
  @include mq(u-sp) {
    width: calc(50% - 10px / 2);
    &:nth-child(2n) {
      margin: 0;
    }
  }
}
</style>
