// import request from '../utils/request'
const cart = {
    state:{
        goodslist:[
      ]
    },
    getters:{
      totalPrice(state){
          // console.log('getters=',state, getters, rootState, rootGetters)
          return state.goodslist.reduce((pre,item)=>pre+item.sales_price*item.qty,0)*100;
      },
      test(){
          return 'cart'
      }
  },
    mutations:{
      remove(state,_id){
        state.goodslist = state.goodslist.filter(item=>item._id!==_id)
      },
      clear(state){
        state.goodslist = [];
      },
      // checkAll(state){

      // },
      
      add(state,goods){
       state.goodslist.unshift(goods)
       console.log(state.goodslist);
       console.log('add to cart',goods)
   },
          //  修改数量
           changeQty(state,{_id,qty}){
            state.goodslist = state.goodslist.map(item=>{
                if(item._id === _id){
                    item.qty = qty;
                }
                return item;
            });
          }
    },
         // 添加商品到购物车


      actions:{
    }
}

export default cart;