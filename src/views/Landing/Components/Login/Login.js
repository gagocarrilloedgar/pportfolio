import React, { useState, useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { CompanyContext, UserContext } from 'hooks';
import { getJWT, localSDB, navigation } from 'utils';
import { useEffect } from 'react';
import { GoogleLogIn } from 'common/GoogleLogIn';
import { Copyright } from 'common';
import useStyles from "./style"


export default function Login() {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(UserContext);
    const { toApp } = navigation();
    const [buttonChange, setBChange] = useState("Iniciar sesión empresa");
    const { blogin } = useContext(CompanyContext);
    const lastSegment = window.location.href.split("/").pop()


    const onSubmit = async (e) => {
        e.preventDefault();
        const user = {
            email: email,
            password: password,
        };

        if (lastSegment === "company") {
            await blogin(user);
        } else {
            await login(user);
        }
    };

    useEffect(() => {
        if (getJWT(localSDB.token)) {
            toApp();
        }

        if (lastSegment === "company") {
            setBChange("Iniciar sesión como usuario")
        } else {
            setBChange("Iniciar sesión empresa")
        }
    }, [lastSegment]);

    const changeWindow = () => {
        if (lastSegment === "company") {
            window.location = "/login";
        } else {
            window.location = "/login/company";
        }
    }


    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        ¡Hola otra vez!
          </Typography>
                    <form className={classes.form} validate onSubmit={onSubmit}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            value={email}
                            autoFocus
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Iniciar sesión
                            </Button>
                        <Grid container>

                            <Grid item>
                                <Link href="/register" variant="body2">
                                    {"¿Todavía no tienes cuenta?"}
                                </Link>
                            </Grid>
                        </Grid>
                        <GoogleLogIn tag={lastSegment} />
                        <Box mt={5}>
                            <Copyright />
                        </Box>
                        {/*<Box mt={3}>
                            <Grid item>
                                <Button variant="outlined" color="primary" onClick={changeWindow}>
                                    {buttonChange}
                                </Button>
                            </Grid>
    </Box>*/}
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}
