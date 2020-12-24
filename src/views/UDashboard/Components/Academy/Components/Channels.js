import React, { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { pageViewGA, initializeGA } from "utils";
import { ResourcesContext } from "hooks"
import { Container, CssBaseline, Grid, Typography } from "@material-ui/core";
import useStyles from "../style";
import ResourcesTable from "./ResourcesTable";

export const Channels = () => {


	const { resources, fetchResourcesByPPType } = useContext(ResourcesContext);
	const PPTYPE = "youtube";

	useEffect(() => {
		fetchResourcesByPPType(PPTYPE);
	}, [])

	const { t } = useTranslation();
	const classes = useStyles();

	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth="xl" className={classes.container}>
				<Grid container justify="center">
					<Typography variant="h5">
						{"Los mejores canales y tutoriales de youtube"}
					</Typography>
					<ResourcesTable data={resources} />
				</Grid>
			</Container>
		</React.Fragment>
	);
};
