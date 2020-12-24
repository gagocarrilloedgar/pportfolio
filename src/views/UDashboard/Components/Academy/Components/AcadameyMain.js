import React from "react";
import { Grid } from "@material-ui/core";
import youtube from "./Assets/channel.png";
import web from "./Assets/web.png";
import forum from "./Assets/foros.png";
import docs from "./Assets/docs.png";
import { AcademyCard } from "common";


export const AcademyMain = () => {

    const base = "/app/academy/";

    const resources = [
        {
            title: "Canales",
            description: "Descubre multitud de canales seleccionados por nuestro equipo  de expertos y por los usuarios con  mejores puntuaciones para aprender lo que necesites en cada momento.",
            image: youtube,
            color: "#2255ff",
            url: base + "channels"
        },
        {
            title: "Foros",
            description: "Encuentra dudas, comenta y descubre los mejores foros. Una lista de foros catalogados por lenguagje, especialidad, tags específicos y por título del error o problema. ",
            image: forum,
            color: "#2255ff",
            url: base + "forums"
        },
        {
            title: "Webs y artículos",
            description: "Plataformas y articulos con los mejores cursos y tutoriales catalogados por categorias y por nivel. La mejor selección para empezar a aprender cualquier lenguage y tecnologñia. ",
            image: web,
            color: "#2255ff",
            url: base + "webs"
        },
        {
            title: "Documentación",
            description: "Encuentra todas las páginas web de documentación oficial de los idferentes lenguajes de programación, IDEs, Frameworks y plataformas.",
            image: docs,
            color: "#2255ff",
            url: base + "docs"
        }
    ]
    return (
        <React.Fragment>
            <Grid container spacing={5}>
                {resources.map((ress, index) => {
                    return (
                        <Grid item xl={4} id={index} lg={4} sm={6} xs={12} >
                            <AcademyCard
                                source={ress.image}
                                title={ress.title}
                                description={ress.description}
                                color={ress.color}
                                url={ress.url}
                            />
                        </Grid>
                    )
                })}
            </Grid>
        </React.Fragment>
    );
};
