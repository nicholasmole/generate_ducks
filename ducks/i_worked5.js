import * as utils from '../utils/duckHelpers';
import {createSelector} from 'reselect';
import {fromJS} from 'immutable';

export const types = {
	...utils.requestTypes('I_WORKED5'),
	I_WORKED5_GET: 'I_WORKED5_GET',
	I_WORKED5_SET: 'I_WORKED5_SET',
	I_WORKED5_SUCCESS: 'I_WORKED5_SUCCESS'
};

export const actions = {
	i_worked5Set: obj => utils.action(types.I_WORKED5_SET, obj)
};

const initialState = fromJS([]);

export default (state = initialState, action) => {
	switch (action.type) {
		case types.I_WORKED5_SET:
			return action.payload.data;

		case types.I_WORKED5_GET:
			return state;

		default:
			return state;
	}
};

export const getI_worked5 = state => state.get('app').get('i_worked5');

export const selectors = {
	getI_worked5: createSelector([getI_worked5], i_worked5 => i_worked5)
};
