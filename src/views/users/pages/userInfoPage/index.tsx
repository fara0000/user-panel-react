import React, {
    FC,
    memo,
    useEffect,
} from 'react';
import {
    Wrapper,
} from './styledComponent';
import CustomMainHeader from '../../../../components/customMainHeader';
import * as userPageActions from '../../../../managers/usersPageManager/action';
import UserInfoCustomTable from './components/userInfoPageTable';
import { useDispatch } from 'react-redux';

export const UserInfoPage: FC = () => {
    const dispatch = useDispatch();
    const userPageTitle = 'User Info Table';

    useEffect(() => {
        dispatch(userPageActions.getUserList());
    }, []);

    return (
        <Wrapper
            data-at={'user-info-page'}
        >
            <CustomMainHeader
                title={userPageTitle}
                data-at={'user-info-page__header'}
            />
            <UserInfoCustomTable
                data-at={'user-info-page__body'}
            />
        </Wrapper>
    );
};

export default memo(UserInfoPage);
