import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { ADD_USER, CURRENT_USER } from '../constants';

function* addUser() {
    console.log('I am supposed to add a new user');
}

function* currentUser() {
    console.log('I received the update user action');
}

export default function* sagaRoot() {
    yield takeEvery(CURRENT_USER, currentUser);
}