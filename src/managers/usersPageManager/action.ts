import { ActionType } from './ActionType';

export type getUserListType = {
    type: ActionType.GET_USER_LIST;
};

export const getUserList = (): getUserListType => ({
    type: ActionType.GET_USER_LIST,
});