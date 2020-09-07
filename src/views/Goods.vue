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
      <van-goods-action-icon icon="cart-o" text="购物车" :badge="cartlist.length" @click="goto('/cart')" />
      <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
      <van-goods-action-button type="warning" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" />
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
  computed:{
    cartlist(){
      return this.$store.state.cart.goodslist;
    }
  },
  methods: {
    goto(path){
      this.$router.push(path)
    },
    onSubmit() {
      this.$router.push("/home");
    },
    gotoHome() {
      this.$router.push("/home");
    },
    async getDetailData(id){
      const { data: Detailgoods } = await this.$request.get("/goods/"+id,{}
    );

     this.Detailgoods = Detailgoods.data
    },
  },
  async created() {
    const { id } = this.$route.params;
    this.getDetailData(id)
  },
};
</script>

<style lang="scss" scoped>
// .van-search{
//   position: fixed;
//   top: 0;
//   left: 0;
//   background-color:#FFFFFF !important;
//   width: 100%;
//   z-index: 999;

//   .van-field__control{
//     width: 100%;
//   }
// }
// .nav_bar {
//   position: fixed;
//   top: 54px;
//   left: 0px;
//   border-right: 2px solid #ccc;
//   background-color: #ffffff;
//   bottom: 50px;
//   z-index: 999;
// }
// .van-row {
//   margin-top: 54px;
// }
// // .content_list{
// //   margin-left: ;
// // }
// .man_list {
//   display: flex;
//     background-color: #F1F1F1;
//   justify-content: space-around;
// }
// .good_symble{
//   white-space:nowrap;
//   overflow: hidden;
//   text-overflow:ellipsis;
//   width: 100%;
//   height: 20px;
//   font-size: 14px;
//   font-weight: 400;
//   margin-top: 0;
// }
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

.van-goods-action{
    z-index: 1001;
}

// .van-sidebar-item--select {
//   background-color: #515151;
//   color: white;
//   border-radius: 10px;
// }
</style>