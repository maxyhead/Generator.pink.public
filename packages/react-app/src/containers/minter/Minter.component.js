import React from "react";
import {
  Grid, 
  Typography,
  Button
} from '@material-ui/core'
import { useStyles } from './Minter.styles'
import { useWeb3React } from "@web3-react/core";
import MinterCard from '../../components/cards/mintercard/MinterCard.component';
function Minter() {
  const {account, chainId, library } = useWeb3React();

  const classes = useStyles();

  React.useEffect(() => {
 
    if(!!account) {
      
    }
    
    return () => {
      
    }
  }, [account, chainId]);

  return (
    <Grid
      container
      spacing={1}
      direction='column'
      alignItems='center'
      className={classes.container}
    >
      <Grid 
        container 
        xs={12}  
        alignItems='center'
        className={classes.hero}
      >
        <Grid item xs>
          
        </Grid>
      </Grid>
    
    </Grid>        
  );
}

export default Minter;

