import React from 'react'; 

import './sign-up.styles.scss';
import FromInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/button.component';

import {auth , createUserProfileDocument} from '../../firebase/firebase.util';


class SignUp extends React.Component{
	constructor(){
		super();

		this.state ={

			displayName : '' , 
			email : '' , 
			password: '' , 
			confirmPassword: ''
		}
	}


	handleSubmit = async (event)=>{
		
		event.preventDefault();

		const {displayName , email , password , confirmPassword} = this.state;

		if(password !== confirmPassword){
			alert("your passwords don't match");
			return;
		}

		try{
			const {user} = await auth.createUserWithEmailAndPassword(email , password);

			await createUserProfileDocument(user , {displayName});

			this.setState({
				displayName : '' , 
				email : '' , 
				password: '' , 
				confirmPassword: ''
			})

		}catch(err){
			console.error(err);
		}

	}
	handleChange = (event)=>{
		
		const {name , value} = event.target;
		this.setState({ [name] :value });
	}	

	render(){

		const {displayName , email , password , confirmPassword} = this.state;
		return(
				<div  className='sign-up'>
					<h2 className='title'>I Do not have a account</h2>

					<span> sign up with email and password</span>

					<form className='sign-up-form' onSubmit={this.handleSubmit} >
						<FromInput 
							type='text' 
							name='displayName'
							value={displayName}
							onChange={this.handleChange}
							label='display Name'
							required
						/>

						<FromInput 
							type='email' 
							name='email'
							value={email}
							onChange={this.handleChange}
							label='Email'
							required
						/>


						<FromInput 
							type='password' 
							name='password'
							value={password}
							onChange={this.handleChange}
							label='Password'
							required
						/>


						<FromInput 
							type='password' 
							name='confirmPassword'
							value={confirmPassword}
							onChange={this.handleChange}
							label='Confirm Password'
							required
						/>

						<CustomButton type='submit'> Sign Up </CustomButton>

					</form>
				</div>
			)
	}
}

export default SignUp;