import React from 'react';

import './category.styles.scss';

// import { useParams }  from 'react-router-dom'
 
import {connect} from 'react-redux' ;
import { selectCollection } from '../../redux/shop/shop.selector';
import CollectionItem from '../../components/collection-item/collection-item.component';


const CategoryPages = ({collection , match })=>{

	let { catId } = match.params.catId;

	console.log("this is collection")

	console.log(collection)
	console.log("this is categro page")

	const {title , items} = collection;


	return( 
		<div className='collection-page'>
			<h2 className='collection-title'>{title} </h2>
			<div className='items'>
				{items.map(item=>(
					<CollectionItem  key={catId} item={item} />
				))}
			</div>
		</div>

	)}

const mapStateToProps = (state , ownProps )=>({
	collection: selectCollection(ownProps.match.params.catId)(state)
})

export default connect(mapStateToProps)(CategoryPages);