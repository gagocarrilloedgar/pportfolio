import React from 'react'
import { useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import { getJWT, localSDB } from 'utils';
import { BFrame } from './Components';

export const BDashboard = () => {

    useEffect(() => {
        if (!getJWT(localSDB.token)) {
            window.location = "/";
        }
    }, [])
    return (
        <React.Fragment>
            <Switch>
                <Route path="/business" component={BFrame} />
            </Switch>
        </React.Fragment >
    )
}
