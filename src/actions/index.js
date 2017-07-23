import { 
    ADD_USER,
    CURRENT_USER,
    LOGOUT_USER,
    LOGIN_USER,
} from '../constants';

export function addUser({ email, password }) {
    return {
        type: ADD_USER,
        email,
        password,
    };
}

export function loginUser({ email, password }) {
    return {
        type: LOGIN_USER,
        email,
        password,
    };
}

export function logoutUser() {
    return {
        type: LOGOUT_USER,
    };
}

export function setCurrentUser(user) {
    return {
        type: CURRENT_USER,
        user
    };
}