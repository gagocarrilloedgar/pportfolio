import React, { useState } from 'react';
import { Hero } from '../Hero';
import "./Company.css";
import { ButtonContained, ButtonOutlined } from "common";
import { Grid } from '@material-ui/core';
import valida from "./Assets/imagen_valida.png";
import reduce from "./Assets/imagen_reduce.png";
import cargar from "./Assets/cargar.png";

import paso1 from "assets/icono_paso_1.png"
import paso2 from "assets/icono_paso_2.png"
import paso3 from "assets/icono_paso_3.png"
import { CardHow } from 'views/Landing/Common/Cards/CardHow';
import { SocialIcons } from 'views/Landing/Common/SocialIcons/SocialIcons';

import "views/Landing/Landing.css"

const actionRegister = () => {
    window.location = "/"
}


const ButtonRegister = () => {

    return (
        <ButtonContained title="Registrarme" action={actionRegister} color="blue" />
    );
}

export const Company = () => {
    return (
        <React.Fragment>
            <Hero />
            <div className="body_company">
                <h6>
                    GAMIFICAMOS EL FUTURO DE TU EMPRESA
                </h6>
                <h3>Encontramos el talento que tu empresa necesita                </h3>
                <p className="bodyText"> En Pportfolio traemos una nueva forma de contratar para que encuentres a los candidatos perfectos para tu empresa. De esta manera, organizamos eventos semanales donde se validan las habilidades de los usuarios a través de pruebas individuales y por equipos. Las pruebas al estar diseñadas para los requerimientos específicos de tu empresa nos harán dar con los candidatos mejor preparados para ti.</p>
                <Grid container className="body_section">
                    <Grid item lg={5} xs={12} className="body_section_left">
                        <p className="body_section_title">Valida las habilidades</p>
                        <p className="body_section_subtitle">Valida las habilidades de tus nuevas incorporaciones </p>
                        <p className="body_section_text">Gracias a nuestro sistema gamificado los usuarios validan sus habilidades a través de las diferentes pruebas que realizan.</p>
                        <ButtonRegister />
                    </Grid>
                    <Grid item lg={7} xs={12}>
                        <img src={valida} className="body_img" alt="fórmate" />
                    </Grid>
                </Grid>
                <Grid container className="body_section">
                    <Grid item lg={7} xs={12}>
                        <img src={cargar} className="body_img rigth" alt="fórmate" />
                    </Grid>
                    <Grid item lg={5} xs={12} className="body_section_rigth">
                        <p className="body_section_title">Simplifica y acelera</p>
                        <p className="body_section_subtitle">Simplifica y acelera tus procesos de selección  </p>
                        <p className="body_section_text">Al validarse las aptitudes de los usuarios tus procesos de selección se verán drásticamente simplificados. No es necesaria una búsqueda exhaustiva para encontrar a los candidatos que se cree que son más aptos.</p>
                        <ButtonRegister />
                    </Grid>
                    <Grid item lg={7} xs={12}>
                        <img src={cargar} className="body_img_mobile" alt="fórmate" />
                    </Grid>
                </Grid>
                <Grid container className="body_section">
                    <Grid item lg={5} xs={12} className="body_section_left">
                        <p className="body_section_title">Reduce costes</p>
                        <p className="body_section_subtitle">Reduce costes con Pportfolio</p>
                        <p className="body_section_text">Los costes totales de contratación se ven gratamente reducidos al disminuir el tiempo de búsqueda de candidatos y aumentar la probabilidad de encontrar a usuarios preparados y que encajan con las necesidades de tu empresa. </p>
                        <ButtonRegister />
                    </Grid>
                    <Grid item lg={7} xs={12}>
                        <img src={reduce} className="body_img" alt="fórmate" />
                    </Grid>
                </Grid>
                <h3>¿Cómo funciona?</h3>
                <Grid container className="body_how">
                    <Grid item lg={4} sm={4} md={4}>
                        <CardHow color="card_how_header_blue" icon={paso1} title="Regístrate" descpription="Regístrate y nosotros nos pondremos en contacto contigo con la intención de empezar a planificar los retos y las competiciones." />
                    </Grid>
                    <Grid item lg={4} sm={4} md={4}>
                        <CardHow color="card_how_header_red" icon={paso2} title="Sesiones" descpription="Una vez hayamos organizado el evento, empezaremos con las sesiones las cuales durarán aproximadamente dos semanas." />

                    </Grid>
                    <Grid item lg={4} sm={4} md={4}>
                        <CardHow color="card_how_header_orange" icon={paso3} title="Resultados" descpription="Al acabar las sesiones reuniremos todos los datos de los mejores candidatos y crearemos analíticas." />

                    </Grid>
                </Grid>
                <h3> Empieza ahora y deja de contratar a ciegas </h3>
                <h4> EL PRIMER EVENTO TE SALE TOTALMENTE GRATIS </h4>
                <h5> Ponte en contacto con nosotros para saber más.</h5>

                <div className="company_footer">
                    <h1>¿Preparado para unirte a nuestra comunidad?</h1>
                    <h3>Únete a la comunidad Pportfolio y deja de contratar a ciegas.</h3>
                    <div className="company_icons">
                        <SocialIcons />
                    </div>
                    <div class="company_register">
                        <ButtonOutlined title="Registrarme" action={actionRegister} color="white" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
