import React, {
    FC,
} from 'react';

import {
    Wrapper,
} from './styledComponent';

export interface Props {
    cellName: string;
}

export const CustomTableCell: FC<Props> = (props) => {
    const {
        cellName,
    } = props;

    return (
        <Wrapper
            data-at={'custom__table-cell-wrapper'}
        >
            <Wrapper.cellSpan
                data-at={'custom-table-cell-wrapper__cell-span'}
            >
                {`${cellName}`}
            </Wrapper.cellSpan>
        </Wrapper>
    );
};

export default CustomTableCell;