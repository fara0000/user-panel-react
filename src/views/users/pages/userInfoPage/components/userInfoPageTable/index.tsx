import React, {
    FC,
    memo,
} from 'react';
import {
    Wrapper,
} from './styledComponent';

export const UserInfoCustomTable: FC = () => (
    <Wrapper
        data-at={'user-info-page-custom-table'}
    >

    </Wrapper>
);

export default memo(UserInfoCustomTable);