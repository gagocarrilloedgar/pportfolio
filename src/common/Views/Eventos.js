import React from 'react'
import { Card, CardMedia, Grid, Typography, CardContent } from '@material-ui/core'
import FullWidthTabs from './Tabs'

export const EventosView = ({ image, title, description, reg_desc, link }) => {

    return (
        <React.Fragment>
            <Grid item xl={12} xs={12} sm={12}>
                <Card variant="outlined">
                    <CardMedia
                        component="img"
                        alt={title}
                        width="100%"
                        image={image}
                        title={title}
                    />
                    <CardContent>
                        <Typography align="left" gutterBottom variant="h4" component="h2">
                            {title}
                        </Typography>
                        <Typography align="left" variant="body1" color="textSecondary" component="p" gutterBottom>
                            {description}
                        </Typography>
                        <Grid container xl={12} xs={12}>
                            <Typography variant="h6" component="h2">
                                {"Comienza el: 11 de Enero de 2021 a las 12:00h "}
                            </Typography>
                        </Grid>
                    </CardContent>

                </Card>
            </Grid>
            <Grid item xl={12} xs={12}>
                <FullWidthTabs registerdescription={reg_desc} registerlink={link} />
            </Grid>
        </React.Fragment>
    )
}



