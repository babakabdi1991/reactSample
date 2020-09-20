import {cartActionType} from './cart-type' 
import { checkAddItemToCart , removeItem } from './cart.util';

const initState={
	hidden: true,
	cartItems: []
}


const cartReducer = (state = initState , action) =>{
	switch(action.type){
		case cartActionType.TOGGLE_CART_HIDDEN:
			return{
				...state ,
				hidden: !state.hidden
			}
		case cartActionType.ADD_ITEM:
			return{
				...state ,
				cartItems : checkAddItemToCart( state.cartItems ,action.payload)
			}
		case cartActionType.REMOVE_ITEM:
			return{
				...state ,
				cartItems : state.cartItems.filter( 
					cartItem => cartItem.id !== action.payload 
				) 
			}
		case cartActionType.DECREASE_CART_QUANTITY:
			return{
				...state ,
				cartItems: removeItem( state.cartItems , action.payload )
			}	
		default:
			return state;
	}
}

export default cartReducer;