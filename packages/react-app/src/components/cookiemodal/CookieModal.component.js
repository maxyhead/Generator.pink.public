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
import {Helmet} from "react-helmet"
import CookieBot from 'react-cookiebot';

import { useStyles } from './CookieModal.styles';

import { MAX_UINT, formatter } from '../../utils/utils';
import { addresses, abis } from "@project/contracts";

const CookieModal = (props) => {
    const {account, chainId, library } = useWeb3React();

    const classes = useStyles();

    React.useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://consent.cookiebot.com/9495158d-f8d2-43b2-bfb4-82b5fbe849bf/cd.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script); // This will remove the script on unmount
        }
    }, []);

    return (
        <MaterialCard className={classes.card}>
            <CardContent >
             <div className="application">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>My Title</title>
                    <script id="CookieDeclaration" src="https://consent.cookiebot.com/9495158d-f8d2-43b2-bfb4-82b5fbe849bf/cd.js" type="text/javascript" async></script>
                </Helmet>
             
            </div>
            </CardContent>
        </MaterialCard>
    )
}

export default CookieModal;


