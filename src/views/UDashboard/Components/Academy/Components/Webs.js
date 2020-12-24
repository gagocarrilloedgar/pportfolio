import React, { useContext, useEffect } from "react";
import { pageViewGA, initializeGA } from "utils";
import { Container, CssBaseline, Grid, Typography } from "@material-ui/core";
import useStyles from "../style";
import ResourcesTable from "./ResourcesTable";
import { ResourcesContext } from "hooks"

export const Webs = () => {
	initializeGA();
	pageViewGA({ path: window.location.pathname + window.location.search });
	const classes = useStyles();
	const { resources, fetchResourcesByPPType } = useContext(ResourcesContext);
	const PPTYPE = "webs";

	useEffect(() => {
		fetchResourcesByPPType(PPTYPE);
	}, [])

	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth="xl" className={classes.container}>
				<Grid container justify="center">
					<Typography variant="h5">
						{"Web educativas y cursos"}
					</Typography>
					<ResourcesTable data={resources} />
				</Grid>
			</Container>

		</React.Fragment>
	);
};
