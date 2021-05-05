import React from 'react'
import {
    Typography, 
    Grid,
    Modal, 
    Button, 
    ButtonGroup,
    TextField, 
    Switch,
    Avatar, 
    Link
 } from '@material-ui/core'
import { useWeb3React } from '@web3-react/core';
import MaterialCard from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import { useStyles } from './CookieModal.styles';

import { MAX_UINT, formatter } from '../../utils/utils';
import { addresses, abis } from "@project/contracts";

const CookieModal = (props) => {
    const {account, chainId, library } = useWeb3React();

    const classes = useStyles();

    return (
        <MaterialCard className={classes.card}>
            <CardContent >
                <Grid
                    container
                    justify='center'
                    alignItems='center'
                    spacing={4}
                >
                    <Grid 
                        item 
                        xs={12}
                        spacing={0}
                        justify='center'
                        alignItems='center'
                        direction='column'
                    >   
                        <script id="CookieDeclaration" src="https://consent.cookiebot.com/9495158d-f8d2-43b2-bfb4-82b5fbe849bf/cd.js" type="text/javascript" async></script>
                    </Grid>
                </Grid>
            </CardContent>
        </MaterialCard>
    )
}

export default CookieModal;


