import { Grid } from '@material-ui/core';
import { EventosView } from 'common/Views';
import React from 'react'
import demium from "./Assets/DemiumView.png";


export const Demium = () => {
    const evento = {
        title: "Hack that startup",
        description: "Primera competición de hacking que te permite entrar en el mundo de las startups",
        image: demium,
        link: "https://discord.gg/h4nqE3xSd6",
        register: "Sólo tienes que darle al botón y automáitcamente se registará el evento en tu perfil y podrás unirte al canal.",
    };
    return (
        <Grid container spacing={3}>
            <EventosView
                title={evento.title}
                description={evento.description}
                image={evento.image}
                link={evento.link}
                reg_desc={evento.register} />
        </Grid>
    )
}
