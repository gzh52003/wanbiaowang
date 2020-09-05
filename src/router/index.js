import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        redirect:{name:'Home'}
    },
    {
        path:'/home',
        name:'Home',
        component:Home
    },
    {
        path:'/list',
        name:'List',
        components:()=>import('../views/List.vue')
    },
    {
        path:'/goods',
        name:'Goods',
        components:()=>import('../views/Goods.vue')
    },
    {
        path:'/cart',
        name:'Cart',
        components:()=>import('../views/Cart.vue')
    },
    {
        path:'/login',
        name:'Login',
        components:()=>import('../views/Login.vue')
    },
    {
        path:'/reg',
        name:'Reg',
        components:()=>import('../views/Reg.vue')
    },
]

const router = new VueRouter({
    routes
})

export default router