import React from "react";
import { 
  Link
} from 'react-router-dom';

import { 
  makeStyles
} from '@material-ui/core/styles';

import {
  Paper,
  Grid, 
  Typography,

} from '@material-ui/core'

import { theme } from '../theme'



function Home(props) {

  const useStyles = makeStyles((_theme) => ({
      container: {
        minHeight: '10vh',
        padding: '70px',
        color: props.darkMode ? theme.palette.text.dark : theme.palette.text.light,
        backgroundColor: props.darkMode ? theme.palette.background.dark : theme.palette.background.light,
      },
      paper: {
        color: props.darkMode ? theme.palette.text.dark : theme.palette.text.light,
        backgroundColor: props.darkMode ? theme.palette.paper.dark : theme.palette.paper.light,
        padding: '50px'
      }
    })
  );
  const classes = useStyles();

  return (
    <Grid 
      container 
      spacing={3}
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.container}
    >
      <Grid item xs>
        <Paper elevation={1} className={classes.paper}>
          <Typography variant="h6">
            Lorum esLorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
            like Aldus PageMaker including versions of Lorem Ipsum.
          </Typography>
        </Paper>  
      </Grid>
      <Grid item xs>
        <Paper elevation={1} className={classes.paper}>
          <Typography variant="h6">
            Lorum esLorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
            like Aldus PageMaker including versions of Lorem Ipsum.
          </Typography>
        </Paper>  
      </Grid>
      <Grid item xs>
        <Paper elevation={1} className={classes.paper}>
          <Typography variant="h6">
            Lorum esLorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
            like Aldus PageMaker including versions of Lorem Ipsum.
          </Typography>
        </Paper>  
      </Grid>
    </Grid>
  );
}

export default Home;
