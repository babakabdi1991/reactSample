import {cartActionType} from './cart-type' 


export  const toggleCartHidden = () =>(
	{
		type: cartActionType.TOGGLE_CART_HIDDEN
	})

export const addItemToCart =(item)=>(
	{
		type: cartActionType.ADD_ITEM , 
		payload: item
	})

export const removeItemFromCart =(id)=>({
	type: cartActionType.REMOVE_ITEM , 
	payload: id
})

export const decreaseCartQuantity = (id) =>({

	type: cartActionType.DECREASE_CART_QUANTITY , 
	payload: id

})
	