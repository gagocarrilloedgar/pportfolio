import React from 'react'
import { useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import { getJWT, localSDB } from 'utils';
import { UFrame } from './Components';

export const UDashboard = () => {

    useEffect(() => {
        if (!getJWT(localSDB.token)) {
            window.location = "/";
        }
    }, [])
    return (
        <React.Fragment>
            <Switch>
                <Route path="/app" component={UFrame} />
            </Switch>
        </React.Fragment >
    )
}
