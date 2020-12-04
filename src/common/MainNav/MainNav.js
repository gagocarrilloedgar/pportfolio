import React from "react";
import { AppBar, Toolbar, IconButton, Grid } from "@material-ui/core";
import logo from "assets/logo.png"

const MainNav = (props) => {
    return (
        <AppBar
            className="topnav"
            elevation={0}
            color="transparent">
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
