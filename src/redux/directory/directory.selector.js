import { createSelector } from 'reselect';



const selectDirectory = state => state.directory ;


export const selcetDirectorySections = createSelector(
	[selectDirectory] , 

	(directory) =>directory.sections

)