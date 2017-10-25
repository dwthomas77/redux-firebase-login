import { fork } from 'redux-saga/effects';
import user from './user';

/**
 * use one root saga to yield all other side effect sagas
 */
function* sagas() {
    yield [
        fork(user),
    ];
}

export default sagas;