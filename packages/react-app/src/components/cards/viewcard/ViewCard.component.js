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
import LinearProgress from '@material-ui/core/LinearProgress';
import { useWeb3React } from '@web3-react/core';
import { useStyles } from './ViewCard.styles';

import useGetAllDocuments from '../../../hooks/useGetAllDocuments';
import ItemCard from '../itemcard/ItemCard.component';
import useGetUserDocuments from '../../../hooks/useGetUserDocuments';
import TitleCard from '../titlecard/TitleCard.component';

const renderCards = (docs) => {
    const cards = [];
    // console.log(docs[0].id)
    for(let i = 0; i < docs.length; i++) {
        cards.push(
        <Grid item lg={6} key={i}>
          <ItemCard
            id={docs[i].id}
          />
        </Grid>
      )
    }
  
    return cards;
    
  }

const ViewCard = () => {
    const {account, chainId, library } = useWeb3React();
    const classes = useStyles();

    const docs = useGetUserDocuments([]);

    React.useEffect(()=>{

    }, [docs, chainId, account])
   

    return (
        <Grid 
            container
            spacing={3}
            justify='center'
        >  
          <Grid item xs={12}>
            <TitleCard/>
          </Grid>
            {docs.length > 0 ? renderCards(docs) : <LinearProgress color='secondary'/>}
                
        </Grid>
    )
}

export default ViewCard; 