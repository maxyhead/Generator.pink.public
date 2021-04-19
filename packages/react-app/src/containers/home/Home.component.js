import React from "react";
import {
  Grid, 
  Typography,
  Button
} from '@material-ui/core'
import { useStyles } from './Home.styles'
import { useWeb3React } from "@web3-react/core";

function Home() {
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
      spacing={0}
      direction='column'
      alignItems='center'
      className={classes.container}
    >
      <Grid item >
        <Typography variant="h1" className={classes.title} noWrap>
           Title
        </Typography>
      </Grid>
       <Grid item  >
        <Typography variant="h2"  className={classes.title}>
            subtitle
        </Typography>
      </Grid>
    </Grid>        
  );
}

export default Home;

