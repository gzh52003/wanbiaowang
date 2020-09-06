<template>
    <div>
        <van-nav-bar 
            left-text=''
            left-arrow
            @click-left="onClickLeft"
        />
        <h2>注册万表会员</h2>
        <p>有账号？<span @click="gologin">去登录</span></p>
        <van-form style="padding:0 7.5%">
            <van-field
                v-model="username"
                name="pattern"
                placeholder="手机号"
                :rules="[{pattern}]"
            />
            <van-row>
                <van-col span="16">
                    <van-field
                        v-model="captcha"
                        name="图形验证码"
                        placeholder="图形验证码"
                    />
                </van-col>
                <van-col span="8">
                    <span id="svgVcode" @click="addVcode()"></span>
                </van-col>
            </van-row>
            <van-row>
                <van-col span="16">
                    <van-field
                        v-model="smscode"
                        name="短信验证码"
                        placeholder="短信验证码"
                    />
                </van-col>
                <van-col span="8">
                    <van-button @click="yzm(captcha)">
                        发送验证码
                    </van-button>
                </van-col>
            </van-row>
            <van-field
                v-model="password"
                type="password"
                name="设置密码"
                placeholder="设置密码"
            />
            <div style="margin:40px 0 0 0;font-size:16px">
                <van-button round block type="info" native-type="submit" @click="zc">注 册</van-button>
            </div>
            <p>点击注册意味着阁下同意<span>《万表用户协议》</span></p>
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
    data () {
        return {
            username:'',
            password:'',
            captcha:'',
            smscode:'',
            pattern:/\d{11}/
        }
    },
    mounted: function () {
        this.addVcode();
    },
    methods: {
        onClickLeft(){
            history.go(-1)
        },
        gologin(){
            this.$router.push({
                path: "/login"
            });
        },
        yzm(vercode){
            if(!this.username){
                Toast('请输入手机号')
            }else if(!this.captcha){
                Toast('请输入验证码')
            }else{
                console.log('vercode=',vercode);
            }
        },
        zc(){},
        async addVcode() {
            const { data } = await this.$request.get(`/vcode`);
            const svgVcode = document.querySelector("#svgVcode");
            if (data.code === 1) {
                svgVcode.innerHTML = data.data;
            }
        },
    },
    created() {
        this.$parent.showMenu = false;
    }
}
</script>
<style lang='scss' scope>
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
    margin-top: 25px;
}
p{
    height: 44px;
    margin: 22px 0 20px;
    color: #ccc;
    span{
        color: #999;
        text-decoration: underline
    }
}
.van-nav-bar{
    height: 44px;
    width: 106px;
    .van-nav-bar__left{
        padding: 0 10px;
        font-size: 30px;
    }
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
    .van-col::after{
        width: 100%;
        left: 0;
        right: 0;
    }
    .van-col{
        .van-cell{
            border-bottom: 1px solid #ebedf0;
            margin: 0;
        }
        .van-button{
            background: none;
            border:none;
            border-bottom: 1px solid #ebedf0;
            // margin-top: 22px;
            span{
                margin: 0;
                color: #999;
            }
        }
        span{
            display: block;
            line-height: 44px;
            height: 44px;
            // margin-top: 22px;
            position: relative;
            svg{
                display: block;
                width: 106px;
                margin-top: -2px;
                position: absolute;
                rect{
                    padding: 0;
                }
            }
        }
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