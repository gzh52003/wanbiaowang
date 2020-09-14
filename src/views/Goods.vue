<template>
  <div class="Detail">
    <van-row>
      <van-col span="4">
        <img src="/pic/logo.png" alt @click="gotoHome()" />
      </van-col>
      <van-col span="4">商品</van-col>
      <van-col span="4">详情</van-col>
      <van-col span="4">评价</van-col>
      <van-col span="4">门店</van-col>
      <van-col span="4">。。。</van-col>
    </van-row>
    <van-grid>
      <van-grid-item class="item">
        <img src="/pic/regpic.jpeg" alt class="regpic" />
        <van-image round width="50%" height="50%" :src="Detailgoods.img_url" />
        <img src="/pic/pic_FOUR.png" alt class="pic_FOUR" />
        <p class="price">
          原价：
          <del>{{Detailgoods.price}}</del>
          <span>{{Detailgoods.sales_price}}</span>
        </p>
        <h4>{{Detailgoods.goods_name}}</h4>
      </van-grid-item>
    </van-grid>
    <!-- 加入购物车 -->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
      <van-goods-action-icon
        icon="cart-o"
        text="购物车"
        :badge="cartlist.length"
        @click="goto('/cart')"
      />
      <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
      <van-goods-action-button type="warning" text="加入购物车" @click="add2cart" />
      <van-goods-action-button type="danger" text="立即购买" @click="buyNow" />
    </van-goods-action>
  </div>
</template>
<script>
import Vue from "vue";
import {
  Grid,
  GridItem,
  Col,
  Row,
  Checkbox,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
} from "vant";
import {mapState} from 'vuex';

Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Col);
Vue.use(Row);
Vue.use(Checkbox);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
export default {
  name: "Goods",

  data() {
    return {
      Detailgoods: [],
      checked: "",
    };
  },
  computed: {
    ...mapState({
      cartlist(state) {
        return state.cart.goodslist;
    },

    })
  },
  methods: {
    goto(path) {
      this.$router.push(path);
    },
    onSubmit() {
      this.$router.push("/home");
    },
    gotoHome() {
      this.$router.push("/home");
    },
    async getDetailData(id) {
      const { data: Detailgoods } = await this.$request.get("/goods/" + id, {});

      this.Detailgoods = Detailgoods.data;
    },


    // 添加购物车
     add2cart(){
      // 添加当前商品到购物车;
      // 判断当前商品是否已经存在购物车中
      // 存在：数量+1
      // 不存在：添加到购物车
      const {_id} = this.Detailgoods;
      const current = this.cartlist.filter(item=>item._id === _id)[0]
      if(current){
        this.$store.commit('changeQty',{_id,qty:current.qty+1})
      }else{
        const goods = {
          ...this.Detailgoods,
          qty:1,
          checked:false
        }
        
        // 调用mutation方法
        this.$store.commit('add',goods);

      }

    },

    // 立即购买
    buyNow(){
      // 添加当前商品到购物车，并跳转到购物车页面
      this.add2cart();
      this.$router.push('/cart')
    }
  },
  async created() {
    const { id } = this.$route.params;
    this.getDetailData(id);
  },
};
</script>

<style lang="scss" scoped>
.van-row {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: #ffffff;
  width: 100%;
}
.van-grid {
  margin-top: 44px;
  position: relative;
  justify-content: center;
}
.Detail .van-col {
  font-weight: 800;
  line-height: 44px;
  height: 44px;
  text-align: center;

  img {
    height: 24px;
    width: 100%;
    margin-top: 10px;
  }
}
.Detail .van-grid-item {
  float: left;
  width: 100%;
  margin-bottom: 10px;

  .regpic {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  .pic_FOUR {
    top: 300px;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100px;
    z-index: 2;
  }

  .van-grid-item__content {
    align-items: center;
    width: 100%;
    border: 10px solid #f1f1f1;
    margin-right: 10px;

    .van-image {
      align-items: center;
      width: 350px !important;
    }
  }
}
h4 {
  margin-top: 0;
}
.price {
  margin-top: 80px;
  font-weight: 700;
  del {
    color: gray;
    margin-right: 10px;

    &::before {
      content: "￥";
    }
  }

  span {
    position: absolute;
    top: 353px;
    right: 18px;
    font-size: 36px;
    z-index: 999;
    color: #ffffff;
    font-weight: 800px;

    &::before {
      content: "￥";
    }
  }
}
.van-goods-action {
  z-index: 1001;
}
</style>