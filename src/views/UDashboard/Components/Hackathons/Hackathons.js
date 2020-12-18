import { Grid } from '@material-ui/core'
import { EventosCard } from 'common';
import React from 'react'
import demium from "./Assets/Demium.png";

export const Hackathons = () => {
    const eventos = [{
        title: "Hack that startup",
        description: "Primera competición de hacking que te permite entrar en el mundo de las startups",
        image: demium,
        link: "/app/demium"
    }];
    return (
        <Grid container spacing={3}>
            {eventos.map((evento, index) => {
                return (<Grid item key={index} xs={12} sm={12} md={6} lg={4} xl={4} >
                    <EventosCard title={evento.title} description={evento.description} image={evento.image} link={evento.link} />
                </Grid>)
            })}
        </Grid>
    )
}
