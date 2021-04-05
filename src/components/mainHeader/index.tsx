import React, {
    FC,
    memo,
} from 'react';
import { Wrapper } from './styledComponents';

export interface Props {
    title: string;
}

const MainHeader: FC<Props> = props => {
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

export default memo(MainHeader);