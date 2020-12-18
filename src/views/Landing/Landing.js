import React from "react";
import { Route, Switch } from "react-router-dom";
import { Login, Register } from "./Components"



export const Landing = () => {

    return (
        <React.Fragment>
            <Switch>
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/" component={Login} />
            </Switch>
        </React.Fragment >
    );
};

