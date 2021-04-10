import React, { FC } from 'React';
import {
    Wrapper
} from './styledComponent';
import CustomTableCell from '../../../customTableCell/index';
import CustomActionsCell from '../../../customTableActionsCell';

export interface TProps {
    item?: any;
    height?: any;
}

export const CustomTableBodyRaw: FC<TProps> = (props) => {
    const {
        item,
        height,
    } = props;

    const renderBodyCells = Object.values(item).map((item: any) => <CustomTableCell
        key={item}
        cellName={
            item?.street && `${item.street} ${item.suite}`
            || item?.name && item.name
            || item
        }
    />)

    return (
        <Wrapper
            height={height}
            data-at={'custom-table-header'}
        >
            {renderBodyCells}
            <CustomActionsCell width={'8%'}/>
        </Wrapper>
    );
};

export default CustomTableBodyRaw;