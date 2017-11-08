import { takeEvery } from 'redux-saga/effects';
import {
    REGISTER_USER,
    LOGOUT_USER,    
    LOGIN_USER,
    PASSWORD_RESET,
} from '../constants';

function* registerUser({ email, password }) {
    const firebase = window._FIREBASE_;
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( (user) => {
            console.log('this is the user', user);
        })
        .catch(function(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error.code);
        console.log(error.message);
    });
}

function* loginUser({ email, password }) {

    console.log('am going to log in this guy', email, password);

    const firebase = window._FIREBASE_;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error.code);
        console.log(error.message);
    });
}

function* logoutUser() {
    console.log('logging the user out');
    const firebase = window._FIREBASE_;
    firebase.auth().signOut()
        .then( (x) => console.log('any data?', x) )
        .catch(error => { console.log('signout Error', error) });
}

function* passwordReset({ email }){

    console.log('requested to reset', email);

    const firebase = window._FIREBASE_;
    firebase.auth().sendPasswordResetEmail(email).catch(error => { console.log('reset Error', error) });
}

export default function* sagaRoot() {
    yield takeEvery(REGISTER_USER, registerUser);
    yield takeEvery(LOGOUT_USER, logoutUser);
    yield takeEvery(LOGIN_USER, loginUser);
    yield takeEvery(PASSWORD_RESET, passwordReset);
}