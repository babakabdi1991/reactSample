import React from 'react';
import { useParams }  from 'react-router-dom';


const TestComponent = ()=>{

	let { catId } = useParams();

	console.log(catId)

	

	return(
			
			<div>
				<h1> thisi is text page </h1>
				<h3>{catId}</h3>
			</div>

	)}


export default (TestComponent);