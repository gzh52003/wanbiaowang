import Vue from 'vue';
import Vuex from 'vuex';
import cart from './cart';

Vue.use(Vuex);

const store = new Vuex.Store({
    // store模块化
    modules:{
        cart,
    }
})

export default store;