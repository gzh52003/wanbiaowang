<template>
  <div class="home">
    <!-- 搜索栏 -->
    <div class="headers">
      <van-search shape="round" background="#fff" show-action placeholder="买表、修表、二手表交易">
        <template #left>
          <img src="../../public/img/head-logo.png" alt />
        </template>
        <template #action>
          <van-icon name="service-o" />
        </template>
      </van-search>
    </div>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in swipeData" :key="item.id">
        <img :src="item.src" alt />
      </van-swipe-item>
    </van-swipe>
    <!--  -->
    <van-row type="flex" justify="center" gutter="10">
      <van-col span="6">
        <van-icon name="certificate" />
        <span>正品直供</span>
      </van-col>
      <van-col span="6">
        <van-icon name="certificate" />
        <span>9年0假货</span>
      </van-col>
      <van-col span="6">
        <van-icon name="certificate" />
        <span>12期免息</span>
      </van-col>
      <van-col span="6">
        <van-icon name="certificate" />
        <span>终身售后</span>
      </van-col>
    </van-row>
    <!-- 商品分类 -->
    <van-grid :border="false" :column-num="5" icon-size="70" class="grid-goodsClassify">
      <van-grid-item
        v-for="item in goodsClassify"
        :key="item.text"
        :icon="item.src"
        :text="item.text"
      />
    </van-grid>
    <!-- 推荐商品 -->
    <van-tabs line-width="24">
      <van-tab title="为您推荐"></van-tab>
    </van-tabs>
    <!-- 商品列表 -->
    <van-grid :column-num="2" :border="false" class="grid-goodslist">
      <van-grid-item v-for="item in recommend" :key="item._id" @click="gotoDetail(item._id)"> 
          <van-image :src="item.img_url" />
          <p class="price">
            <del>{{item.price}}</del>
            <span>{{item.sales_price}}</span>
          </p>
          <h4>{{item.goods_name}}</h4>
          <div class="fq-tag">
          <van-tag plain type="primary" size="small" color="#c6a461">免息分期</van-tag>

          </div>
      </van-grid-item>
    </van-grid>
  </div>
</template>
<script>
import Vue from "vue";
import {
  Col,
  Grid,
  GridItem,
  Icon,
  Row,
  Search,
  Swipe,
  SwipeItem,
  Tab,
  Tabs,
  Tag,
} from "vant";
Vue.use(Search);
Vue.use(Icon);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Col);
Vue.use(Row);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Tag);

export default {
  name: "Home",
  data() {
    return {
      swipeData: [
        {
          id: 1,
          src:
            "https://image7.wbiao.co/mall/3f8a849173b947a2804e817efaa0c988.jpg?x-oss-process=image/resize,m_fill,w_700,color_f1f1f1",
        },
        {
          id: 2,
          src:
            "https://image7.wbiao.co/mall/8a8ee9551e514bbfbd7b5faade53a1bd.jpg?x-oss-process=image/resize,m_fill,w_700,color_f1f1f1",
        },
        {
          id: 3,
          src:
            "https://image7.wbiao.co/mall/b1b3dc72488a496c94f76cd86284959b.jpg?x-oss-process=image/resize,m_fill,w_700,color_f1f1f1",
        },
        {
          id: 4,
          src:
            "https://image7.wbiao.co/mall/897e090074da4f9ca6eb3ca51c0263e5.jpg?x-oss-process=image/resize,m_fill,w_700,color_f1f1f1",
        },
        {
          id: 5,
          src:
            "https://image7.wbiao.co/mall/1842f0c1ae2a41fb93ee48843ca9a0ab.jpg?x-oss-process=image/resize,m_fill,w_700,color_f1f1f1",
        },
        {
          id: 6,
          src:
            "https://image7.wbiao.co/mall/a05be13e0e2644febe2a1b474eb94e94.jpg?x-oss-process=image/resize,m_fill,w_700,color_f1f1f1",
        },
        {
          id: 7,
          src:
            "https://image7.wbiao.co/mall/22daa8163a8a41ecbd9fb12e49f99e12.jpg?x-oss-process=image/resize,m_fill,w_700,color_f1f1f1",
        },
        {
          id: 8,
          src:
            "https://image7.wbiao.co/mall/aee0f4573c8b440db07934928fb89b17.jpg?x-oss-process=image/resize,m_fill,w_700,color_f1f1f1",
        },
        {
          id: 9,
          src:
            "https://image7.wbiao.co/mall/6b70745c171b4bb5a67d53c7e0e5f85e.jpg?x-oss-process=image/resize,m_fill,w_700,color_f1f1f1",
        },
        {
          id: 10,
          src:
            "https://image7.wbiao.co/mall/3f8a849173b947a2804e817efaa0c988.jpg?x-oss-process=image/resize,m_fill,w_700,color_f1f1f1",
        },
        {
          id: 11,
          src:
            "https://image7.wbiao.co/mall/8a8ee9551e514bbfbd7b5faade53a1bd.jpg?x-oss-process=image/resize,m_fill,w_700,color_f1f1f1",
        },
      ],
      goodsClassify: [
        {
          src:
            "https://image7.wbiao.co/mall/1c876d358a2e4d29982d7fe47bd7f86b.png",
          text: "男表",
        },
        {
          src:
            "https://image7.wbiao.co/mall/b1d1c1e24d734e7fbe5eb939ef6f9357.png",
          text: "女表",
        },
        {
          src:
            "https://image7.wbiao.co/mall/bf766ae024cb43a6b1d299c3d08983f7.png",
          text: "奢华大牌",
        },
        {
          src:
            "https://image7.wbiao.co/mall/2e153c4853af442bbe87b9d744e9e08a.png",
          text: "限时秒杀",
        },
        {
          src:
            "https://image7.wbiao.co/mall/1900f5f6d7c34c1292c15386f680255a.png",
          text: "免费抽奖",
        },
        {
          src:
            "https://image7.wbiao.co/mall/476b4ef442c84d479919c1aecd3b0bf6.png",
          text: "精选新表",
        },
        {
          src:
            "https://image7.wbiao.co/mall/3674d14bd9894f4696dc3f44838f5b94.png",
          text: "二手表",
        },
        {
          src:
            "https://image7.wbiao.co/mall/2a403405c6cd489b82a760a46ffae05f.png",
          text: "手表行情",
        },
        {
          src:
            "https://image7.wbiao.co/mall/ab8097545c9a41e5b4db5767ca2a3417.png",
          text: "高价回收",
        },
        {
          src:
            "https://image7.wbiao.co/mall/904d4555d9854c01b5e2ffacc5062716.png",
          text: "维修保养",
        },
      ],
      recommend:[],
    };
  },
  methods: {
    async getRecommend(){
      const {data} = await this.$request.get('/goods/')
      console.log(data)
      this.recommend = data.data

    },
    gotoDetail(_id){
      this.$router.push({
        name:'Goods',
        params:{
          _id,
        }
      })
    }
  },
  created(){
    this.getRecommend()
  }
};
</script>
<style lang='scss'>
.headers {
  height: 50px;
  .van-search {
    padding: 3px 0 3px 12px;
    .van-cell {
      line-height: 16px;
    }
    img {
      width: 48px;
      height: 24px;
    }
    .van-search__action {
      width: 44px;
      height: 44px;
      padding: 0;
      text-align: center;
      i {
        line-height: 44px;
        font-size: 20px;
      }
    }
  }
}
.my-swipe {
  margin-left: 11px;
  padding: 10px 0;
  .van-swipe__indicators {
    bottom: 22px;
  }
  .van-swipe__track {
    .van-swipe-item {
      img {
        width: 353px;
        height: 200px;
        border-radius: 10px;
      }
    }
  }
}
.van-row {
  .van-col {
    text-align: center;
    font-size: 12px;
    color: #808080;
    line-height: 30px;
    span {
      line-height: 30px;
      vertical-align: top;
    }
    i {
      font-size: 14px;
      line-height: 30px;
      margin: 0 2px;
    }
  }
}
.grid-goodsClassify {
  .van-grid-item__content {
    padding: 9px 0 !important;
    span {
      margin-top: -10px !important;
    }
  }
}
.van-tab__text {
  font-size: 16px;
  font-weight: 700;
  color: #000;
}
.van-tabs__line {
  background-color: #ccaa7a;
}

.grid-goodslist{

  .price{
    margin:4px 0;
    padding:8px 8px 4px;
    font-size:14px;
    font-weight: 700;
  }
  h4{
    margin:0;
    font-size: 12px;
    color: #666;
    line-height: 18px;
    margin-bottom:5px;
  }
}

.fq-tag{
  width:100%;
  display:flex;
}
</style>