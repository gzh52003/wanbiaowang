<template>
  <!-- 商品搜索 -->
  <div class="goods">
    <van-search
      class="search"
    
      shape="round"
      background="#ccc"
      placeholder="请输入搜索关键词"
    />

    <van-row>
      <van-col class="nav_bar" span="6">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item title="男士表" />
          <van-sidebar-item title="女士表" />
        </van-sidebar>
      </van-col>
      <van-col span="6">
        <!-- <van-sidebar v-model="activeKey">
          <van-sidebar-item title="男士表" />
          <van-sidebar-item title="女士表" />
        </van-sidebar> -->
      </van-col>
      <van-col class="content_list" span="18">
        <van-grid direction="vertical" :column-num="3" class="man_list">
          <van-grid-item v-for="item in menWatch" :key="item._id" >
        <van-image :src="item.img_url"  @click="gotoDetail(item._id)" />
        <h4>{{item.goods_name}}</h4>
        <p class="price">
          <del>{{item.price}}</del>
          <span>{{item.sales_price}}</span>
        </p>
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
} from "vant";

Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Search);
Vue.use(Col);
Vue.use(Row);
export default {
  name: "List",
  data() {
    return {
      menWatch: [],
      activeKey: 0,
      value1: 0,
      value2: "a",
      option1: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 },
      ],
      option2: [
        { text: "默认排序", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" },
      ],
    };
  },
  methods:{
        gotoDetail(id){

      // this.$router.push(`/goods/${id}`)
      this.$router.push({
        name:'Detail',
        params:{
          id
        }
      })
    }
  },
  async created() {
    const { data: menWatch } = await this.$request.get("/goods");
    this.menWatch = menWatch;
    console.log(this.menWatch);
  },
};
</script>

<style lang="scss" scope>
// .van-sidebar-item{
.nav_bar {
  position: fixed;
  top:54px;
  left: 0px;
  border-right: 2px solid #ccc;
    background-color: #FFFFFF;
    bottom: 50px;
    z-index: 999;
}
.van-row {
  margin-top: 54px;
}
// .content_list{
//   margin-left: ;
// }
.man_list .van-grid-item{
  float: left;
  width: 50%;

  margin-bottom: 10px;

}
// }
.van-sidebar-item--select {
  background-color: #515151;
  color: white;
  border-radius: 10px;
}
</style>