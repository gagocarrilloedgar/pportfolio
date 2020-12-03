import React from "react";
import { Route, Switch } from "react-router-dom";
import { Users } from "./Components"

export const Landing = () => {

    return (
        <React.Fragment>
            <Switch>
                <Route path="/index" component={Users} />
                <Route path="/" component={Users} />
            </Switch>
        </React.Fragment>
    );
};

