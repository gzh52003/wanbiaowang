<template>
  <div class="cart">
    <!-- 导航栏 -->
    <van-nav-bar title="购物车" left-text="返回" left-arrow @click-left="onClickLeft" />
    <!-- 商品栏 -->
    <van-card
      num="2"
      tag="标签"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      origin-price="10.00"
    />
    <!-- 提交订单栏 -->
    <van-submit-bar :price="0" button-text="结算" @submit="onSubmit">
      <van-checkbox v-model="checkAll">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>
<script>
import Vue from "vue";
import { Card, Checkbox, NavBar, SubmitBar } from "vant";

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
    checkAll() {
      return true;
    },
  },
  methods: {
    onSubmit() {},
    onClickLeft() {
      history.go(-1);
    },
  },
};
</script>
<style lang='scss'>
</style>