import {
    put,
    call,
    takeEvery,
} from 'redux-saga/effects';
import { ActionTypes } from './ActionTypes';
import * as usersPageApi from '../../api/userPageApi/api';
import * as usersPageActions from './actions';

export default function* watcherUserPage() {
    yield takeEvery(ActionTypes.GET_USER_LIST, workerGetUserList);
}

export function* workerGetUserList () {
    try {
        const usersDataList = yield call(usersPageApi.getUserList);

        yield put(usersPageActions.setUserList(usersDataList));
    } catch (error) {
        console.log('workerGetUserList worker error', error)
    }
}