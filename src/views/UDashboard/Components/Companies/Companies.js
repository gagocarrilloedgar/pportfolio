import { Grid } from '@material-ui/core'
import { CompanyCard } from 'common';
import React from 'react'

import clhub from "./Assets/clhub.png";
import corgee from "./Assets/corgee.png";
import daggout from "./Assets/daggout.png";
import feeder from "./Assets/feeder.png";
import gloria from "./Assets/gloria.png";
import indomit from "./Assets/indomit.png";
import mapped from "./Assets/mapped.png";
import monai from "./Assets/monai.png";
import podder from "./Assets/podder.png";
import textilu from "./Assets/textilu.png";
import infomality from "./Assets/infomality.png";



export const Companies = () => {

    const companies = [
        {
            name: "clhub",
            description: "A matchmaking platform for artists and venues",
            logo: clhub,
            url: "",
            color: ""
        },
        {
            name: "Indomit",
            description: "The #1 automated outsourcing tool that manages brands micro influencer campaigns from desired outcome to delivered results.",
            logo: indomit,
            url: "",
            color: ""
        },
        {
            name: "MonnAI",
            description: "MoonAI is a digital solution providing immersive sound experience to help relieve menstruation pain.",
            logo: monai,
            url: "",
            color: ""
        },
        {
            name: "Podder",
            description: "Podcasters consultance platform to improve their earnings.",
            logo: podder,
            url: "",
            color: ""
        },
        {
            name: "Gloria",
            description: "A data driven platform focused on enhance the way small and mid companies consume and share their data.",
            logo: gloria,
            url: "",
            color: ""
        },
        {
            name: "Daggout",
            description: "App to manage electronic receipts.",
            logo: daggout,
            url: "",
            color: ""
        },
        {
            name: "Infomality",
            description: "A platform to help governments and militaries to detect, analyze and report disinformation.",
            logo: infomality,
            url: "",
            color: ""
        },
        {
            name: "Textilu",
            description: "A marketplace for leftover textiles.",
            logo: textilu,
        },
        {
            name: "Corgee",
            description: "Making it easier financial services for gig workers.",
            logo: corgee,
        },
        {
            name: "Mapped",
            description: "Matchmaking app for founders to unblock and accelerate their startups.",
            logo: mapped,
        },
        {
            name: "Feeder",
            description: "Messaging service created to send multimedia content to your contacts and automatically receive their reaction recorded on video.",
            logo: feeder
        }

    ];

    return (
        <React.Fragment>
            <Grid container spacing={5}>
                {companies.map((comp, index) => {
                    return (

                        <CompanyCard
                            source={comp.logo}
                            description={comp.description}
                            title={comp.name}
                            color={"#2255ff"}
                            url={"Todavía no hemos creado esta pagina. Pronto estará todo listo"}
                        />

                    )
                })}
            </Grid>
        </React.Fragment>
    )
}
