import React, {FC } from 'React';
import {
    Wrapper
} from './styledComponent';
import CustomTableBodyRaw from './components/customTableBodyRow';

export interface TProps<T> {
    height: string;
    tableData: Array<T>;
}

export const CustomTableBody: FC<TProps<object>> = (props) => {
    const {
        height,
        tableData,
    } = props;

    const renderBodyCells = tableData.map((item: any) => <CustomTableBodyRaw
        key={item.id}
        item={item}
        height={'10%'}
    />);

    return (
        <Wrapper
            height={height}
            data-at={'custom-table-body'}
        >
            {renderBodyCells}
        </Wrapper>
    );
};

export default CustomTableBody;