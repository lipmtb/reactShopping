import { combineReducers } from 'redux'
import user from './userinfoReducer'
import cart from './cartReducer'
import category from './categoryReducer'


export default combineReducers({ //总state的
    user, //用户信息，包含token
    cart,  //用户购物车
    category
})