import React from "react";
import { 
  Route, 
  BrowserRouter as Router, 
  Switch,
  Link
} from 'react-router-dom';

import { 
  createMuiTheme, 
  responsiveFontSizes, 
  makeStyles, 
  ThemeProvider 
} from '@material-ui/core/styles';

import {
  Button, 
  Grid, 
  Typography,
  Paper,
  AppBar,
  Toolbar
} from '@material-ui/core'

import { useWeb3React } from "@web3-react/core";
import { theme } from './theme';
import useWeb3Modal from "./hooks/useWeb3Modal";
import Header from './components/header/Header.component';
import Footer from './components/footer/Footer.component';

import Home from './containers/home/Home.component';


function App() {
  const [ darkMode, setDarkmode ] = React.useState(true)
  const { account, library, chainId } = useWeb3React();
  const [ chainID, setChainID ] = React.useState();
  const [ provider, loadWeb3Modal, logoutOfWeb3Modal] = useWeb3Modal();
  
  const useStyles = makeStyles((_theme) => ({
      container: {
        minHeight: '100vh',
        backgroundColor: darkMode ? theme.palette.background.dark : theme.palette.background.light,
      }
    })
  );
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Router>
          <Grid 
            container
            className={classes.container}
          >
            <Grid item xs={12}>
              <Header 
                title='Project'
                nav1='nav1'
                nav2='nav2'
                nav3='nav3'
                nav4='about'
                provider={provider} 
                loadWeb3Modal={loadWeb3Modal} 
                logoutOfWeb3Modal={logoutOfWeb3Modal}
              />
            </Grid>
            <Grid item xs={12}>
              <Switch>
                <Route path="/" exact component={Home}/>
              </Switch>
            </Grid>
            <Grid item xs={12}>
              <Footer
                nav1='nav1'
                nav2='nav2'
                nav3='nav3'
              />
            </Grid>
          </Grid>
      </Router>
    </ThemeProvider>
  );
};

export default App;

