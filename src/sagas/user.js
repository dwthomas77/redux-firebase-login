import { call, put, takeEvery } from 'redux-saga/effects';
import {
    REGISTER_USER,
    LOGOUT_USER,    
    LOGIN_USER,
    PASSWORD_RESET,
    LOGIN_ERROR_KEY,
    REGISTER_ERROR_KEY,
} from '../constants';
import {
    setError,
    resetErrors,
} from 'actions';
import api from 'api';

function* registerUser({ email, password }) {
    try {
        yield call(api('registerUser'), {email, password});
    } catch (error) {
        yield put(setError({
            key: REGISTER_ERROR_KEY,
            msg: error.message,
        }));
    }
}

function* loginUser({ email, password }) {
    try {
        yield call(api('loginUser'), {email, password});
    } catch (error) {
        yield put(setError({
            key: LOGIN_ERROR_KEY,
            msg: error.message,
        }));
    }
}

function* logoutUser() {
    try {
        yield call(api('logoutUser'));
        window.location = '/user';
    } catch (error) {
        console.log(`Error logging out: ${error}`);
    }
}

function* passwordReset({ email }){
    const firebase = window._FIREBASE_;
    firebase.auth().sendPasswordResetEmail(email).catch(error => { console.log('reset Error', error) });
}

export default function* sagaRoot() {
    yield takeEvery(REGISTER_USER, registerUser);
    yield takeEvery(LOGOUT_USER, logoutUser);
    yield takeEvery(LOGIN_USER, loginUser);
    yield takeEvery(PASSWORD_RESET, passwordReset);
}