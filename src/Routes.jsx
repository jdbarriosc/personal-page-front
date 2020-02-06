import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from './views/Home';
import Projects from './views/Projects';


function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/projects' component={Projects} />
        </Switch>
    );
};

export default Routes;