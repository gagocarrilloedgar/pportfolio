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
import { GoogleLogIn } from 'common/GoogleLogIn';
import { Copyright } from 'common';
import useStyles from "./style"
import { useEffect } from 'react';


export default function Register() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useContext(UserContext);
  const [buttonChange, setBChange] = useState("Ir al registro para empresas");

  const { bregister } = useContext(CompanyContext);

  const lastSegment = window.location.href.split("/").pop()

  const onSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username: email,
      password: password,
      email: email,
    };

    if (lastSegment === "company") {
      await bregister(user);
    } else {
      await register(user);
    }

  };

  useEffect(() => {

    if (lastSegment === "company") {
      setBChange("Ir al registro para usuarios")
    } else {
      setBChange("Ir al registro para empresas")
    }

  }, [lastSegment]);

  const changeWindow = () => {
    if (lastSegment === "company") {
      window.location = "/register";
    } else {
      window.location = "/register/company";
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
            Crear cuenta
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
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Registrarme
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/login" variant="body2">
                  {"¿Ya tienes cuenta? Inicia sesión aquí"}
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
