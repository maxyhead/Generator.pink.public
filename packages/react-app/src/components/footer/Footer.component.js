import React from 'react'
import { Grid, AppBar, Toolbar, Typography, Modal, Link as MaterialLink} from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useStyles } from './Footer.styles'
import { useWeb3React } from '@web3-react/core';
import useBlock from '../../hooks/useBlock';

import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';


const Footer = ({title, nav1, nav2, nav3}) => {
    const { account } = useWeb3React();
    const classes = useStyles();
    const block = useBlock();
    
    React.useEffect(() => {
       
    }, [account, block])

    return (
        <AppBar position='relative' color='transparent' elevation={0} >
            <Toolbar className={classes.footer}>
                <Grid 
                    container
                    spacing={5}
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item xs>
                        <Typography 
                            className={classes.title}  
                            color="textPrimary"
                            variant="h6" 
                            noWrap
                        >
                            © 2021 by Roston Dev
                        </Typography>
                    </Grid>
                    <Grid container justify='center' item xs={6}  >
                        <Grid 
                            container
                            spacing={1}
                            direction="row"
                            justify="center"
                            alignItems="center"
                            className={classes.nowrapper}
                        >
                            <Grid item xs >
                                <Typography 
                                    className={classes.title} 
                                    component={Link}
                                    to={`/tokensale`} 
                                    color="textPrimary"
                                    variant="h6" 
                                    noWrap
                                >
                                    {nav1}
                                </Typography>
                            </Grid>
                            <Grid item xs >
                                <Typography 
                                    className={classes.title} 
                                    component={Link}
                                    to={`/${nav2}`} 
                                    color="textPrimary"
                                    variant="h6" 
                                    noWrap
                                >
                                    {nav2}
                                </Typography>
                            </Grid>
                            <Grid item xs >
                                <Typography 
                                    className={classes.title} 
                                    component={MaterialLink}
                                    style={{textDecoration: 'none'}}
                                    href='https://www.o.flights/'
                                    target="_blank" 
                                    color="textPrimary"
                                    variant="h6" 
                                    noWrap
                                >
                                    {nav3}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container item xs={3} >
                        <Grid 
                            container
                            spacing={1}
                            direction="row"
                            justify="center"
                            alignItems="flex-end"
                            className={classes.nowrapper}
                        >
                            <Grid item xs={3}>
                                <Typography 
                                    className={classes.title} 
                                    color="textPrimary"
                                    variant="h6" 
                                    noWrap
                                >
                                Email: .....
                                </Typography>
                            </Grid>
                            <Grid item  >
                                <Typography 
                                    className={classes.title} 
                                    component={MaterialLink}
                                    style={{textDecoration: 'none'}}
                                    href='https://www.facebook.com/odotflights'
                                    target="_blank" 
                                    color="textPrimary"
                                    variant="h5" 
                                    noWrap
                                >
                                    <FacebookIcon fontSize="large"/>
                                </Typography>
                            </Grid>
                            <Grid item  >
                                <Typography 
                                    className={classes.title} 
                                    component={MaterialLink}
                                    style={{textDecoration: 'none'}}
                                    href='https://www.linkedin.com/company/odotflights/'
                                    target="_blank" 
                                    color="textPrimary"
                                    variant="h5" 
                                    noWrap
                                >
                                    <LinkedInIcon fontSize="large"/>
                                </Typography>
                            </Grid> 
                            <Grid item  >
                                <Typography 
                                    className={classes.title} 
                                    component={MaterialLink}
                                    style={{textDecoration: 'none'}}
                                    href='https://twitter.com/odotflights'
                                    target="_blank" 
                                    color="textPrimary"
                                    variant="h5" 
                                    noWrap
                                >
                                    <TwitterIcon fontSize="large"/>
                                </Typography>
                            </Grid> 
                            <Grid item xs>
                               
                                   {account ?
                                        <Typography 
                                            className={classes.title} 
                                            color="textPrimary"
                                            variant="caption" 
                                            noWrap
                                        >
                                           🟢 Block: {block == 0 ? 'Loading....' : block}
                                        </Typography>
                                   :
                                        <Typography 
                                            className={classes.title} 
                                            color="textPrimary"
                                            variant="caption" 
                                            noWrap
                                        >
                                            🔴 Block: ?
                                        </Typography>
                                    } 
                                
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>  
    )
};

export default Footer;