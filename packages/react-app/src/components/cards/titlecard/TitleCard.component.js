import React from 'react';
import { 
    Grid,
    Typography
} from '@material-ui/core'

import MaterialCard from '@material-ui/core/Card';
import { useStyles } from './TitleCard.styles';

const TitleCard = () => {
    const classes = useStyles();
    return (
        <MaterialCard className={classes.card}>
            <Grid 
                container
                spacing={3}
                justify='center'
                alignItems='center'
            >              
                <Grid item >
                   <Typography variant='h4'>
                        Wallet Content
                   </Typography>
                </Grid>
            </Grid>

        </MaterialCard>
    )
}

export default TitleCard; 