import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { CURRENT_USER } from '../constants';

function* currentUser() {
    console.log('I received the update user action');
}

export default function* sagaRoot() {
    yield takeEvery(CURRENT_USER, currentUser);
}