import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Grid, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from "./style"
import demium from "../Hackathons/Assets/Demium.png"
import { EventosCard } from 'common';
import { useContext } from 'react';
import { UserContext } from 'hooks';

export const Main = () => {
    const classes = useStyles();
    const eventos = [{
        title: "Hack that startup",
        description: "Primera competición de hacking que te permite entrar en el mundo de las startups",
        image: demium,
        link: "/app/demium"
    },];
    const { user } = useContext(UserContext);

    return (
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item xl={5} sm={6} xs={12}>
                    <Card className={classes.user} raised>
                        <CardHeader
                            align="left"
                            title={"Bienvenido de nuevo " + user.username}
                        />
                        <CardContent>
                            <Grid container spacing={5}>
                                <Grid item xl={4} xs={0} align="center">
                                    <Avatar className={classes.avatar} />
                                </Grid>
                                <Grid align="left" style={{ margin: "20px" }}>
                                    <Grid item xl={7} xs={12}>
                                        <Typography gutterBottom>
                                            {"Ranking global: " + user.rank + "pts"}
                                        </Typography>
                                    </Grid>
                                    <Grid item xl={7} xs={12}>
                                        <Typography gutterBottom>
                                            {"Puntuación total softskills: " + user.softlevel + "pts"}
                                        </Typography>
                                    </Grid>
                                    <Grid item xl={7} xs={12}>
                                        <Typography gutterBottom>
                                            {"Puntuación total hardskills:  " + user.hardlevel + "pts"}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardActions className={classes.actions}>
                            <Button color="primary" size="small" onClick={() => window.location = "/app/profile"}>
                                {"Configurar perfil"}
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xl={7} sm={6} xs={12}>
                    <Card className={classes.user} raised>
                        <CardHeader
                            align="left"
                            title={"Retos de la semana"}
                        />
                        <CardContent>
                            <Typography variant="h5">
                                {"Esta sección se está construyendo"}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xl={12} sm={12} xs={12}>
                    <Card className={classes.news} raised>
                        <CardHeader
                            align="left"
                            title="Nuevos eventos en Pportfolio"
                        />
                        <CardContent>
                            <Grid container spacing={4}>
                                {eventos.map((evento, index) => {
                                    return (<Grid item key={index} xs={12} sm={12} md={12} lg={12} xl={12} >
                                        <EventosCard title={evento.title} description={evento.description} image={evento.image} link={evento.link} />
                                    </Grid>)
                                })}
                            </Grid>

                        </CardContent>
                        <CardActions>
                            <Button color="primary" size="small" onClick={() => window.location = "/app/competiciones"}>
                                {"Ver eventos"}
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
