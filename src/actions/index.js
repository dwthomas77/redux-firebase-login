import {
    /** USER **/
    REGISTER_USER,
    LOGIN_USER,
    LOGOUT_USER,
    SET_USER,
    PASSWORD_RESET,
    PASSWORD_CHANGE,
    /** ERRORS **/
    SET_ERROR,
    RESET_ERRORS,
} from '../constants';

export function registerUser({ email, password }) {
    return {
        type: REGISTER_USER,
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

export function setUser(user) {    
    return {
        type: SET_USER,
        user
    };
}

export function changePassword({password}) {
    return {
        type: PASSWORD_CHANGE,
        password
    };
}

export function resetPassword({email}) {
    return {
        type: PASSWORD_RESET,
        email
    };
}