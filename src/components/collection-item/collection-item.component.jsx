import React from 'react';

import CustomButton from '../custom-button/button.component'

import { addItemToCart } from '../../redux/cart/cart-action';

import {connect} from 'react-redux';


import './collection-item.style.scss';

const CollectionItem=({ item , addItemToCart})=>{
	const { name , price , imageUrl } = item ;

	return(

		<div className='collection-item'>
			<div className='image' style={{ backgroundImage: `url(${imageUrl})` }}>
			</div>
			<div className='collection-footer'>
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</div>
			<CustomButton onClick={()=>addItemToCart(item)} inverted > Add To Cart </CustomButton>
		</div>

	)};

export const mapDispatchToProps=(dispatch)=>{
	return({
		addItemToCart : (item)=>dispatch(addItemToCart(item))
	})
}

export default connect(null , mapDispatchToProps )(CollectionItem);