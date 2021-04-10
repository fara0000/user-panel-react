import React, {
    FC,
    memo,
} from 'react';
import {
    Wrapper,
} from './styledComponent';
import { mockArr } from '../../../../mock';
import CustomTableBody from '../../../../../../components/customTable/components/customTableBody';
import CustomTableHeader from '../../../../../../components/customTable/components/customTableHeader';

export const UserInfoCustomTable: FC = () => (
    <Wrapper
        data-at={'user-info-page-custom-table'}
    >
        <CustomTableHeader height={'15%'} tableData={mockArr} />
        <CustomTableBody height={'85%'} tableData={mockArr} />
    </Wrapper>
);

export default memo(UserInfoCustomTable);