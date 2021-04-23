import {ActionTypes} from './ActionTypes';
import * as userPageTypes from '../../types/userPageTypes';

export type getUserListType = {
    type: ActionTypes.GET_USER_LIST;
};
export type setUserListType = {
    type: ActionTypes.SET_USER_LIST;
    data: Array<userPageTypes.userType>;
};
export type isDeleteModalOpenType = {
    type: ActionTypes.IS_DELETE_MODAL_OPEN;
};

export const getUserList = (): getUserListType => ({
    type: ActionTypes.GET_USER_LIST,
});
export const setUserList = (data: Array<userPageTypes.userType>): setUserListType => ({
    type: ActionTypes.SET_USER_LIST,
    data,
})
export const isDeleteModalOpen = (): isDeleteModalOpenType => ({
    type: ActionTypes.IS_DELETE_MODAL_OPEN,
})