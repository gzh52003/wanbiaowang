<template>
  <!-- 商品搜索 -->
  <div class="goods">
    <van-search shape="round" background="#ccc" placeholder="请输入搜索关键词" />

    <van-row>
      <van-col class="content_list" span="24" type="flex" justify="space-around">
        <van-grid direction="vertical" :column-num="2" class="man_list">
          <van-grid-item v-for="item in menWatch" :key="item._id">
             <img src="/pic/regpic.jpeg" alt class="regpic" />
            <van-image :src="item.img_url" @click="gotoDetail(item._id)" />
            <img src="/pic/pic_FOUR.png" alt class="pic_FOUR" />

              <p class="price">
              <del>{{item.price}}</del>
              <span>{{item.sales_price}}</span>
            </p>
            <h4 class="good_symble">{{item.goods_name}}</h4>
          
          </van-grid-item>
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
  Lazyload
} from "vant";

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
export default {
  name: "List",
  data() {
    return {
      menWatch: [],
      activeKey: 0,
      value1: 0,
      value2: "a"
    };
  },
  methods: {
    gotoDetail(id) {
      // this.$router.push(`/goods/${id}`)
      this.$router.push({
        name:'Goods',
        params:{
          id
        },
      });
    },
  },
  async created() {
    const { data: menWatch } = await this.$request.get("/goods",{
      params:{
        size:80
      }
    });
    this.menWatch = menWatch;
    console.log(this.menWatch);
  },
};
</script>

<style lang="scss" scoped>
// .van-sidebar-item{
.van-search{
  position: fixed;
  top: 0;
  left: 0;
  background-color:#FFFFFF !important;
  width: 100%;
  z-index: 999;

  .van-field__control{
    width: 100%;
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
  margin-top: 54px;
}
// .content_list{
//   margin-left: ;
// }
.man_list {
  display: flex;
    background-color: #F1F1F1;
  justify-content: space-around;
}
.good_symble{
  white-space:nowrap;
  overflow: hidden;
  text-overflow:ellipsis;
  width: 100%;
  height: 20px;
  font-size: 14px;
  font-weight: 400;
  margin-top: 0;
}
.man_list .van-grid-item {

  float: left;
  width:50%;
  margin-bottom: 10px;

  img{
    width: 100%;
  }

  .van-grid-item__content{
    width: 100%;
    border: 10px solid #F1F1F1;
    margin-right: 10px;
  }
}
.price{
  margin-bottom: 8px;
  font-weight: 700;
  align-self: start;
  del{
    color: gray;
    margin-right: 10px;

    &::before{
      content: '￥';
    }
  }

  span{
    color: red;
    font-weight: 800px;

    &::before{
      content:'￥'
    }
  }
}
.van-sidebar-item--select {
  background-color: #515151;
  color: white;
  border-radius: 10px;
}
</style>