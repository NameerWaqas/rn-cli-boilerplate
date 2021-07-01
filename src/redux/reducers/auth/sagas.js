import {takeLatest} from '@redux-saga/core/effects';

import {LOGIN, LOGOUT} from './sagaTypes';

const login = ({payload}) => {}; // eslint-disable-line
const register = ({payload}) => {}; // eslint-disable-line

export function* watchLogin() {
  yield takeLatest(LOGIN, login);
}

export function* watchRegister() {
  yield takeLatest(LOGOUT, register);
}
