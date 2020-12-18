import { Grid } from '@material-ui/core';
import { EventosView } from 'common/Views';
import React from 'react'
import demium from "./Assets/DemiumView.png";


export const Demium = () => {
    const evento = {
        title: "Hack that startup",
        description: "Primera competición de hacking que te permite entrar en el mundo de las startups",
        image: demium
    };
    return (
        <Grid container spacing={3}>
            <EventosView title={evento.title} description={evento.description} image={evento.image} />
        </Grid>
    )
}
