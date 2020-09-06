<template>
    <div>
        <van-nav-bar
            left-text
            right-text="注册"
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
        />
        
    </div>
</template>
<script>
import Vue from "vue";
import { NavBar, Form } from "vant";
Vue.use(NavBar);
Vue.use(Form);
export default {
    methods: {
        onClickLeft() {
            history.go(-1);
        },
        onClickRight() {
            this.$router.push({
                path: "/reg"
            });
        }
    },
    created() {
        this.$parent.showMenu = false;
    }
};
</script>
<style lang='scss'>
</style>