import * as utils from '../utils/duckHelpers';
import {createSelector} from 'reselect';
import {fromJS} from 'immutable';

export const types = {
	...utils.requestTypes('I_WORKED6'),
	I_WORKED6_GET: 'I_WORKED6_GET',
	I_WORKED6_SET: 'I_WORKED6_SET',
	I_WORKED6_SUCCESS: 'I_WORKED6_SUCCESS'
};

export const actions = {
	i_worked6Set: obj => utils.action(types.I_WORKED6_SET, obj)
};

const initialState = fromJS([]);

export default (state = initialState, action) => {
	switch (action.type) {
		case types.I_WORKED6_SET:
			return action.payload.data;

		case types.I_WORKED6_GET:
			return state;

		default:
			return state;
	}
};

export const getI_worked6 = state => state.get('app').get('i_worked6');

export const selectors = {
	getI_worked6: createSelector([getI_worked6], i_worked6 => i_worked6)
};
