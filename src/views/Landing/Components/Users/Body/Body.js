import { Grid } from '@material-ui/core'
import React from 'react'
import "./Body.css"
import img_formate from "../Assets/imagen_formate.png";
import img_compite from "../Assets/imagen_compite.png";
import img_diviertete from "../Assets/imagen_diviertete.png";
import img_encuentra from "../Assets/imagen_encuentra.png";
import ranking from "../Assets/ranking.png"
import comillas from "../Assets/comillas.png"

import paso1 from "assets/icono_paso_1.png"
import paso2 from "assets/icono_paso_2.png"
import paso3 from "assets/icono_paso_3.png"
import sponsors from "assets/entidades.png"
import { CardHow } from 'views/Landing/Common/Cards/CardHow';
import { SocialIcons } from 'views/Landing/Common/SocialIcons/SocialIcons';
import { ButtonContained, ButtonOutlined } from 'common';


const actionRegister = () => {
    window.location = "/"
}


const ButtonRegister = () => {

    return (
        <ButtonContained title="Registrarme" action={actionRegister} color="blue" />
    );
}

export const Body = () => {
    return (
        <div className="body">
            <h6>
                GAMIFICAMOS TU FUTURO
            </h6>
            <h3>
                Fórmate, compite y encuentra el trabajo que siempre has querido
            </h3>
            <p className="bodyText">
                En Pportfolio organizamos eventos semanales junto con empresas del sector tecnológico.
                En estas sesiones se ponen a disposición de los usuarios una serie de pruebas individuales y
                por equipos. El objetivo es conseguir los mejores resultados para obtener así una oferta de empleo.
            </p>
            <Grid container className="user_section">
                <Grid item lg={5} className="user_section_left">
                    <p className="user_section_title">Fórmate</p>
                    <p className="user_section_subtitle">Conviértete en un profesional con nuestros cursos </p>
                    <p className="user_section_text">Explora los diferentes cursos que hemos diseñado
                    y seleccionado para que te conviertasen el desarrollador
                    que quieres ser.</p>
                    <ButtonRegister />
                </Grid>
                <Grid item lg={7}>
                    <img src={img_formate} className="img_users" alt="fórmate" />
                </Grid>
            </Grid>
            <Grid container className="user_section">
                <Grid item lg={7}>
                    <img src={img_compite} className="img_users" alt="fórmate" />
                </Grid>
                <Grid item lg={5} className="user_section_rigth">
                    <p className="user_section_title">Compite</p>
                    <p className="user_section_subtitle">Compite contra otros usuarios </p>
                    <p className="user_section_text">Compite contra otros usuarios resolviendo pruebas individuales y por equipos que son de gran interés para las empresas.</p>
                    <ButtonRegister />
                </Grid>
            </Grid>
            <Grid container className="user_section">
                <Grid item lg={5} className="user_section_left">
                    <p className="user_section_title">Escala posiciones</p>
                    <p className="user_section_subtitle">Escala posiciones en el ranking </p>
                    <p className="user_section_text">Los usuarios con mejores resultados obtienen mejores puntuaciones y escalan más posiciones en el ranking. </p>
                    <ButtonRegister />
                </Grid>
                <Grid item lg={7}>
                    <img src={ranking} className="img_users" alt="fórmate" />
                </Grid>
            </Grid>
            <Grid container className="user_section">
                <Grid item lg={7}>
                    <img src={img_diviertete} className="img_users" alt="fórmate" />
                </Grid>
                <Grid item lg={5} className="user_section_rigth">
                    <p className="user_section_title">Diviértete</p>
                    <p className="user_section_subtitle">Diviértete con nuestro sistema de contratación </p>
                    <p className="user_section_text">Descubre una nueva forma de contratación mucho más transparente y diseñada especialmente para que los procesos sean lo más interactivos posibles.</p>
                    <ButtonRegister />
                </Grid>
            </Grid>
            <Grid container className="user_section">
                <Grid item lg={5} className="user_section_left">
                    <p className="user_section_title">Encuentra trabajo en una empresa TOP del sector</p>
                    <p className="user_section_subtitle">Escala posiciones en el ranking </p>
                    <p className="user_section_text">Los usuarios mejor posicionados en el ranking del evento obtendrán una oferta de trabajo. </p>
                    <ButtonRegister />
                </Grid>
                <Grid item lg={7}>
                    <img src={img_encuentra} className="img_users" alt="fórmate" />
                </Grid>
            </Grid>
            <h3>
                ¿Cómo funciona?
            </h3>
            <Grid container className="user_how">
                <Grid item lg={4}>
                    <CardHow color="card_how_header_blue" icon={paso1} title="Regístrate" descpription="Si quieres participar en los próximos eventos regístrate y nosotros nos pondremos en contacto contigo." />
                </Grid>
                <Grid item lg={4} >
                    <CardHow color="card_how_header_red" icon={paso2} title="Kick-off" descpription="Antes de empezar organizaremos una reunión para aclarar cuál será el timeline del evento." />

                </Grid>
                <Grid item lg={4}>
                    <CardHow color="card_how_header_orange" icon={paso3} title="A competir" descpription="Compite, trabaja en equipo y esfuérzate para conseguir una oferta de empleo en una gran empresa." />

                </Grid>
            </Grid>
            <div className="section_who">
                <img className="img_who" src={comillas} alt="who" />
                <h4 className="user_who">¿Quién está detrás de Pportfolio? </h4>
                <div className="who_user guille">
                    <h4> Guillem Moreno</h4>
                    <h5>Cofundador , CMO</h5>
                    <p>
                        ¿Cansado de las típicas plataformas de contratación?
                        Bienvenido. Pportfolio está diseñada de manera que puedas encontrar
                        trabajo de una forma más rápida y divertida.
                        No dejes pasar esta oportunidad.
                    </p>
                </div>
                <div className="who_user edgar">
                    <h4>Edgar Gago</h4>
                    <h5>Cofundador , CEO</h5>
                    <p>Pportfolio está diseñada para que los procesos de selección sean más justos, inclusivos y efectivos que en otras plataformas como InfoJobs o LinkedIn. Con la ambición y con la determinación necesaria puedes lograr todo lo que te propongas. </p>
                </div>
                <div className="who_user carlos">
                    <h4>Carlos Ibáñez</h4>
                    <h5>Cofundador , CTO</h5>
                    <p> Deja de echar CVs y descubre la nueva forma de buscar trabajo. A través de nuestros cursos y retos podrás demostrar tu determinación y potencial.</p>
                </div>
            </div>
            <div className="user_entidades">
                <h3>
                    Entidades que colaboran con Pportfolio
            </h3>
                <img alt="entidades" src={sponsors} />
            </div>
            <div className="user_footer">
                <h1>
                    ¿Preparado para unirte a nuestra comunidad?
                </h1>
                <h3>
                    Únete a cientos de usuarios y encuentra oportunidades a la altura de tu talento.
                </h3>
                <div className="user_icons">
                    <SocialIcons />
                </div>
                <div class="user_register">
                    <ButtonOutlined title="Registrarme" action={actionRegister} color="white" />
                </div>
            </div>
        </div>
    )
}
