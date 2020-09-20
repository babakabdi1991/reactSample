const INITIAL_STATE = {
	sections:
	[
		{	
			title:'HATS' , 
			src:'https://i.ibb.co/cvpntL1/hats.png',
			id:1,
			linkUrl: 'hats'

		},
		{
			title:'SNEAKERS' , 
			src:'https://i.ibb.co/0jqHpnp/sneakers.png',
			id:2 ,
			linkUrl: '/sneakers'
		},
		{
			title:'JACKETS' , 
			src:'https://i.ibb.co/px2tCc3/jackets.png',
			id:3,
			linkUrl: 'jackets'
		},
		{
			title:'MENS' , 
			src:'https://i.ibb.co/R70vBrQ/men.png',
			id:4 , 
			size:'large',
			linkUrl: 'mens'

		},
		{
			title:'WOMENS' , 
			src:'https://i.ibb.co/GCCdy8t/womens.png',
			id:5 , 
			linkUrl: 'womens',
			size:'large'

		},
	]
}

const directoryReducer = ( state=INITIAL_STATE , action )=>{
	switch(action.type){
		default: 
			return state
	}
}
export default directoryReducer