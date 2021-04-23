import React, {
    FC,
    memo,
} from 'react';
import {
    Wrapper,
} from './styledComponent';
import { mockArr } from '../../../../mock';
import { shallowEqual, useSelector } from 'react-redux';
import CustomTableBody from '../../../../../../components/customTable/components/customTableBody';
import CustomTableHeader from '../../../../../../components/customTable/components/customTableHeader';
import * as userPageSelectors from '../../../../../../managers/usersPageManager/selectors';

export const UserInfoCustomTable: FC = () => {
    const userData = useSelector(userPageSelectors.getUserList, shallowEqual);

    return (
        <Wrapper
            data-at={'user-info-page-custom-table'}
        >
            <CustomTableHeader
                height={'15%'}
                tableData={userData}
            />
            <CustomTableBody
                height={'85%'}
                tableData={userData}
            />
        </Wrapper>
    );

}

export default memo(UserInfoCustomTable);