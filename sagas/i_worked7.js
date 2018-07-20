import {all, put, takeLatest} from 'redux-saga/effects';
import {types as i_worked7Types} from '../ducks/i_worked7';

export function * watchI_worked7() {
	yield takeLatest(i_worked7Types.I_WORKED7_GET, onI_worked7Get);
	yield takeLatest(i_worked7Types.I_WORKED7_SUCCESS, onI_worked7GetResponse);
}

export function * onI_worked7Get({payload}) {
	payload.method = 'get';
	return yield payload;
}

export function * onI_worked7GetResponse({response, payload}) {
	if (payload.action === 'get' && response && payload.dataset === 'i_worked7') {
		return yield all([
			put({
				type: i_worked7.I_WORKED7_GET,
				payload: response
			})
		]);
	}
}
