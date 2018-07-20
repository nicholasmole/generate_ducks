import {all, put, takeLatest} from 'redux-saga/effects';
import {types as i_worked5Types} from '../ducks/i_worked5';

export function * watchI_worked5() {
	yield takeLatest(i_worked5Types.I_WORKED5_GET, onI_worked5Get);
	yield takeLatest(i_worked5Types.I_WORKED5_SUCCESS, onI_worked5GetResponse);
}

export function * onI_worked5Get({payload}) {
	payload.method = 'get';
	return yield payload;
}

export function * onI_worked5GetResponse({response, payload}) {
	if (payload.action === 'get' && response && payload.dataset === 'i_worked5') {
		return yield all([
			put({
				type: i_worked5.I_WORKED5_GET,
				payload: response
			})
		]);
	}
}
