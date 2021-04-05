import React, {
FC,
    memo,
} from 'react';

import {
    Wrapper,
} from './styledComponents';

export interface Props {
    style?: any;
    cellName?: string;
    cellType?: string;
}

const CustomTableCell: FC<Props> = props => {
    const {
        style,
        cellName,
    } = props;

    return (
        <Wrapper
            style={style && style?.div}
            data-at={'custom__table-cell-wrapper'}
        >
            <Wrapper.cellSpan
                style={style && style.span}
                data-at={'custom-table-cell-wrapper__cell-span'}
            >
                {`${cellName}`}
            </Wrapper.cellSpan>
        </Wrapper>
    );
};

export default memo(CustomTableCell);