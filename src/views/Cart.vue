<template>
  <div class="cart">
    <!-- 导航栏 -->
    <van-nav-bar title="购物车" left-text="返回" left-arrow @click-left="onClickLeft" />
    <!-- 商品栏 -->
    <van-card
      :num="item.qty"
      :price="item.sales_price"
      :desc="item.category"
      :title="item.goods_name"
      :thumb="item.img_url"
      v-for="item in goodslist"
      :key="item._id"
      @click-thumb="gotoDetail(item._id)"
      
    >
      <template #tags class="tagsbutton van-checkbox">
        <input
          type="checkbox"
          v-bind:checked="selecteds.includes(item._id)"
          class="tagsbutton van-checkbox"
          @click.stop="selecte(item._id)"
        />
      </template>
      <template #price >
        <p class="price">
          <del>{{item.price}}</del>
          <span>{{item.sales_price}}</span>
        </p>
      </template>
      <template #footer >
        <van-button  size="small" color="#f00" icon="delete" @click="removeItem(item._id)"></van-button>
      </template>
    </van-card>
    <div style="padding:10px">
      <van-button
        v-if="goodslist.length"
        plain
        size="small"
        type="danger"
        @click="clearCart()"
      >清空购物车</van-button>
      <div v-else class="gotoShop_btn" @click="gotoHome()">
        <P>您的购物车没有商品！</P>
        <van-button type="warning">去逛逛</van-button>
      </div>
    </div>
    <!-- 提交订单栏 -->
    <van-submit-bar :price="totalPrice" button-text="结算" @submit="onSubmit">
      <van-checkbox v-model="checkAll">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>
<script>
import Vue from "vue";
import { Card, Checkbox, Dialog, NavBar, SubmitBar } from "vant";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

Vue.use(SubmitBar);
Vue.use(Checkbox);
Vue.use(NavBar);
Vue.use(Card);
Vue.use(Dialog);

export default {
  name: "cart",

  data() {
    return {
      selecteds: [],
    };
  },
  computed: {
    ...mapState({
      goodslist(state) {
        return state.cart.goodslist;
      },
    }),
    checkAll: {
      get() {
        return this.goodslist.every((item) =>
          this.selecteds.includes(item._id)
        );
      },
      set(val) {
        this.selecteds = val ? this.goodslist.map((item) => item._id) : [];
      },
    },
    totalPrice() {
      return this.$store.getters.totalPrice;
    },
  },
  methods: {
    gotoHome() {
      this.$router.push("/home");
    },
    selecte(id) {
      console.log(this.selecteds);
      if (this.selecteds.includes(id)) {
        this.selecteds = this.selecteds.filter((item) => item !== id);
      } else {
        this.selecteds.push(id);
      }
    },
    removeItem(id) {
      Dialog.confirm({
        message: "您确定要删除这件商品吗？",
      })
        .then(() => {
          this.$store.commit("remove", id);
        })
    },
    clearCart() {
      Dialog.confirm({
        message: "您确定要清空购物车吗？",
      })
        .then(() => {
          this.$store.commit("clear");
        })
    },
    gotoDetail(id) {
      this.$router.push({
        name: "Goods",
        params: {
          id,
        },
      });
    },
    onSubmit() {},
    onClickLeft() {
      history.go(-1);
    },
    ...mapGetters({}),
    ...mapMutations({}),
    ...mapActions({}),
    changeQty(_id, qty) {
      this.$store.dispatch("changeQtyAsync", { _id, qty });
    },
  },
  created() {
    this.goodslist;
  },
};
</script>
<style lang='scss'>
.van-card__thumb {
  margin-left: 30px;
}
.tagsbutton {
  position: absolute;
  top: 35px;
  left: -130px;
}
.van-card {
  .price {
    margin: 0;
  }
}
.gotoShop_btn {
  padding-top: 200px;
  display: flex;
  justify-content: center;
}
</style>