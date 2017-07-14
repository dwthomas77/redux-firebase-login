import { CURRENT_USER } from '../constants';

function isLoggedIn(state = false, action) {
    return state;
}

function user(state = null, action) {
    const { type } = action;
    return type === CURRENT_USER ? action.user : state;
}

const reducers = {
    isLoggedIn,
    user,
};

export default reducers;
