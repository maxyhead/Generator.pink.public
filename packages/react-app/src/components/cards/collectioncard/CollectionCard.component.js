import React from 'react';
import { 
    Grid,
    Typography,
    Button,
    Input, 
    InputLabel
} from '@material-ui/core'

import MaterialCard from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

import { useWeb3React } from '@web3-react/core';
import { useStyles } from './CollectionCard.styles';

import useGetAllDocuments from '../../../hooks/useGetAllDocuments';

const CollectionCard = () => {
    const {account, chainId, library } = useWeb3React();
    const classes = useStyles();

    const docs = useGetAllDocuments([]);

    React.useEffect(()=>{
        // console.log(docs)

    }, [docs, chainId, account])
   

    return (
        <MaterialCard className={classes.card}>
            <Grid 
                container
                spacing={3}
                justify='center'
            >              
               <Grid item>

               </Grid>
               <Grid item xs={3}>
                   
               </Grid>
               <Grid item>
                   
               </Grid>
                
            </Grid>

        </MaterialCard>
    )
}

export default CollectionCard; 