import React, {
    FC,
    useState,
    useEffect,
} from 'react';

import './style.css';

export interface Props {
    title: string;
    checkedInput: Function;
}

export const DeleteModalBody: FC<Props> = ({ title, checkedInput }) => {
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        toggleCheckbox(isChecked);
    }, [isChecked]);

    const toggleCheckbox = (isChecked: boolean): void => {
        checkedInput(isChecked);
    };

    return (
        <>
            <div
                data-at="text__content__wrapper"
                className="text__content__wrapper"
            >
                <span>
                    {title}
                </span>
            </div>
            <div
                data-at="modal__checkbox__wrapper"
                className="modal__checkbox__wrapper"
            >
                <div
                    data-at="delete__checkbox__wrapper"
                    className="delete__checkbox__wrapper"
                >
                    <label
                        data-at="delete__checkbox__label"
                        className="delete__checkbox__label"
                    >
                        <input
                            type="checkbox"
                            data-at="delete__checkbox__input"
                            className="delete__checkbox__input"
                            onClick={(): void => setIsChecked(!isChecked)}
                        />
                        <span
                            data-at="delete__checkbox__span"
                            className="delete__checkbox__span"
                        />
                    </label>
                </div>
                <div
                    data-at="warning__wrapper"
                    className="warning__wrapper"
                >
                    <span
                        data-at="warning__span"
                        className="warning__span"
                    >
                        I have read the warning
                    </span>
                </div>
            </div>
        </>
    );
};

export default DeleteModalBody;
