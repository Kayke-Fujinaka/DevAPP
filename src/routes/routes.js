import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Register from '../Pages/Register'
import Users from '../Pages/Users'

function Routes() {

    return (
            <Router>
                <Route exact path="/" component={Register} />
                <Route exact path="/users" component={Users} />
            </Router>
    )
}

export default Routes