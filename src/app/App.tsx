import React, {
    FC,
} from 'react';
import {
    Wrapper,
} from './styledComponent';
import UserInfoPage from '../views/users/pages/userInfoPage';

const App: FC = () => (
    <Wrapper>
        <UserInfoPage />
    </Wrapper>
);

export default App;