<template>
<div id="mine" class="mine">
    <div id="member-top" class="member-top">
        <div style="overflow:hidden;height:154px">
            <p id="st" class="setting"><van-icon name="setting-o" id="st-o" class="st-o"/></p>
            <van-image round width="64" height="64" style="float:left" src="/img/touxiang.jpg" />
            <div style="float:left;margin-top:13px">
                <div @click="gologin" :v-if="showgolog">
                    <p style="margin:0 0 2px 0;font-size:16px" >登录/注册</p>
                    <p>登录享优惠</p>
                </div>
            </div>
        </div>
        <van-row>
            <van-col span="8" v-for="item in nav" :key="item.name" :id="item.name">
                <van-icon style="display:block;" :name="item.icon" />
                {{item.text}}
            </van-col>
        </van-row>
    </div>
        <div class="ser" id="ser">
            <p>我的服务<span><van-icon name="service-o"/>联系万表</span></p>
            <van-row>
                <van-col span="6" v-for="item in mineser" :key="item.name" :id="item.name">
                    <div class="navicon" :style="{background:'url(/img/minejlt.png)no-repeat '+item.url}" style="width:60px;height:60px;margin:0 auto;"  ></div>
                    {{item.text}}
                </van-col>
            </van-row>
        </div>
</div>
</template>
<script>
import Vue from 'vue'
import { Image as VanImage , Icon,Col, Row} from 'vant';
Vue.use(VanImage);
Vue.use(Icon);
Vue.use(Col);
Vue.use(Row);
export default {
    name:'mine',
    data(){
        return {
            showMenu:true,
            showgolog:true,
            nav:[
                {
                    name:'perdata',
                    text:'个人资料',
                    icon:'edit'
                },
                {
                    name:'address',
                    text:'收货地址',
                    icon:'location-o'
                },
                {
                    name:'favorites',
                    text:'我的收藏',
                    icon:'star-o'
                },
            ],
            mineser:[
                {
                    name:'mypresale',
                    text:'我的预售',
                    url:'0 -130px'
                },
                {
                    name:'giftList',
                    text:'我的礼品单',
                    url:'0 -65px'
                },
                {
                    name:'aftersale',
                    text:'售后服务',
                    url:'-65px -65px'
                },
                {
                    name:'mycrops',
                    text:'我的青苗',
                    url:'-130px 0'
                },
                {
                    name:'invoice',
                    text:'发票管理',
                    url:'-130px -65px'
                },
                {
                    name:'coupon',
                    text:'优惠券',
                    url:'0 0'
                },
                {
                    name:'balance',
                    text:'余额',
                    url:'-65px 0'
                },
                {
                    name:'footprint',
                    text:'足迹',
                    url:'-65px -130px'
                },
                {
                    name:'comment',
                    text:'我的评论',
                    url:'-130px -130px'
                },
                {
                    name:'recommend',
                    text:'推荐',
                    url:'-195px 0'
                },
                {
                    name:'housekeeper',
                    text:'手表管家',
                    url:'-195px -65px'
                },
                {
                    name:'service',
                    text:'维修订单',
                    url:'-195px -130px'
                },
            ]
        }
    },
    created() {
        this.$parent.showMenu = true;
        if ( typeof(localStorage.userInfo) == "undefined" ){
            this.showgolog=true
        } else {
            this.showgolog=false
        }
    },
    methods:{
        gologin(){
            this.$router.push({
                path:'/login'
            })
        }
    }
}
</script>
<style lang='scss' scoped>
p{
    margin: 0;
    padding: 0;
}
.mine{
    font-size: 12px;
}
.ser{
    background: #fff;
    color: #000;
    p{
        line-height: 44px;
        font-weight: bold;
        padding: 0 12px 0 0;
        margin: 0 0 0 12px;
        border-bottom: 1px solid #f1f1f1;
        span{
            font-weight: normal;
            float: right
        }
    };
    .van-row{
        background: #fff;
        text-align: center;
        .van-col{
            height: 80px;
            .navicon{
                background-size:255px !important;
            }
        }
        .van-col::before{
            width: 0;
        }
    }
}
.member-top{
    background: url(/img/minebg.png)no-repeat;
    background-size: 100% 100%;
    color: #fff;
    height: 206px;
    .setting{
        text-align: right;
        padding: 0;
        margin: 0;
        .st-o{
            font-size: 20px;
            line-height: 44px;
            margin-right: 20px;
        }
    }
    .van-image{
        margin: 0 13px 0 24px;
    }
    .van-row{
        font-size: 12px;
        text-align: center;
        margin-top: 0;
        background: rgba(0,0,0,.35);
        .van-col{
            height: 52px;
            position: relative;
            .van-icon{
                margin: 8px 0 4px 0;
                font-size: 16px
            }
        }
        .van-col::before{
            content: '';
            height: 100%;
            width: 1px;
            background: #ddd;
            position: absolute;
            top: 0;
            right: 0;
            opacity: .2
        }
    }
}
</style>