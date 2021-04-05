import React, {
    FC,
    memo,
} from 'react';
import {
    Wrapper,
} from './styledComponent';
import CustomMainHeader from '../../../../components/customMainHeader';
import UserInfoCustomTable from './components/userInfoPageTable';

export const UserInfoPage: FC = () => {
    const userPageTitle = 'User Info Table'

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
