import React from "react";
import {
  Grid, 
  Typography,
  Button
} from '@material-ui/core'
import { useStyles } from './Home.styles'
import { useWeb3React } from "@web3-react/core";

import MinterCard from '../../components/cards/mintercard/MinterCard.component'
import ViewCard from '../../components/cards/viewcard/ViewCard.component';
import { useToasts } from 'react-toast-notifications'

function Home() {
  const {account, chainId, library } = useWeb3React();
  const { addToast } = useToasts();
  const classes = useStyles();

  React.useEffect(() => {
    if(chainId !== 42 || chainId !== 1) {
      addToast('Please connect to the correct network.', {
        appearance: 'info',
        autoDismiss: true,
    })
    }
  
  }, [account, chainId]);

  return (
    <Grid
      container
      spacing={2}
      className={classes.container}
      alignItems='center'
      justify='center'
      direction='column'
    >
    
      <>
        <Grid item xs={12} className={classes.subcontainer}>
          <MinterCard/>
        </Grid>
        <Grid item xs={12} className={classes.subcontainer}>
          <ViewCard/>
        </Grid>
      </>
      
    </Grid>        
  );
}

export default Home;

