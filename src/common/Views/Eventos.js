import React from 'react'
import { Card, CardMedia, Grid, Typography, CardContent } from '@material-ui/core'
import FullWidthTabs from './Tabs'


export const EventosView = ({ image, title, description }) => {
    return (
        <React.Fragment>
            <Grid item xl={12} >
                <Card variant="outlined">
                    <CardMedia
                        component="img"
                        alt={title}
                        height="400"
                        image={image}
                        title={title}
                    />
                    <CardContent>
                        <Typography align="left" gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography align="left" variant="body2" color="textSecondary" component="p">
                            {description}
                        </Typography>
                    </CardContent>

                </Card>
            </Grid>
            <Grid item xl={12}>
                <FullWidthTabs />
            </Grid>
        </React.Fragment>
    )
}



