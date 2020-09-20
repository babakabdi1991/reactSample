import React  from 'react' ; 

import { Switch , Route , useRouteMatch   } from 'react-router-dom';


import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CategoryPages from '../category/category-collections.component';



const ShopPage =()=>{

	let {path } = useRouteMatch();
	console.log('this is the shop page')
	return(
	<div className='shop-page'>
		<Switch>

			<Route exact path={`${path}`} component={CollectionsOverview} />
			<Route exact path={`${path}/:catId`} component={CategoryPages} />

		</Switch>

	</div>
)}
	


export default (ShopPage);


