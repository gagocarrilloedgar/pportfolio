import { Grid } from '@material-ui/core';
import { EventosView } from 'common/Views';
import React from 'react'
import demium from "./Assets/DemiumView.png";


export const Demium = () => {
    const evento = {
        title: "Hack that startup",
        description: "En esta primera edición de Hack that startap te propomenos diferentes retos relaciondos con las startups incubadas en Demium Barcelona. Podrás elegir entre dos disciplinas: Data Science & IA y Desarrollo web. Tendrás la oportunidad de ganar un cheque de Amazon para que puedas seguir progresando y a los 10 mejores los pondremos en contacto con las startups de Demium que buscan perfiles tech. Ponte en el foco de las Startups más top de Barcelona. ¿Estás preparado?",
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
