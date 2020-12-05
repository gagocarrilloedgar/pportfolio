import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Grid } from "@material-ui/core";
import logo from "assets/logo.png"
import "./MainNav.css"

const MainNav = (props) => {

    const [scrollDiv, setScroll] = useState(false);


    const changeBackground = () => {
        if (window.scrollY >= 500) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <AppBar
            className="topnav"
            elevation={0}
            color="transparent"
            className={scrollDiv ? "bodynav white" : "bodynav"}>
            <Toolbar>
                <IconButton edge="start">
                    <img src={logo} width="40px" />
                </IconButton>

                <Grid container justify="flex-end">
                    {props.children}
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default MainNav;
