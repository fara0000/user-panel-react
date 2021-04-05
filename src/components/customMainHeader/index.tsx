import React, {
    FC,
    memo,
} from 'react';
import { Wrapper } from './styledComponent';

export interface Props {
    title: string;
}

const CustomMainHeader: FC<Props> = props => {
    const {
        title,
    } = props;

    return(
        <Wrapper
            data-at={'header-wrapper'}
        >
            <Wrapper.title
                data-at={'header-wrapper__title'}
            >
                {title}
            </Wrapper.title>
        </Wrapper>
    );
};

export default memo(CustomMainHeader);