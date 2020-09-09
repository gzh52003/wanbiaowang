<template>
    <div>
        <van-nav-bar
            left-text
            right-text="注册"
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
        />
        <h2>账号登录</h2>
        <van-form style="padding:0 7.5%" 
        >
            <van-field
                v-model="ruleForm.username"
                name="username"
                placeholder="手机号"
            />
            
            <van-field
                v-model="ruleForm.password"
                type="password"
                name="password"
                placeholder="设置密码"
            />
            <div style="margin:40px 0 0 0;font-size:16px">
                <van-button round block type="info" native-type="submit" @click="btn">登 录</van-button>
            </div>
        </van-form>
    </div>
</template>
<script>
import Vue from 'vue'
import { NavBar,Form,Button,Field,Col, Row,Toast } from "vant";
Vue.use(Form);
Vue.use(Field);
Vue.use(Button);
Vue.use(NavBar);
Vue.use(Col);
Vue.use(Row);
Vue.use(Toast);
export default {
    data(){
        return{
            ruleForm:{
                username:'',
                password:''
            }
        }
    },
    methods: {
        onClickLeft() {
            history.go(-1);
        },
        onClickRight() {
            this.$router.push({
                path: "/reg"
            });
        },
        async btn(){
            const { ruleForm } = this;
            const { username, password} = ruleForm;
            const {data} = await this.$request.get("/login",{
                params:{username,password},
            })
            if (data.code === 1) {
                Toast('登录成功')
                this.$router.replace('/mine')
                localStorage.setItem('userInfo',JSON.stringify(data.data))
            }else{
                Toast('登录失败')
            }
        }
    },
    created() {
        this.$parent.showMenu = false;
    }
};
</script>
<style lang='scss' scoped>
h2,p,span{
    text-align: center;
    margin: 0;
    padding: 0;
}
p,div{
    font-size: 14px
}
h2{
    color: #666;
    margin: 80px 0 50px;
}
p{
    height: 44px;
    margin: 22px 0 20px;
    color: #ccc;
}
/deep/ .van-nav-bar{
    border: none;
}
/deep/ .van-nav-bar__text{
    color: #999;
}
/deep/ .van-nav-bar__arrow{
    color: #666;
    font-size: 22px;
}
.van-form{
    .van-field{
        margin: 22px 0 20px;
        padding: 0 0 0 8px;
        height: 44px;
        line-height: 44px;
    }
    .van-row{
        margin-top: 22px;
    }
    .van-cell::after{
        width: 100%;
        left: 0;
        right: 0;
    }
    div{
        .van-button{
            border-radius: 0;
            background: linear-gradient(-180deg,#3a3a3a 0,#1c1c1c 100%);
            color: #ccaa7a;
        }
    }
}
</style>