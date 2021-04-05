import React, {FC} from 'react';

interface Props {
    width?: number;
    height?: number;
    fill?: string;
    stroke?: string;
}

const DeleteIcon: FC<Props> = (props) => {
    const {
        stroke,
    } = props;

    return (
        <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M5.5 7L6.43366 20.0712C6.47104 20.5946 6.90648 21 7.43112 21H16.5689C17.0935 21 17.529 20.5946 17.5663 20.0712L18.5 7"
                stroke={stroke}
                strokeWidth="1.5"
            />
            <path
                d="M10 10V18"
                stroke={stroke}
                strokeWidth="1.5"
            />
            <path
                d="M14 10V18"
                stroke={stroke}
                strokeWidth="1.5"
            />
            <path
                d="M3.5 7H20.5"
                stroke={stroke}
                strokeWidth="1.5"
            />
            <path
                d="M9 6.5V5C9 4.44772 9.44772 4 10 4H14C14.5523 4 15 4.44772 15 5V6.5"
                stroke={stroke}
                strokeWidth="1.5"
            />
        </svg>
    );
};

DeleteIcon.defaultProps = {
    fill: '#000000',
    stroke: '#000000',
};

export default DeleteIcon;
