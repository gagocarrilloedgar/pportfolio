import React, { useContext } from "react";
import {
    Card,
    CardActions,
    CardContent,
    CssBaseline,
    Grid,
    Container,
    TextField,
    Typography,
    Button,
    CardHeader,
    FormControl,
    InputLabel,
    InputAdornment,
    IconButton,
    OutlinedInput,
} from "@material-ui/core";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';



import { UserContext } from "hooks";
import { useTranslation } from "react-i18next";
import clsx from 'clsx';
import useStyles from "./style";

const UProfile = () => {
    const { user, handleChange, updateUserById } = useContext(UserContext);
    const classes = useStyles();
    const { t } = useTranslation();
    console.log(user);

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: true,
    });

    const handleChange2 = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl" className={classes.container} >
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={4} lg={4} xl={4} >
                        <Card className={classes.score} raised>
                            <CardHeader title="Puntiació ranking global" />
                            <CardContent className={classes.score_context}>
                                <Typography variant="h2">
                                    {user.rank}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4} lg={4} xl={4} >
                        <Card className={classes.score} raised>
                            <CardHeader title="Puntuación hard skills" />
                            <CardContent className={classes.score_context}>
                                <Typography variant="h2">
                                    {user.hardlevel}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4} lg={4} xl={4} >
                        <Card className={classes.score} raised>
                            <CardHeader title="Puntuación soft skills" />
                            <CardContent className={classes.score_context}>
                                <Typography variant="h2">
                                    {user.softlevel}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} lg={12} sm={12} xs={12}>
                        <Card className={classes.card} raised>
                            <CardHeader align="left" subheader={"Información general"} />
                            <CardContent className={classes.cardContent}>
                                <TextField
                                    margin="normal"
                                    id="name"
                                    label={t("profile.editable.name")}
                                    type="text"
                                    fullWidth
                                    multiline
                                    value={user.username}
                                    onChange={handleChange("username")}
                                    variant="outlined"
                                />
                                <TextField
                                    margin="normal"
                                    id="name"
                                    label={t("profile.editable.email")}
                                    type="text"
                                    fullWidth
                                    multiline
                                    value={user.email}
                                    onChange={handleChange("email")}
                                    variant="outlined"
                                />
                                <TextField
                                    id="outlined-full-width"
                                    label={"Quien soy"}
                                    fullWidth
                                    value={user.whoAmI}
                                    onChange={handleChange("whoAmI")}
                                    multiline
                                    margin="normal"
                                    rows={3}
                                    variant="outlined"
                                />
                                <TextField
                                    margin="normal"
                                    id="name"
                                    label={"Que busco"}
                                    placeholder={"Cuentanos que estabas buscando que tipo de emrpesas te interan y dónde crees que te sentirias más mejor."}
                                    value={user.lookingFor}
                                    onChange={handleChange("lookingFor")}
                                    type="text"
                                    fullWidth
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                />
                            </CardContent>
                            <CardActions className={classes.cardActions1}>
                                <Button onClick={updateUserById} color="primary" size="small">
                                    {t("profile.editable.buttons.save")}
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} lg={12} xl={12}>
                        <Card className={classes.score} raised>
                            <CardHeader align="left" subheader={"Contraseñas y seguridad"} />
                            <CardContent>
                                <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={values.showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        onChange={handleChange2('password')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        labelWidth={70}
                                    />
                                </FormControl>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    {"Guardar"}
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container >
        </React.Fragment >
    );
};

export default UProfile;
