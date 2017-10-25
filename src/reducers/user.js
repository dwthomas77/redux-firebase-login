import {
    SET_USER,
} from 'constants.js';

const defaultUser = {
    name: '',
    uid: null,
};

function user(state = defaultUser, action) {
    const { type, ...rest } = action;

    if (type === SET_USER) {
        return {
            ...rest,
        };
    } else {
        return state;
    }
}

export default user;