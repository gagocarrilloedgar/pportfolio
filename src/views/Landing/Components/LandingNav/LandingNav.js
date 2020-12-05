import { Grid } from '@material-ui/core';
import MainNav from 'common/MainNav/MainNav'
import React, { useState } from 'react'
import "./LandingNav.css";




export const LandingNav = () => {

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
        <MainNav>
            <Grid item lg={1} xs={4}>
                <p className={scrollDiv ? "navElement active" : "navElement"} onClick={() => window.location = "/index"}> SOY TALENTO</p>
            </Grid>
            <Grid item lg={1} xs={4}>
                <p className={scrollDiv ? "navElement active" : "navElement"} onClick={() => window.location = "/index/business"}> SOY EMPRESA</p>
            </Grid>
        </MainNav>
    )
}
