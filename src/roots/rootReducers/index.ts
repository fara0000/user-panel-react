import { combineReducers } from 'redux';
import userPageReducer from '../../managers/usersPageManager/reducer';

const rootReducer = combineReducers({
    userPageReducer,
});

export default rootReducer;