<template>
    <div class="home">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item>1</van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
        </van-swipe>
    </div>
</template>
<script>
import Vue from 'vue'
import {Swipe,SwipeItem} from 'vant'
Vue.use(Swipe)
Vue.use(SwipeItem)
export default {
    name:'Home',
    components:{},
    async created(){
        const {data} = await this.$request.get('/goods',{
            params:{
                size:5,
                sort:'sales_qty'
            }
        })
    }
}
</script>
<style lang='scss'>
</style>