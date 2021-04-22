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
          <Typography variant="h1" className={classes.title}>
            Hi! I will generate an NFT from your file.
          </Typography>
        </Grid>
      </Grid>
      
      <Grid 
        container 
        xs={12}  
        alignItems='center'
        className={classes.subcontainer}
        spacing={0}
      >
        <Grid item>
          <Typography variant="h5">
              The Service
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6" className={classes.subcontainer}>
              Generator. is a tokenization service for digital files. It creates an ERC-721 token on Ethereum blockchain which contains information of the referenced file.
          </Typography>
        </Grid>
        <Grid container item xs={12}
          justify='flex-end'
        >
          <Button
            variant='contained'
            color='default'
          >
              Learn More
          </Button>
        </Grid>
      </Grid>
      <Grid 
        container 
        xs={12}  
        alignItems='center'
        className={classes.hero}
        spacing={0}
      >
        <Grid item xs={12}>
          <Typography variant="h5" className={classes.bordersubtile}>
              Why
          </Typography>
        </Grid>
        <Grid item>
        
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" className={classes.bordersubtile}>
              Video
          </Typography>
        </Grid>
      
      </Grid>
      <Grid 
        container 
        xs={12}  
        alignItems='center'
        className={classes.subscription}
        spacing={2}
      >
        <Grid item xs={12} >
          <Typography variant="h5" className={classes.bordersubtile}>
              Subscription
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            Your Generator. account does not work with e-mail and password. Your wallet is the identifier instead.
            If you want to be kept informed by this page, please sign up with your e-mail address. We won't spam you!
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            INPUTFIELD AND CHECKBOX FOR THIS
          </Typography>
        </Grid>
        <Grid item xs={12} style={{minHeight: '100px'}}>
          <Typography variant="body1" gutterBottom>
           
          </Typography>
        </Grid>
      
      </Grid>
    </Grid>        
  );
}

export default Home;

