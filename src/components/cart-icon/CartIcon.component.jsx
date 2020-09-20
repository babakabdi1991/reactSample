import React from 'react';

import { connect } from 'react-redux' ;

import {selectCartItemsCount} from '../../redux/cart/cart.selectors'

import { toggleCartHidden } from '../../redux/cart/cart-action'

import { ReactComponent as ShopIcon } from '../../assets/shopping-bag.svg' ;

import './CartIcon.styles.scss'

const CartIcon =({ toggleCartHidden , itemCount }) =>{
	return(
		<div className='cart-icon' onClick={toggleCartHidden}>
			<ShopIcon  className='shopping-icon'/>
			<span className='item-count'> {itemCount} </span>
		</div>
	)

}

// const mapStateToProps = ({ cart:{cartItems} }) =>({
// 	itemCount : cartItems.reduce((summationItems , cartItem)=> summationItems+cartItem.quantity  , 0)		
// })

const mapStateToProps = (state)=>({
	itemCount : selectCartItemsCount(state)
})


const mapDispatchToProps = (dispatch) =>{

	return{
		toggleCartHidden: ()=> dispatch(toggleCartHidden())
	}
}

export default connect(mapStateToProps , mapDispatchToProps)(CartIcon)