import React, { FC } from 'React';
import {
    Wrapper,
    ActionWrapper,
} from './styledComponent';
import { CustomTableCell } from '../customTableCell';

export interface TProps<T> {
    height: string;
    tableData: Array<T>;
}

export const CustomTableHeader: FC<TProps<object>> = (props: any) => {
    const {
        height,
        tableData,
    } = props;
    let obj: string[] = [];
    const actions = 'actions';

    tableData?.find((item: object) => obj = Object.keys(item));

    console.log(obj, 'obj');

    const renderHeaderCells = obj.map((item: string) => <CustomTableCell
        key={item}
        cellName={item}
    />);

    // console.log(renderHeaderCells);

    return (
        <Wrapper
            height={height}
            data-at={'custom-table-header'}
        >
            {renderHeaderCells}
            <ActionWrapper
                data-at={'custom__table-actions-cell-wrapper'}
            >
                <ActionWrapper.cellSpan
                    data-at={'custom-table-actions-cell-wrapper__cell-span'}
                >
                    {actions}
                </ActionWrapper.cellSpan>
            </ActionWrapper>
        </Wrapper>
    );
};

export default CustomTableHeader;