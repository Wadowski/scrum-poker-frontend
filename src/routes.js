import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainScreen from './screens/Main';
import RoomScreen from './screens/Room';

const Routes = () => (
    <Switch>
        <Route path='/room'>
            <RoomScreen />
        </Route>
        <Route path='/'>
            <MainScreen />
        </Route>
    </Switch>
);

export default Routes;
