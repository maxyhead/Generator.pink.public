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

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ContactUs from '../../components/contact/ContactUs.component'

import TextBlocks from '../../constants/text';

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
      spacing={0}
      direction='column'
      alignItems='center'
      className={classes.container}
    >
      <Grid 
        container 
        alignItems='flex-start'
        direction='column'
        className={classes.hero}
        spacing={6}
      >
        <Grid item xs={12}>
          <Typography variant="h1" className={classes.title}>
            {TextBlocks.hero_big}
          </Typography>
        </Grid>
        
        <Grid item >
            <Grid item xs={12}>
                <Typography variant="h5" >
                  {TextBlocks.title}
                </Typography>
            </Grid>
            <List dense={true} className={classes.mintercontainer}>
              <ListItem>
                <Typography variant="body1" className={classes.title}>
                  {TextBlocks.step1}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1" className={classes.title}>
                  {TextBlocks.step2}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1" className={classes.title}>
                  {TextBlocks.step3}
                </Typography>
              </ListItem>
            </List>
        </Grid>
       
      </Grid>
      
      <Grid 
        container 
        alignItems='center'
        className={classes.darkcontainer}
        spacing={6}
      >
        <Grid item xs={12}>
          <Typography variant="h4">
            {TextBlocks.hero_dark.title}
          </Typography>
        </Grid>
        <Grid container spacing={0} className={classes.darkcontainer}  >
          <Grid container >
            <Grid item >
              <Typography variant="h5" noWrap>
                  Generator  
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5" color='primary' >
                .  &nbsp; 
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">
               {TextBlocks.hero_dark.content_l1}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">
              {TextBlocks.hero_dark.content_l2}
              </Typography>
            </Grid>
          </Grid>
          
          
        </Grid>
        <Grid container item xs={12}
          justify='flex-end'
        >
          <Button
            variant='contained'
            color='default'
            component={Link}
            to='/about'
          >
              {TextBlocks.hero_dark.button}
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
             {TextBlocks.explainer.headertitle}
          </Typography>
        </Grid>
        <Grid container spacing={1} alignItems='flex-start' >
          <Grid  item md  className={classes.textcontainer} >
            <Grid item xs className={classes.box}>
              <Typography variant='h4' className={classes.title} gutterBottom>
                {TextBlocks.explainer.box_left.title}
              </Typography>
            </Grid>
            <Grid item className={classes.box} >
              <Typography variant='h6' gutterBottom >
              {TextBlocks.explainer.box_left.content_l1}
              </Typography>
            </Grid>
            <Grid item className={classes.box}>
              <Typography variant='h6' gutterBottom>
              {TextBlocks.explainer.box_left.content_l2}
              </Typography>
            </Grid>
           
          </Grid>
          <Grid  item  md className={classes.textcontainer} >
            <Grid item xs className={classes.box}>
              <Typography variant='h4' className={classes.title} gutterBottom>
                {TextBlocks.explainer.box_center.title}
              </Typography>
            </Grid>
            <Grid item className={classes.box}>
              <Typography variant='h6' gutterBottom>
              {TextBlocks.explainer.box_center.content_l1}
              </Typography>
            </Grid>
            <Grid item className={classes.box}>
              <Typography variant='h6' gutterBottom>
              {TextBlocks.explainer.box_center.content_l2}
              </Typography>
            </Grid>
           
           
          </Grid>
          <Grid item md className={classes.textcontainer} >
            <Grid item xs={12} className={classes.box}>
              <Typography variant='h4' className={classes.title} gutterBottom >
              {TextBlocks.explainer.box_right.title}
              </Typography>
            </Grid>
            <Grid item xs={12} className={classes.box}>
              <Typography variant='h6' gutterBottom>
              {TextBlocks.explainer.box_right.content_l1}
              </Typography>
            </Grid>    
            <Grid item xs={12}className={classes.box}>
              <Typography variant='h6' gutterBottom>
              {TextBlocks.explainer.box_right.content_l2}
              </Typography>
            </Grid>       
          </Grid>
         
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
            {TextBlocks.subcription.title}
          </Typography>
        </Grid>
        <Grid item xs={12} >
          <Typography variant="body1">
            {TextBlocks.subcription.content_l1}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <ContactUs/>
        </Grid>
      </Grid>
    </Grid>        
  );
}

export default Landing;

