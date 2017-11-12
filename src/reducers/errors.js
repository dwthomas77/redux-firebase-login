import {
    SET_ERROR,
    RESET_ERRORS,

    REGISTER_USER,
    LOGIN_USER,
    SET_USER,
} from 'constants.js';

const initialState = {};

const errorWipingActions = [
    RESET_ERRORS,
    REGISTER_USER,
    LOGIN_USER,
    SET_USER,
];

function errors(state = initialState, action) {
    const { type, error = {} } = action;
    const { key, msg } = error;

    if (type === SET_ERROR) {
        return {...state, [key]: msg};
    } else if (errorWipingActions.includes(type)) {
        return initialState;
    } else {
        return state;
    }
}

export default errors;