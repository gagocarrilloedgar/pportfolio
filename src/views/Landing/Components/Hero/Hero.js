import React, { useEffect, useState } from "react";
import { Container, Grid } from "@material-ui/core";
import "./Hero.css";
import emailjs, { init } from "emailjs-com";


export const Hero = () => {
    const lastSegment = window.location.href.split("/").pop();
    const [title, setTitle] = useState("");
    const [headerTitle, setHeader] = useState("");
    const [formTemplate, setForm] = useState({
        subject: "Newsubscriber",
        email: "",
    });

    init("user_vGGDJmKkq8tFCVNrdG5HI");

    useEffect(() => {
        if (lastSegment === "business") {
            setTitle("SOY TALENTO");
            setHeader("La fiebre gaming ha llegado a los procesos de selección");

        } else {
            setTitle("SOY EMPRESA");
            setHeader("Tú pones el talento, nosotros las ofertas de empleo");
        }
    }, [lastSegment]);

    const handleChange = () => {
        if (lastSegment === "business") {
            window.location = "/index"
        } else {
            window.location = "/index/business"
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let formParameters = {
            email: formTemplate.email,
        };

        emailjs
            .send(
                "pportfolio",
                "user_subs",
                formParameters,
                "user_vGGDJmKkq8tFCVNrdG5HI"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        resetForm();

        alert("Hemos recivido tu correo, pronto nos pondremos en contacto contigo");
        window.location.reload();


    };

    const resetForm = () => {
        setForm({
            email: "",
            subject: "Newsubscriber",
        });
    };

    const handleChangeEmail = (prop) => (event) => {
        setForm({
            ...formTemplate,
            [prop]: event.target.value,
        });
    };

    console.log(formTemplate);





    return (

        <div className="Hero" >
            <Container>
                <Grid item sm={12} lg={12}>
                    <h1>
                        {headerTitle}
                    </h1>
                    <h5>
                        {"Pportfolio es una nueva plataforma de contratación que a través de la gamificación revoluciona la forma en la que se encuentra trabajo y se progresa profesionalmente en el sector tecnológico"}
                    </h5>
                </Grid>
                <div className="inputBox">
                    <form submit={handleSubmit}>
                        <input onChange={handleChangeEmail("email")} type="email" placeholder="Tu correo electrónico va aquí" />
                        <input type="submit" onClick={handleSubmit} />
                    </form>
                </div>
                <div className="userType">
                    <p >{" ESPERA UN MOMENTO"}</p>
                    <button className="buttonMain" onClick={handleChange}>
                        {title}
                    </button>
                </div>
            </Container>
        </div >

    );
};

