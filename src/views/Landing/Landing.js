import MainNav from "common/MainNav/MainNav";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { Users } from "./Components"
import { LandingNav } from "./Components/LandingNav/LandingNav";

export const Landing = () => {

    return (
        <React.Fragment>
            <LandingNav />
            <Switch>
                <Route path="/index" component={Users} />
                <Route path="/" component={Users} />
            </Switch>
        </React.Fragment >
    );
};

