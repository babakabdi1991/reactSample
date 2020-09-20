import React from 'react';

import './button.styles.scss';


const CustomButton =({children , inverted , ...otherProps})=>(
		<button className={`${inverted ? 'inverted': 'null'} custom-button`} {...otherProps}>
			{children}
		</button>
	);


export default CustomButton;