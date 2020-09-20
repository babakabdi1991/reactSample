import React from 'react';

import './checkout.styles.scss';

import { connect } from 'react-redux';

import { removeItemFromCart } from '../../redux/cart/cart-action';


const CheckoutItem = ({ cartItem:{ id, name , imageUrl , quantity  , price } ,removeItemFromCart }) =>(

	<div className='checkout-item'>
		<div className='image-container'>
			<img alt='item' src={imageUrl} />
		</div>
		<span className='name' >{name}</span>
		<span className='quantity' >
			<div className='arrow'>&#10094;</div>
				<span className='value'>{quantity}</span>
			<div className='arrow'>&#10095;</div>
		</span>
		<span className='price' >{price}</span>
		<div  className='remove-button' onClick={()=>  removeItemFromCart(id)}>
			<span>&#10008;</span>
		</div>
	</div>

)

const mapDispatchToProps = (dispatch)=>({
	removeItemFromCart: id=>dispatch(removeItemFromCart(id))
})


export default connect(null , mapDispatchToProps)(CheckoutItem)