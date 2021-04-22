import {
    call,
    takeEvery,
} from 'redux-saga/effects';
import * as usersPageApi from '../../api/userPageApi/api';
import { ActionType } from './ActionType';

export default function* watcherUserPage() {
    yield takeEvery(ActionType.GET_USER_LIST, workerGetUserList);
}

export function* workerGetUserList () {
    try {
        const response = yield call(usersPageApi.getUserList);

        console.log(response, 'saga uraaa');
    } catch (error) {
        console.log('workerGetUserList worker error', error)
    }
}