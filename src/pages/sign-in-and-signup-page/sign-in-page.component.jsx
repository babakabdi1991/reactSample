import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/signup/sign-up.component';

import './sign-in-page.styles.scss';


const SingInAndSingUp = () =>(
		<div className='sign-in-and-sign-up'>
			<SignIn />
			<SignUp />
		 </div>
	)

export default SingInAndSingUp;