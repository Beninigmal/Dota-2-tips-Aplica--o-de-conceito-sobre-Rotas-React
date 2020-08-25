import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Core from '../Core';
import Support from '../Support';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/supp' component={Support} />
            <Route path='/core' component={Core} />
        </Switch>
    </BrowserRouter>
);


export default Routes;