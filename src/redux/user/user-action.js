import {current_user} from './user.type'

export const setCurrentUser =(user)=>{
	return({
			type: current_user , 
			payload: user}
	)
}