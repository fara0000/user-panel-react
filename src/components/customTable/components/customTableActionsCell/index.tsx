import React, {
    FC,
    memo,
} from 'react';

import {
    Wrapper,
    EditWrapper,
    DeleteWrapper,
} from './styledComponent';
import EditButton from '../../../editButton';
import DeleteButton from '../../../deleteButton';

export interface Props {
    item?: any;
    width: string;
    selectItem?: any;
    toggleModal?: () => void;
    toggleDeleteModal?: () => void;
}

const CustomActionsCell: FC<Props> = props => {
    const {
        item,
        width,
        selectItem,
        toggleModal,
        toggleDeleteModal,
    } = props;

    // const editClick = (): void => {
    //     selectItem(item);
    //     toggleModal();
    // };
    //
    // const deleteClick = (): void => {
    //     selectItem(item);
    //     toggleDeleteModal();
    // };

    return (
        <Wrapper
            width={width}
            data-at={'custom__table-cell-wrapper'}
        >
            <EditWrapper
                data-at={'questions-table__edit-wrapper'}
            >
                <EditButton />
            </EditWrapper>
            <DeleteWrapper
                data-at={'questions-table__delete-wrapper'}
            >
                <DeleteButton />
            </DeleteWrapper>
        </Wrapper>
    );
};

export default memo(CustomActionsCell);
