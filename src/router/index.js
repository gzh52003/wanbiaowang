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
        component:()=>import('../views/List.vue')
    },
    {
        path:'/goods/:id',
        name:'Goods',
        component:()=>import('../views/Goods.vue')
    },
    {
        path:'/cart',
        name:'Cart',
        component:()=>import('../views/Cart.vue')
    },
    {
        path:'/login',
        name:'Login',
        component:()=>import('../views/Login.vue')
    },
    {
        path:'/reg',
        name:'reg',
        component:()=>import('../views/reg.vue')
    },
    {
        path:'/mine',
        name:'Mine',
        component:()=>import('../views/Mine.vue')
    },
    {
        path:'/order',
        name:'Order',
        component:()=>import('../views/Order.vue')
    },
    {
        path:'/consult',
        name:'Consult',
        component:()=>import('../views/Consult.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router