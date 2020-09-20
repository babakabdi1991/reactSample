import React from 'react' ; 

import { connect } from 'react-redux';

import {createStructuredSelector} from 'reselect';

import PreviewCollection from '../preview-collection/preview-collection.component';

import { selectCollectionForPreview } from '../../redux/shop/shop.selector'


import './collections-overview.styles.scss' ; 




const CollectionsOverview = ({ collections }) =>{
	return(

	<div className = 'collections-overview'>
		{
			collections.map(({id , ...otherCollectionProps})=>(
				<PreviewCollection key={id} {...otherCollectionProps}/>
			))
		}
	</div>

)}

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionForPreview
})
export default connect(mapStateToProps)(CollectionsOverview)