import React from "react";
import {
  Grid, 
  Typography,
  Link
} from '@material-ui/core'
import { useStyles } from './About.styles'

function About() {
 
  const classes = useStyles();

  return (
    
    <Grid 
      container 
      direction='column'
      alignItems='center'
      className={classes.hero}
    >
      <Grid container item xs={12} className={classes.bordersubtile}>
        <Typography variant="h5" >
          More
        </Typography>
      </Grid>
      <Grid container item xs={12}  spacing={6} className={classes.textcontainer} >
        <Grid item xs={12}>
          <Grid item xs >
            <Typography variant='h3' color='secondary' className={classes.title} >
              01/
            </Typography>
          </Grid>
          <Grid item  >
            <Typography variant='h4'  gutterBottom>
              What is the fee for the service?
            </Typography>
          </Grid>
          <Grid item >
            <Typography variant='body2' >
              The service fee is composed of the minting fee that the Ethereum blockchain charges for the creation of the Non Fungible Token (About USD 50) and can fluctuate. Fee will be displayed before execution. Generator. charges USD 5 per minting operation for providing the service. 
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid item xs >
            <Typography variant='h3' color='secondary' className={classes.title} >
              02/
            </Typography>
          </Grid>
          <Grid item  >
            <Typography variant='h4' gutterBottom >
              Which data is saved on the Token?
            </Typography>
          </Grid>
          <Grid item >
            <Typography variant='body2' >
              The <Link color='textPrimary' href='http://erc721.org/' target='_blank'>ERC-721</Link> will save meta data of the file to ensure the file can be referenced with the token including a hash value and the link to IPFS.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid item xs >
            <Typography variant='h3' color='secondary' className={classes.title} >
              03/
            </Typography>
          </Grid>
          <Grid item  >
            <Typography variant='h4' gutterBottom >
              Where will the uploaded file be saved?
            </Typography>
          </Grid>
          <Grid item >
            <Typography variant='body2' >
            The file will be saved in <Link color='textPrimary' href='https://ipfs.io/' target='_blank'>IPFS</Link>, a distributed data base in the internet.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid item xs >
            <Typography variant='h3' color='secondary' className={classes.title} >
              04/
            </Typography>
          </Grid>
          <Grid item  >
            <Typography variant='h4'  gutterBottom>
              More questions?
            </Typography>
          </Grid>
          <Grid item >
            <Typography variant='body2' >
              Reach out to  <Link color='textPrimary' href='mailto:info@certyfact.com' target='_blank'>info@certyfact.com</Link>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
       
  );
}

export default About;

