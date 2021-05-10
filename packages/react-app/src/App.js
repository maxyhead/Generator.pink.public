import React from "react";
import { 
  Route, 
  HashRouter as Router, 
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
  Toolbar,
  Modal
} from '@material-ui/core'

import { useWeb3React } from "@web3-react/core";
import { theme } from './theme';
import useWeb3Modal from "./hooks/useWeb3Modal";
import Header from './components/header/Header.component';
import Footer from './components/footer/Footer.component';

import Home from './containers/home/Home.component';
import Landing from './containers/landing/Landing.component';
import About from './containers/about/About.component';

import { ToastProvider, DefaultToast } from 'react-toast-notifications';



function App() {
  const [ darkMode, setDarkmode ] = React.useState(true)
  const { account, library, chainId } = useWeb3React();
  const [ chainID, setChainID ] = React.useState();
  const [ provider, loadWeb3Modal, logoutOfWeb3Modal] = useWeb3Modal();

  
  const useStyles = makeStyles((_theme) => ({
      container: {
        minHeight: '100vh',
        backgroundColor: darkMode ? theme.palette.background.dark : theme.palette.background.light,
      },
      header: {
        zIndex: '0'
      },
      footer: {
        zIndex: '0'
      },
      modal: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed'
      },
   
    })
  );
  const classes = useStyles();
    
 
  return (
    <ThemeProvider theme={theme}>
      <ToastProvider  
        autoDismiss
        autoDismissTimeout={6000}
        placement="bottom-right"

      > 
        <Router>
            <Grid 
              container
              className={classes.container}
            >
              <Grid item xs={12}>
                <Header 
                  nav1='create'
                  nav2='about'
                  provider={provider} 
                  loadWeb3Modal={loadWeb3Modal} 
                  logoutOfWeb3Modal={logoutOfWeb3Modal}
                  className={classes.header}
                />
              </Grid>
              <Grid item xs={12}>
                { account ? 
                  <Switch>
                    <Route path="/" exact component={Landing}/>
                    <Route path="/create" exact component={Home}/>
                    <Route path="/about" exact component={About}/>
                  </Switch>
                :
                   <Switch>
                    <Route path="/" exact component={Landing}/>
                    <Route path="/about" exact component={About}/>
                  </Switch>
                }
              </Grid>
              <Grid item xs={12} className={classes.footer}>
                <Footer
                  nav1='create'
                  nav2='about'
                  nav3='nav3'
                  
                />
              </Grid>
            </Grid>
           
        </Router>
      </ToastProvider>
    </ThemeProvider>
  );
};

export default App;

