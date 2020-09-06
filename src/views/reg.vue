<template>
    <div>
        <van-nav-bar 
            left-text=''
            left-arrow
            @click-left="onClickLeft"
        />
        <h2>注册万表会员</h2>
        <p>有账号？<span @click="gologin">去登录</span></p>
        <van-form style="padding:0 7.5%" 
            :model="ruleForm"
            ref="ruleForm"
            v-model="ruleForm"
            :rules="rules"
        >
            <van-field
                v-model="ruleForm.username"
                name="username"
                placeholder="手机号"
            />
            <van-row>
                <van-col span="16">
                    <van-field
                        v-model="ruleForm.captcha"
                        name="captcha"
                        placeholder="图形验证码"
                    />
                </van-col>
                <van-col span="8">
                    <span id="svgVcode" @click="addVcode()">
                        <div v-html="svgVcode"></div>
                    </span>
                </van-col>
            </van-row>
            <van-row>
                <van-col span="16">
                    <van-field
                        v-model="ruleForm.smscode"
                        name="smscode"
                        placeholder="短信验证码"
                    />
                </van-col>
                <van-col span="8">
                    <van-button @click="yzm">
                        发送验证码
                    </van-button>
                </van-col>
            </van-row>
            <van-field
                v-model="ruleForm.password"
                type="password"
                name="password"
                placeholder="设置密码"
            />
            <div style="margin:40px 0 0 0;font-size:16px">
                <van-button round block type="info" native-type="submit" @click="zc()">注 册</van-button>
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
            ruleForm:{
                username:'',
                captcha:'',
                password:'',
                smscode:'',
                telyzm:''
            },
            rules:{
                username:[{type:"number",min:11,max:11,trigger:"blur"}]
            },
            svgVcode:''
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
        async yzm(){
            // console.log(formName);
            if(!this.ruleForm.username){
                Toast('请输入手机号')
            }else if(!this.ruleForm.captcha){
                Toast('请输入验证码')
            }else{
                const {ruleForm}=this;
                const {username,captcha} = ruleForm;
                const {data} = await this.$request.get("/reg",{
                    params:{username,captcha}
                })
                console.log(data);
                if(data.code === 20){
                    return Toast('验证码不正确')
                }else if(data.code === 9){
                    return Toast("此号码已注册")
                }else{
                    this.telyzm = Math.round(Math.random()*9999).toString().padStart( 4 , "0")
                    console.log('本次注册验证码为：',this.telyzm);
                }
            }
        },
        async zc(){
            // this.$refs[formName].validate((valid)=>{
            //     if(valid){
            if(this.ruleForm.smscode == this.telyzm){
                const {ruleForm}=this;
                const {username,password} = ruleForm;
                const {data} = await this.$request.post("/reg",{
                    username,password
                })
                if(data.code === 1){
                    await Toast('注册成功')
                    this.$router.push("./login")
                }

            }
            //     }
            // })
        },
        async addVcode() {
            const { data } = await this.$request.get(`/vcode`);
            this.svgVcode = data.data
        },
    },
    created() {
        this.$parent.showMenu = false;
    }
}
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
    .van-col{
        .van-cell{
            border-bottom: 1px solid #ebedf0;
            margin: 0;
        }
        .van-button{
            width: 100%;
            background: none;
            border:none;
            border-bottom: 1px solid #ebedf0;
            span{
                margin: 0;
                color: #999;
            }
        }
        span{
            display: block;
            line-height: 44px;
            height: 44px;
            position: relative;
            div{
                display: block;
                height: 44px;
                border-bottom: 1px solid #ebedf0;
                // width: 106px !important;
                // border: 1px solid #000;
                margin-top: -1px;
                position: absolute;
                svg{
                    // padding: 0;
                    height: 40px !important;
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