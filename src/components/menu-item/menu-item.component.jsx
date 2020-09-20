import React from 'react';

import './menu-item.style.scss';
import {withRouter} from 'react-router-dom';

const MenuItem=({title , src , size , linkUrl ,match, history})=>(
		<div
		style={{backgroundImage: `url(${src})` }}
		 className= {`${size} menu-item`} onClick={()=>(history.push(`${match.url}${linkUrl}`))} >
			<div className="content">
				<h1 className="title">{title}</h1>
				<span className="subtitle">Shop Now</span>
			</div>
		</div>

	);

export default withRouter(MenuItem);