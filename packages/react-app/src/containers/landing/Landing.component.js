import React from "react";
import {
  Grid, 
  Typography,
  Button,
  Modal
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useStyles } from './Landing.styles'
import { useWeb3React } from "@web3-react/core";
import { addresses } from "@project/contracts";

import WalletButton from '../../components/buttons/WalletButton'
import WalletModal from '../../components/walletmodal/WalletModal.component'


function Landing( { }) {
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
        alignItems='center'
        className={classes.hero}
        spacing={3}
      >
        <Grid item xs={12}>
          <Typography variant="h1" className={classes.title}>
            Hi! I will generate an NFT from your file.
          </Typography>
        </Grid>
        <Grid container item xs={12} alignItems='center' justify='flex-end' >
          {account ? 
            <Button 
              variant='contained'
              color='primary'
              size='large'
              className={classes.bigbutton}
              component={Link}
              to={'/home'}
            >
              <Typography variant='h4'>
                Create
              </Typography>
            </Button>
            :
            <WalletButton/>
          }
          
        </Grid>
      </Grid>
      
      <Grid 
        container 
       
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
          <Typography variant="h6" className={classes.subscription}>
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
        alignItems='center'
        className={classes.hero}
        spacing={3}
      >
        <Grid item xs={12}>
          <Typography variant="h5" className={classes.bordersubtile}>
              Why
          </Typography>
        </Grid>
        <Grid container spacing={2} alignItems='flex-end' className={classes.box} >
          <Grid  item md spacing={2} className={classes.textcontainer} alignItems='flex-start'>
            <Grid item xs className={classes.box}>
              <Typography variant='h4' className={classes.title} gutterBottom>
                Problem
              </Typography>
            </Grid>
            <Grid item className={classes.box} >
              <Typography variant='h6' gutterBottom >
                Who would buy a jpg-file for $69 million if it needs to be sure that the file is unique?
              </Typography>
            </Grid>
            <Grid item className={classes.box}>
              <Typography variant='h6' gutterBottom>
                In conventional IT, such a purchase would never have happened digitally, because the risk of a copyable proof of ownership would be too big.
              </Typography>
            </Grid>
           
          </Grid>
          <Grid  item  md className={classes.textcontainer} alignItems='flex-start'>
            <Grid item xs className={classes.box}>
              <Typography variant='h4' className={classes.title} gutterBottom>
                Solution
              </Typography>
            </Grid>
            <Grid item className={classes.box}>
              <Typography variant='h6' gutterBottom>
                With blockchain technology it is possible to generate digital proof of ownership and the purchase of the jpg-file for $69 million has happened. 
              </Typography>
            </Grid>
            <Grid item className={classes.box}>
              <Typography variant='h6' gutterBottom>
                The jpg-file was tokenized and reference date have been saved on an object called Non Fungible Token (NFT).
              </Typography>
            </Grid>
           
           
          </Grid>
          <Grid item md spacing={2} className={classes.textcontainer} alignItems='flex-start'>
            <Grid item xs={12} className={classes.box}>
              <Typography variant='h4' className={classes.title} gutterBottom >
                Execution
              </Typography>
            </Grid>
            <Grid item xs={12} className={classes.box}>
              <Typography variant='h6' gutterBottom>
                Generator. is a service which creates Non Fungible Tokens (NFTs) based on any uploaded file.
              </Typography>
            </Grid>    
            <Grid item xs={12}className={classes.box}>
              <Typography variant='h6' gutterBottom>
                The created token including the reference date of the file will be stored on the Ethereum blockchain.
              </Typography>
            </Grid>       
          </Grid>
         
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" className={classes.bordersubtile}>
              Video
          </Typography>
        </Grid>
      
      </Grid>
      <Grid 
        container 
     
        alignItems='center'
        className={classes.subscription}
        spacing={2}
      >
        <Grid item xs={12} >
          <Typography variant="h5" className={classes.bordersubtile}>
              Subscription
          </Typography>
        </Grid>
        <Grid item xs={12} >
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

export default Landing;

