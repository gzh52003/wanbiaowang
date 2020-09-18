<template>
  <!-- 商品搜索 -->
  <div class="goods">
    <van-search v-model="value1" shape="round" background="#ccc" placeholder="请输入搜索关键词" />
    <van-dropdown-menu>
      <van-dropdown-item v-model="value" :options="option" />
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>

    <van-row>
      <van-col class="content_list" span="24" type="flex" justify="space-around">
        <van-grid direction="vertical" :column-num="2" class="man_list">
          <template v-if="this.value===0">
            <template v-if="this.value2==='a'">
              <van-grid-item v-for="item in watch" :key="item._id">
                <!-- <img src="/pic/regpic.jpeg" alt class="regpic" /> -->
                <van-image :src="item.img_url" @click="gotoDetail(item._id)" />
                <img src="/pic/pic_FOUR.png" alt class="pic_FOUR" />

                <p class="price">
                  <del>{{item.price}}</del>
                  <span class="sales_price">{{item.sales_price}}</span>
                </p>
                <h4 class="good_symble">{{item.goods_name}}</h4>
              </van-grid-item>
            </template>
            <template v-if="this.value2==='b'">
              <van-grid-item v-for="item in priceWatch" :key="item._id">
                <!-- <img src="/pic/regpic.jpeg" alt class="regpic" /> -->
                <van-image :src="item.img_url" @click="gotoDetail(item._id)" />
                <img src="/pic/pic_FOUR.png" alt class="pic_FOUR" />

                <p class="price">
                  <del>{{item.price}}</del>
                  <span class="sales_price">{{item.sales_price}}</span>
                </p>
                <h4 class="good_symble">{{item.goods_name}}</h4>
              </van-grid-item>
            </template>
            <template v-if="this.value2==='c'">
              <van-grid-item v-for="item in sales_qtyWatch" :key="item._id">
                <!-- <img src="/pic/regpic.jpeg" alt class="regpic" /> -->
                <van-image :src="item.img_url" @click="gotoDetail(item._id)" />
                <img src="/pic/pic_FOUR.png" alt class="pic_FOUR" />

                <p class="price">
                  <del>{{item.price}}</del>
                  <van-tag type="warning" plain text-color="#ad0000" style="heiht:25px">销量</van-tag>
                  {{item.sales_qty}}
                  <span class="sales_price">{{item.sales_price}}</span>
                </p>
                <h4 class="good_symble">{{item.goods_name}}</h4>
              </van-grid-item>
            </template>
          </template>

          <template v-else-if="this.value===1">
            <van-grid-item v-for="item in manWatch" :key="item._id">
              <img src="/pic/regpic.jpeg" alt class="regpic" />
              <van-image :src="item.img_url" @click="gotoDetail(item._id)" />
              <img src="/pic/pic_FOUR.png" alt class="pic_FOUR" />

              <p class="price">
                <del>{{item.price}}</del>
                <span class="sales_price">{{item.sales_price}}</span>
              </p>
              <h4 class="good_symble">{{item.goods_name}}</h4>
            </van-grid-item>
          </template>
          <template v-if="this.value===2">
            <van-grid-item v-for="item in womanWatch" :key="item._id">
              <img
                src="http://www.chachaba.com/news/uploads/180914/5034_180914170428_1.jpg"
                alt
                class="regpic"
              />
              <van-image lazy-load :src="item.img_url" @click="gotoDetail(item._id)" />
              <img src="/pic/pic_FOUR.png" alt class="pic_FOUR" />

              <p class="price">
                <del>{{item.price}}</del>
                <span class="sales_price">{{item.sales_price}}</span>
              </p>
              <h4 class="good_symble">{{item.goods_name}}</h4>
            </van-grid-item>
          </template>
        </van-grid>
      </van-col>
    </van-row>
  </div>
</template>
<script>
import Vue from "vue";
import {
  DropdownMenu,
  DropdownItem,
  Sidebar,
  SidebarItem,
  Search,
  Col,
  Row,
  Image,
  Grid,
  GridItem,
  Lazyload,
  Tag,
} from "vant";
// import { mapState } from "vuex";

Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Search);
Vue.use(Col);
Vue.use(Row);
Vue.use(Image);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Lazyload);
Vue.use(Tag);
export default {
  name: "List",
  data() {
    return {
      priceWatch: [],
      sales_qtyWatch: [],
      watch: [],
      manWatch: [],
      womanWatch: [],
      activeKey: 0,
      value1: "",
      value2: "a",
      value: 0,
      switch1: false,
      switch2: false,
      option: [
        { text: "全部商品", value: 0 },
        { text: "男士表", value: 1 },
        { text: "女士表", value: 2 },
      ],
      option2: [
        { text: "默认排序", value: "a" },
        { text: "价格排序", value: "b" },
        { text: "销量排序", value: "c" },
      ],
    };
  },
  computed: {},
  methods: {
    onConfirm() {
      this.$refs.item.toggle();
    },
    gotoDetail(id) {
      // this.$router.push(`/goods/${id}`)
      this.$router.push({
        name: "Goods",
        params: {
          id,
        },
      });
    },
    async getAllWatch() {
      const { data: allWatch } = await this.$request.get("/goods", {
        params: {
          size: 80,
        },
      });
      this.watch = allWatch.data;
    },
    async getManWatch() {
      const data1 = await this.$request.get("/category/男士表");
      this.manWatch = data1.data.data;
    },
    async getWomanWatch() {
      const data2 = await this.$request.get("/category/女士表");
      this.womanWatch = data2.data.data;
    },

    async getPriceWatch() {
      const { data: priceWatch } = await this.$request.get("/goods", {
        params: {
          sort: "sales_price,-1",
          size: 0,
        },
      });
      this.priceWatch = priceWatch.data;
    },

    async getSales_qty() {
      const { data: sales_qtyWatch } = await this.$request.get("/goods", {
        params: {
          sort: "sales_qty,-1",
          size: 0,
        },
      });
      this.sales_qtyWatch = sales_qtyWatch.data;
    },
  },
  created() {
    this.getAllWatch();
    this.getManWatch();
    this.getWomanWatch();
    this.getPriceWatch();
    this.getSales_qty();
  },
};
</script>

<style lang="scss" scoped>
.sales_price {
  position: absolute;
  top: -41px;
  left: 113px;

  color: #ffffff;
  font-weight: 800px;

  &::before {
    content: "￥";
  }
}

.van-search {
  position: fixed;
  top: 0;
  left: 0;
  background-color: #ffffff !important;
  width: 100%;
  z-index: 999;

  .van-field__control {
    width: 100%;
  }
}
.van-dropdown-menu {
  height: 30px;
  position: fixed;
  top: 54px;
  z-index: 100;
  width: 100%;

  .van-dropdown-menu__bar {
    height: 30px;

    .van-dropdown-menu__item {
      height: 30px;
    }
  }
}
.nav_bar {
  position: fixed;
  top: 54px;
  left: 0px;
  border-right: 2px solid #ccc;
  background-color: #ffffff;
  bottom: 50px;
  z-index: 999;
}
.van-row {
  margin-top: 102px;
}
// .content_list{
//   margin-left: ;
// }
.man_list {
  display: flex;
  background-color: #f1f1f1;
  justify-content: space-around;
}
.good_symble {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  height: 20px;
  font-size: 14px;
  font-weight: 400;
  margin-top: 0;
}
.man_list .van-grid-item {
  float: left;
  width: 50%;
  margin-bottom: 10px;

  img {
    width: 100%;
  }

  .van-grid-item__content {
    width: 100%;
    border: 10px solid #f1f1f1;
    margin-right: 10px;
  }
}
.price {
  position: relative;
  margin-bottom: 8px;
  font-weight: 700;
  align-self: start;
  del {
    color: gray;
    margin-right: 10px;

    &::before {
      content: "￥";
    }
  }
}
.van-sidebar-item--select {
  background-color: #515151;
  color: white;
  border-radius: 10px;
}
.regpic {
  height: 40px;
}
</style>