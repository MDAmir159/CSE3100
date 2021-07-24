import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Page1 from './index';
import Page2 from './../Student/Home/Classes/Class1/index';
function InitiateClassOps() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path = "/" component = {Page1}/>
                <Route path = "/page2" component = {Page2} />
            </Switch>
        </BrowserRouter>
    );
}
export default InitiateClassOps;