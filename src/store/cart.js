// import request from '../utils/request'
const cart = {
    state:{
        goodslist:[
          // {
        //   _id : "5f51f52bd9b097882e73bf8b",
        //   "goods_id" : "25572",
        //   "goods_name" : "瑞士艺术制表大师 爱宝时（EPOS）-Ladies女士系列 心跳时光 4314.133.20.50.10 机械女表",
        //   "big_img_url" : "/img/80b6a4d2175c4028999e3e2eab242d3f_big.jpg",
        //   "category" : "女士表",
        //   "sales_price" : "580",
        //   "price" : "6960",
        //   "sales_qty" : "968",
        //   "img_url" : "/img/80b6a4d2175c4028999e3e2eab242d3f.jpg"
        // },
        // {
        //   _id : "5f51f52bd9b097882e73bf8e",
        //   "goods_id" : "25578",
        //   "goods_name" : "瑞士艺术制表大师 爱宝时（EPOS）-Ladies女士系列 梦想家 4387.152.24.28.15 机械女表",
        //   "big_img_url" : "/img/9591bc752bdb4992bfa3c56bf56667ff_big.jpg",
        //   "category" : "女士表",
        //   "sales_price" : "613.3",
        //   "price" : "7360",
        //   "sales_qty" : "285",
        //   "img_url" : "/img/9591bc752bdb4992bfa3c56bf56667ff.jpg"
        // },
        // {
        //   _id : "5f51f52bd9b097882e73bf91",
        //   "goods_id" : "42531",
        //   "goods_name" : "瑞士艺术制表大师 爱宝时（EPOS）-Ladies 女士系列 罗马假期 4390.152.20.16.30 机械女表",
        //   "big_img_url" : "/img/36c7dec6f3f44491a31ad99ad4338fea_big.jpg",
        //   "category" : "女士表",
        //   "sales_price" : "680",
        //   "price" : "8160",
        //   "sales_qty" : "179",
        //   "img_url" : "/img/36c7dec6f3f44491a31ad99ad4338fea.jpg"
        // }
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