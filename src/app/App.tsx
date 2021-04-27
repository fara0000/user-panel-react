import React, {
    FC,
} from 'react';
import {
    Wrapper,
} from './styledComponent';
import UserInfoPage from '../views/users/pages/userInfoPage';
import Routers from '../modules/router';

const App: FC = () => (
    <Wrapper>
        <main>
            <Routers />
        </main>
    </Wrapper>
);

export default App;