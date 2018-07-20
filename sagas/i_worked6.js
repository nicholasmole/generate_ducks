import {all, put, takeLatest} from 'redux-saga/effects';
import {types as i_worked6Types} from '../ducks/i_worked6';

export function * watchI_worked6() {
	yield takeLatest(i_worked6Types.I_WORKED6_GET, onI_worked6Get);
	yield takeLatest(i_worked6Types.I_WORKED6_SUCCESS, onI_worked6GetResponse);
}

export function * onI_worked6Get({payload}) {
	payload.method = 'get';
	return yield payload;
}

export function * onI_worked6GetResponse({response, payload}) {
	if (payload.action === 'get' && response && payload.dataset === 'i_worked6') {
		return yield all([
			put({
				type: i_worked6.I_WORKED6_GET,
				payload: response
			})
		]);
	}
}
