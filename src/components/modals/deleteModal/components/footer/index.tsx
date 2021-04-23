import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
// import ModalButton from '../../../../../../../components/customButton/modalButton';
import './style.css';

export interface Props {
    // deleteItem: Function;
    toggleModal: Function;
    styleButton: object;
    disabledButton: boolean;
}

export const DeleteModalFooter: FC<Props> = props => {
    const {
        // deleteItem,
        toggleModal,
        styleButton,
        disabledButton,
    } = props;
    const dispatch = useDispatch();

    // const closeDeleteModal = (): void => {
    //     toggleModal();
    //     dispatch(studyContentActions.openCardDeleteModal(false));
    // };

    return (
        <div
            data-at="wrapperElement"
            className="wrapperElement"
        >
            <button
                title={'Cancel'}
                // callback={closeDeleteModal}
            />
            <button
                title={'Remove'}
                data-at="save-button"
                className="save-button"
                style={styleButton}
                disabled={disabledButton}
                // callback={deleteItem}
            />
        </div>
    );
};

export default DeleteModalFooter;
