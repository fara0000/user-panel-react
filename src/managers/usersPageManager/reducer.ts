import { ActionType } from './ActionType';

export type InitialState = {
    userList: Array<any>;
};

export const initialState: InitialState = {
    userList: [],
}

export default (state = initialState, action: any): InitialState => {
    const { type, data } = action;

    switch (type) {
    case ActionType.SET_USER_LIST:
        return {
            ...state,
            userList: data,
        };
    default:
        return state;
    }
};