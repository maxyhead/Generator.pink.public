import React from "react";
import {
  Grid, 
  Typography,
  Button
} from '@material-ui/core'
import { useStyles } from './Home.styles'
import { useWeb3React } from "@web3-react/core";

import MinterCard from '../../components/cards/mintercard/MinterCard.component'


function Home() {
  const {account, chainId, library } = useWeb3React();

  const classes = useStyles();

  React.useEffect(() => {
 
  
  }, [account, chainId]);

  return (
    <Grid
      container
      spacing={1}
      className={classes.container}
      alignItems='center'
      justify='center'
    >
      
      <Grid item xs={6}>
        <MinterCard/>
      </Grid>
    </Grid>        
  );
}

export default Home;

