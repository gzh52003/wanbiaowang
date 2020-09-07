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
      :thumb="item.big_img_url"
      v-for="item in goodslist"
      :key="item._id"
      @click-thumb="gotoDetail(item._id)"
    >
      <template #tags class="tagsbutton van-checkbox">
        <van-checkbox v-model="item.checked" class="tagsbutton van-checkbox"></van-checkbox>
      </template>
      <template #price>
        <p class="price">
          <del>{{item.price}}</del>
          <span>{{item.sales_price}}</span>
        </p>
      </template>
      <template #footer>
        <van-button size="small" color="#f00" icon="delete" @click="removeItem(item._id)"></van-button>
      </template>
    </van-card>
    <div style="padding:10px">
      <van-button plain size="small" type="danger" @click="clearCart()">清空购物车</van-button>
    </div>
    <!-- 提交订单栏 -->
    <van-submit-bar :price="totalPrice" button-text="结算" @submit="onSubmit">
      <van-checkbox v-model="checkAll">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>
<script>
import Vue from "vue";
import { Card, Checkbox, NavBar, SubmitBar} from "vant";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

Vue.use(SubmitBar);
Vue.use(Checkbox);
Vue.use(NavBar);
Vue.use(Card);

export default {
  name: "cart",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      goodslist(state) {
        console.log(state.cart.goodslist);
        return state.cart.goodslist;
      },
    }),
    checkAll:{
      get(){
        return this.goodslist.every(item=>item.checked)
      },
      set(val){
        this.goodslist = this.goodslist.map(item=>{
          item.checked = val
          return item
        })
      }
    },
    totalPrice(){
      return this.$store.getters.totalPrice
    }
  },
  methods: {
    removeItem(id){
      this.$store.commit('remove',id)
    },
    clearCart(){
      this.$store.commit('clear')
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
.tagsbutton{
  position:absolute;
  top:35px;
  left:-130px;
    
}
.van-card{
  .price{
    margin:0;
  }
}
</style>