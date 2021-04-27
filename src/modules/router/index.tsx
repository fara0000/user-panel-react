import React, { FC } from 'React';
import { Switch, Route } from 'react-router-dom';
import PostPage from '../../views/users/pages/postPage';
import UserInfoPage from '../../views/users/pages/userInfoPage';

export const Routers: FC = () => (
    <Switch>
        <Route exact path={'/'} component={UserInfoPage}/>
        <Route exact path={'/posts'} component={PostPage}/>
    </Switch>
)

export default Routers;