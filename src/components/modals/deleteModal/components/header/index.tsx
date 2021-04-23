import React, { FC } from 'react';
import './style.css';

export interface Props {
    heading: string;
}

export const DeleteModalHeader: FC<Props> = ({ heading }) => (
    <h1
        data-at="heading__content"
        className="heading__content"
    >
        {heading}
    </h1>
);

export default DeleteModalHeader;
