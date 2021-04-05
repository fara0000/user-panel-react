import React, {
    FC,
    memo,
} from 'react';

import {
    Wrapper,
    EditWrapper,
    DeleteWrapper,
} from './styledComponents';
import EditButton from '../../../editButton';
import DeleteButton from '../../../deleteButton';

export interface Props {
    item: any;
    style: any;
    selectItem: any;
    toggleModal: () => void;
    toggleDeleteModal: () => void;
}

const CustomActionsCell: FC<Props> = props => {
    const {
        item,
        style,
        selectItem,
        toggleModal,
        toggleDeleteModal,
    } = props;

    const editClick = (): void => {
        selectItem(item);
        toggleModal();
    };

    const deleteClick = (): void => {
        selectItem(item);
        toggleDeleteModal();
    };

    return (
        <Wrapper
            style={style && style?.div}
            data-at={'custom__table-cell-wrapper'}
        >
            <EditWrapper
                data-at={'questions-table__edit-wrapper'}
            >
                <EditButton
                    editModal={editClick}
                />
            </EditWrapper>
            <DeleteWrapper
                data-at={'questions-table__delete-wrapper'}
            >
                <DeleteButton
                    deleteModal={deleteClick}
                />
            </DeleteWrapper>
        </Wrapper>
    );
};

export default memo(CustomActionsCell);
