import { call, put, takeLatest } from 'redux-saga/effects';
import { DATA_REQUEST, DATA_SUCCESS, DATA_FAIL } from './constants/actionTypes';

import agent from './agent';

function* fetchData(action) {
  try {
    const response = yield call(agent.fetchData);
    const json = yield call([response, 'json']);
    yield put({ type: DATA_SUCCESS, data: json });
  } catch (e) {
    yield put({ type: DATA_FAIL, error: e.message });
  }
}

function* rootSaga() {
  yield takeLatest(DATA_REQUEST, fetchData);
}

export default rootSaga;
