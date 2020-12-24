import { Button, Card, CardActions, CardContent, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%",
        width: "100%",
        borderRadius: "5px",
    },
    rootcolor: {
        borderBottomRightRadius: "5px",
        borderBottomLeftRadius: "5px",
        width: "100%",
        height: "40px"

    },
    img: {
        width: "70%",
        height: "70%",
        borderRadius: "5px",
    }
}));

export const AcademyCard = ({ source, title, description, color, url }) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Card className={classes.root}>
                <CardContent>
                    <Grid container spacing={4}>
                        <Grid item xs={0} sm={5} lg={4} xl={4}>
                            <img src={source} alt={title} classes={classes.img} />
                        </Grid>
                        <Grid item xs={0} sm={7} lg={8} xl={8}>
                            <Typography align="center" variant="h5">
                                {title}
                            </Typography>
                        </Grid>
                        <Grid item lg={12} xl={12} sm={12} xs={12}>
                            <Typography>
                                {description}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions style={{ backgroundColor: color }} className={classes.rootcolor}>
                    <Button size="small" style={{ color: "white" }} onClick={() => window.location = url}>
                        {"Ir a la sección"}
                    </Button>
                </CardActions>
            </Card>
        </React.Fragment>
    )
}
