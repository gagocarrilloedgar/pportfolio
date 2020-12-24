import React from "react";
import { CssBaseline } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import {
	Channels,
	Docs,
	Webs,
	Forums,
	AcademyMain
} from "./Components";

export const Academy = () => {

	return (
		<React.Fragment>
			<CssBaseline />
			<Switch>
				<Route path="/app/academy/channels" component={Channels} />
				<Route path="/app/academy/docs" component={Docs} />
				<Route path="/app/academy/webs" component={Webs} />
				<Route path="/app/academy/forums" component={Forums} />
				<Route path="/app/academy" component={AcademyMain} />
			</Switch>
		</React.Fragment>
	);
};

export default Academy;
