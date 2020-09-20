import React , {Component} from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';

import CustomButton from '../custom-button/button.component';

import {signInWithGoogle} from '../../firebase/firebase.util';


class SignIn extends Component{

	constructor(props){
		super(props);

		this.state ={
			email :'' , 
			password:''
		}
	}

	handleSubmit =(e)=>{
		e.preventDefault();
	}

	handleChange = (e)=>{

		const {name , value} = e.target;

		this.setState({ [name]: value })
	}

	render(){

		return(
				<div className='sign-in'>
					<h2> I Alredy has Account:</h2>
					<span>Sign In with your Email and Password. </span>


					<form onSubmit={this.handleSubmit}>

						<FormInput 
							label='Email' 
							name='email' 
							type='email' 
							value={this.state.email} 
							required 
							handleChange={this.handleChange}
						/>
						<FormInput 
							label='Password' 
							name='password' 
							type='password' 
							value={this.state.password} 
							required 
							handleChange={this.handleChange}
						/>
						
						<div className='buttons'>

							<CustomButton type='submit' > Sign In</CustomButton>
							<CustomButton onClick={ signInWithGoogle }> Sign With Google {' '} </CustomButton>
						</div>

					</form>

				</div>
			)

	}
}

export default SignIn;