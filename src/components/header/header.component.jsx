import React from 'react';
import './header.style.scss';

import { connect } from 'react-redux'
import CartDropdown from '../cart-dropDown/cart-dropdown.component'
import {ReactComponent as Logo} from '../../assets/crown.svg' ; 


import CartIcon from '../cart-icon/CartIcon.component'
import {auth} from '../../firebase/firebase.util'
import {Link} from 'react-router-dom';

const Header =({currentUser , hidden})=>(

		<div className='header'>
			<Link  className='logo-container' to='/'>
				<Logo className='logo' />
			</Link>
			<div className='options'>

				<Link to='/SHOP' className='option'>
					SHOP
				</Link>

				<Link to='/SHOP' className='option'>
					CONTACT
				</Link>
				{
					currentUser ?
					<div className='option' onClick={()=>auth.signOut()} > Sign Out </div>:
					
					<Link className='option' to='/sign'>
						Sign In
					</Link>

				}
				<CartIcon />

			</div>
			{
				hidden ? (null) : (<CartDropdown />)
			}
			
		</div>

	);

const mapStateToPorps = ({ user: {currentUser} , cart:{hidden} })=>{
	return(
		{ currentUser ,hidden}
	)
}

export default connect(mapStateToPorps)(Header)