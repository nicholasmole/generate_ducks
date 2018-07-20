import * as utils from '../utils/duckHelpers';
import {createSelector} from 'reselect';
import {fromJS} from 'immutable';

export const types = {
	...utils.requestTypes('TESTINPUTNAME'),
	TESTINPUTNAME_GET: 'TESTINPUTNAME_GET',
	TESTINPUTNAME_SET: 'TESTINPUTNAME_SET',
	TESTINPUTNAME_SUCCESS: 'TESTINPUTNAME_SUCCESS'
};

export const actions = {
	testInputNameSet: obj => utils.action(types.TESTINPUTNAME_SET, obj)
};

const initialState = fromJS([]);

export default (state = initialState, action) => {
	switch (action.type) {
		case types.TESTINPUTNAME_SET:
			return action.payload.data;

		case types.TESTINPUTNAME_GET:
			return state;

		default:
			return state;
	}
};

export const getTestInputName = state => state.get('app').get('testInputName');

export const selectors = {
	getTestInputName: createSelector([getTestInputName], testInputName => testInputName)
};
