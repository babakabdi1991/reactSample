export const checkAddItemToCart = (cardItems , cardItemToAdd) =>{
	
	const isExistItem = cardItems.find((cardItem) => (cardItem.id === cardItemToAdd.id));

	if(isExistItem){
		return cardItems.map( cardItem => 
			(cardItem.id === cardItemToAdd.id) ?
			(
				{...cardItem , quantity: cardItem.quantity +1}
			): cardItem 
		 )

	}else{
		return([...cardItems , {...cardItemToAdd , quantity: 1}])
	}	

}

export const removeItem = (cartItems , cartItemsForRemove)=>{

	const existItem = cartItems.find( cartItem=> cartItem.id === cartItemsForRemove.id );

	if(existItem.quantity === 1){
		return( cartItems.filter(cartItem=> cartItem.id !== existItem.id) )
	}  

	return cartItems.map( cartItem => cartItem.id === cartItemsForRemove.id ? 
		({ ...cartItem , quantity: cartItem.quantity-1 }):
		({cartItem}) 
	)
}



