import React from 'react';
import { connect } from 'react-redux';

import MenuItem from '../menu-item/menu-item.component';

import { createStructuredSelector } from 'reselect';

import { selcetDirectorySections } from '../../redux/directory/directory.selector';

import './directory.style.scss';



const DirectoryMenu =({sections})=>{
	
	return(
	<div className="directory-menu">

		{
			sections.map(({id , ...otherStates})=>(
			<MenuItem key={id} {...otherStates} />
			))
		}

	</div>	
	)
}
const mapStateToProps = createStructuredSelector({
	sections: selcetDirectorySections
})	

export default connect(mapStateToProps)(DirectoryMenu);