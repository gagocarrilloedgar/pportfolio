import React, { useContext, useEffect } from "react";
import { pageViewGA, initializeGA } from "utils";
import { Container, CssBaseline, Grid, Typography } from "@material-ui/core";
import useStyles from "../style";
import ResourcesTable from "./ResourcesTable";
import { ResourcesContext } from "hooks"

export const Forums = () => {
	initializeGA();
	pageViewGA({ path: window.location.pathname + window.location.search });
	const classes = useStyles();

	const { resources, fetchResourcesByPPType } = useContext(ResourcesContext);
	const PPTYPE = "forums";

	useEffect(() => {
		fetchResourcesByPPType(PPTYPE);
	}, [])



	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth="xl" className={classes.container}>
				<Grid container justify="center">
					<Typography variant="h5">
						{"Foros destacados y especializados"}
					</Typography>
					<ResourcesTable data={resources} />
				</Grid>
			</Container>
		</React.Fragment>
	);
};
