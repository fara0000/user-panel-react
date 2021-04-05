import React, {
    FC,
    memo,
} from 'react';
import {
    Wrapper,
} from './styledComponent';
import DeleteIcon from '../../assets/svg/DeleteIcon';

export interface Props {
    deleteModal?: () => void;
}

const DeleteButton: FC<Props> = props => {
    const {
        deleteModal,
    } = props;

    return (
        <Wrapper
            data-at={'delete-button'}
            onClick={deleteModal}
        >
            <DeleteIcon
                stroke={'#5D5D5D'}
            />
        </Wrapper>
    );
};

export default memo(DeleteButton);
