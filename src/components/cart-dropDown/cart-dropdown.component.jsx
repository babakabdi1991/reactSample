import React from 'react';

import CustomButton from '../custom-button/button.component';
import CartShopItem from '../cart-shop-item/cart-shop-item.component';
import { connect } from 'react-redux'

import { selectCartItems } from '../../redux/cart/cart.selectors';

import { toggleCartHidden } from '../../redux/cart/cart-action';


import { withRouter } from 'react-router-dom'

import './cart-dropdown.styles.scss'


const CartDropdown = ({cartItems , history , dispatch}) =>{
	return(
		<div className='cart-dropdown'>
			{
				cartItems.length ?(
					<div className='cart-items'>
						{
							cartItems.map( cartItem => <CartShopItem key={cartItem.id} item={cartItem} /> )
						}
					</div>):(
						<div className='empty-message'> Your cart is Empty </div>
					)
			}
			
			<CustomButton onClick={()=>{
				history.push('/checkout');
				dispatch(toggleCartHidden())
				}}

			>
				 GO TO CHECK OUT
		 	</CustomButton>
		</div>
	)

}

const mapToStateProps = (state) =>({
	cartItems:selectCartItems(state)
})

export default withRouter(connect(mapToStateProps)(CartDropdown));