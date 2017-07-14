import { ADD_USER, CURRENT_USER } from '../constants';

export function addUser({ email, password }) {
    return {
        type: ADD_USER,
        email,
        password,
    };
}

export function setCurrentUser(user) {
    return {
        type: CURRENT_USER,
        user
    };
}