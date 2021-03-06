import React from 'react';

import './checkout.styles.scss';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { selectCartItems } from '../../redux/cart/cart.selectors'
import { cartTotalMoney } from '../../redux/cart/cart.selectors'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'

const Checkout = ({ cartItems , Total }) =>(
	<div className='checkout-page'>
		<div className='checkout-header'>
			<div className='header-block'>
				<span> Products </span>
			</div>
			<div className='header-block'>
				<span> Description </span>
			</div>
			<div className='header-block'>
				<span> Quantity </span>
			</div>
			<div className='header-block'>
				<span> Price </span>
			</div>
			<div className='header-block'>
				<span> Remove </span>
			</div>
		</div>
		{ 
			cartItems.map( cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} /> ) 
		}

		<div className='total'> <span>Total: ${Total}</span>  </div>
	</div>
)

const mapStateToProps =createStructuredSelector({
	cartItems: selectCartItems  , 
	Total : cartTotalMoney
})

export default connect(mapStateToProps )(Checkout)