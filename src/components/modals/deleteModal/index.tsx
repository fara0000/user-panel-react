import React, {
    FC,
    useState,
} from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';

import DeleteModalBody from './components/body';
import DeleteModalHeader from './components/header';
import DeleteModalFooter from './components/footer';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        width: '492px',
        color: '#000000',
        bottom: 'auto',
        height: '268px',
        fontSize: '16px',
        overflow: 'hidden',
        fontStyle: 'normal',
        transform: 'translate(-50%, -50%)',
        background: '#FFFFFF',
        fontFamily: 'Open Sans',
        marginRight: '-50%',
        borderRadius: '6px',
    },
    overlay: {
        zIndex: 1000,
        backgroundColor: '#00000096',
    },
};

Modal.setAppElement('#root');

export interface Props {
    title: string;
    isOpen: boolean;
    heading: string;
    // deleteItem: Function;
    toggleModal?: any;
}

export const DeleteModal: FC<Props> = props => {
    const {
        title,
        isOpen,
        heading,
        // deleteItem,
        toggleModal,
    } = props;
    const dispatch = useDispatch();

    const disabledButtonStyle = {
        opacity: '1',
        background: '#5C59EC',
    };
    const [disabled, setDisabled] = useState(false);
    const disabledButton = !disabled;
    const styleButton = disabledButton ? {} : disabledButtonStyle;

    const checkedInput = (data: boolean): void => {
        setDisabled(data);
    };

    // const closeDeleteModal = (): void => {
    //     toggleModal();
    //     dispatch(studyContentActions.openCardDeleteModal(false));
    // };

    return (
        <div>
            <Modal
                style={customStyles}
                isOpen={isOpen}
                // onRequestClose={closeDeleteModal}
            >
                <DeleteModalHeader
                    heading={heading}
                />
                <DeleteModalBody
                    title={title}
                    checkedInput={checkedInput}
                />
                <DeleteModalFooter
                    // deleteItem={deleteItem}
                    toggleModal={toggleModal}
                    styleButton={styleButton}
                    disabledButton={disabledButton}
                />
            </Modal>
        </div>
    );
};

export default DeleteModal;
