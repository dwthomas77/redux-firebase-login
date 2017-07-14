import { CURRENT_USER } from '../constants';

function isLoggedIn(state = false, action) {
    return state;
}

function user(state = null, action) {
    console.log(action);
    const { type } = action;
    return type === CURRENT_USER ? action.user : state;
}

const reducers = {
    isLoggedIn,
    user,
};

export default reducers;
