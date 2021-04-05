import React, {
    FC,
    memo,
} from 'react';
import {
    Wrapper,
} from './styledComponent';
import EditIcon from '../../assets/svg/EditIcon';

export interface Props {
    editModal?: () => void;
}

const EditButton: FC<Props> = props => {
    const {
        editModal,
    } = props;

    return (
        <Wrapper
            onClick={editModal}
            data-at={'edit-button'}
        >
            <EditIcon
                stroke={'#5D5D5D'}
            />
        </Wrapper>
    );
};

export default memo(EditButton);
