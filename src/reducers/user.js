import {
    SET_USER,
} from 'constants.js';

const defaultUser = {
    email: '',
    uid: null,
};

function user(state = defaultUser, action) {
    const { type, user } = action;

    if (type === SET_USER) {
        return {...user};
    } else {
        return state;
    }
}

export default user;