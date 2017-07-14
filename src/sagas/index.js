import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { ADD_USER, CURRENT_USER } from '../constants';

function* addUser({email, password}) {
    const firebase = window._FIREBASE_;
}

function* currentUser() {

}

export default function* sagaRoot() {
    yield takeEvery(CURRENT_USER, currentUser);
    yield takeEvery(ADD_USER, addUser);
}