import React, { useContext, useEffect } from "react";
import { pageViewGA, initializeGA } from "utils";
import ResourcesTable from "./ResourcesTable";
import { ResourcesContext } from "hooks"

import {
	Container, CssBaseline, Grid, Typography
} from "@material-ui/core";
import useStyles from "../style";

export const Docs = () => {
	initializeGA();
	pageViewGA({ path: window.location.pathname + window.location.search });
	const classes = useStyles();
	const { resources, fetchResourcesByPPType } = useContext(ResourcesContext);
	const PPTYPE = "docs";

	useEffect(() => {
		fetchResourcesByPPType(PPTYPE);
	}, [PPTYPE])

	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth="xl" className={classes.container}>
				<Grid container justify="center">
					<Typography variant="h5">
						{"Documentación oficial de cada lenguage o framework"}
					</Typography>
					<ResourcesTable data={resources} />
				</Grid>
			</Container>

		</React.Fragment>
	);
};
