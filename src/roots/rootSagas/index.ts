import {
    all,
    call,
} from 'redux-saga/effects';

const sagaList: any = [

];

export default function* watchRootSagas() {
    yield all(sagaList.map((saga: any) => call(saga)))
}