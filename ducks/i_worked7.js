import * as utils from '../utils/duckHelpers';
import {createSelector} from 'reselect';
import {fromJS} from 'immutable';

export const types = {
	...utils.requestTypes('I_WORKED7'),
	I_WORKED7_GET: 'I_WORKED7_GET',
	I_WORKED7_SET: 'I_WORKED7_SET',
	I_WORKED7_SUCCESS: 'I_WORKED7_SUCCESS'
};

export const actions = {
	i_worked7Set: obj => utils.action(types.I_WORKED7_SET, obj)
};

const initialState = fromJS([]);

export default (state = initialState, action) => {
	switch (action.type) {
		case types.I_WORKED7_SET:
			return action.payload.data;

		case types.I_WORKED7_GET:
			return state;

		default:
			return state;
	}
};

export const getI_worked7 = state => state.get('app').get('i_worked7');

export const selectors = {
	getI_worked7: createSelector([getI_worked7], i_worked7 => i_worked7)
};
