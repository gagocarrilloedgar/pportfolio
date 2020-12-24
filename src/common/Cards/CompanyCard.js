import { Button, Card, CardActions, CardContent, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    root: {
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
        width: "75px",
        height: "75px",
    }
}));


export const CompanyCard = ({ source, title, description, color, url }) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid item xl={4} lg={4} sm={12} xs={12} >
                <Card className={classes.root}>
                    <CardContent>
                        <Grid container spacing={4}>
                            <Grid item xs={0} sm={4} lg={4} xl={4} align="center">
                                <img src={source} alt={title} className={classes.img} />
                            </Grid>
                            <Grid item xs={0} sm={7} lg={7} xl={7}>
                                <Typography align="left" style={{ marginTop: "20px" }} variant="h6" gutterBottom>
                                    {title}
                                </Typography>
                            </Grid>
                            <Grid item xl={12} xs={12} lg={12}>
                                <Typography style={{ margin: "5px" }} variant="body2">
                                    {description}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions style={{ backgroundColor: color }} className={classes.rootcolor}>
                        <Button size="small" style={{ color: "white" }} onClick={() => alert(url)}>
                            {"Descubrir empresa"}
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </React.Fragment>
    )
}
