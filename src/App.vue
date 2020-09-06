<template>
  <div id="app">
    <router-view />
    <van-tabbar v-model="active" route v-show="showMenu">
      <van-tabbar-item
        :icon="item.icon"
        v-for="item in menu"
        :key="item.text"
        :to="item.path"
        class="iconsize"
      >{{item.text}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";
import { Image } from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Image)

export default {
  data() {
    return {
      active: "",
      showMenu:true,
      menu: [
        { name: "home", path: "/home", icon: "home-o", text: "首页" },
        {
          name: "consult",
          path: "/consult",
          icon: "phone-circle-o",
          text: "咨询",
        },
        {
          name: "selectWatch",
          path: "/list",
          icon: "wap-home-o",
          text: "选表",
        },
        { name: "cart", path: "/cart", icon: "shopping-cart-o", text: "购物车" },
        { name: "mine", path: "/mine", icon: "user-o", text: "我的" },
      ],
    };
  },
};
</script>

<style lang="scss">
.iconsize .van-icon {
  font-size: 30px;
}
.price {
  del {
    color: #999;
    margin-right: 5px;
    &::before {
      content: "￥";
    }
  }
  span {
    color: #f00;
    &::before {
      content: "￥";
    }
  }
}
</style>
