import React, {
    FC,
} from 'react';
import {
    Wrapper,
} from './styledComponent';

export interface Props {
    message?: string;
}

const App: FC<Props> = ({ message}) => (
    <Wrapper>
        <Wrapper.heading>
            { message }
        </Wrapper.heading>
    </Wrapper>
);

export default App;