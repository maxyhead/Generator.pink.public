import React from 'react'
import { Grid, AppBar, Toolbar, Typography, Modal, Button, Link as MaterialLink} from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useStyles } from './Footer.styles'
import { useWeb3React } from '@web3-react/core';
import useBlock from '../../hooks/useBlock';

import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


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
                    justify='space-between'
                    spacing={3}
                >
                
                <Grid container item direction='column' xs spacing={3}>
                    <Grid 
                        container
                        item
                        spacing={3}
                        alignItems="center"
                        justify="flex-start"
                    >
                        <Grid item >
                            <Typography 
                                className={classes.title}  
                                color="textPrimary"
                                variant="subtitle1" 
                                noWrap
                            >
                                Imprint
                            </Typography>
                        </Grid>
                        <Grid item >
                            <Typography 
                                className={classes.title}  
                                color="textPrimary"
                                variant="subtitle1" 
                                noWrap
                            >
                                |
                            </Typography>
                        </Grid>
                        <Grid item >
                            <Typography 
                                className={classes.title}  
                                color="textPrimary"
                                variant="subtitle1" 
                                component={MaterialLink}
                                style={{textDecoration: 'none'}}
                                href='https://www.facebook.com/odotflights'
                                noWrap
                            >
                                Terms & Privacy 
                            </Typography>
                        </Grid>
                        <Grid item >
                            <Typography 
                                className={classes.title}  
                                color="textPrimary"
                                variant="subtitle1" 
                                noWrap
                            >
                                |
                            </Typography>
                        </Grid>
  
                        <Grid item >
                            <Typography 
                                className={classes.title}  
                                color="textPrimary"
                                variant="subtitle1" 
                                noWrap
                            >
                                More
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid 
                        container
                        item
                        spacing={3}
                        alignItems="center"
                        justify="flex-start"
                    >
                        
                        <Grid item  >
                            <Typography 
                                className={classes.title} 
                                component={MaterialLink}
                                style={{textDecoration: 'none'}}
                                href='https://www.linkedin.com/company/hyperpaper'
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
                                href='https://twitter.com/Certyfact'
                                target="_blank" 
                                color="textPrimary"
                                variant="h5" 
                                noWrap
                            >
                                <TwitterIcon fontSize="large"/>
                            </Typography>
                        </Grid> 
                    </Grid>


                </Grid>
                    
                <Grid 
                    container item xs={6}
                    spacing={3}
                    alignItems="center"
                    justify="flex-end"
                >
                    <Grid item >
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
                    <Grid item >
                        <Typography 
                            className={classes.title}  
                            color="textPrimary"
                            variant="caption" 
                            noWrap
                        >
                            © 2021 by Roston Dev
                        </Typography>
                    </Grid>
                    
                </Grid>
                </Grid>
                
            </Toolbar>
        </AppBar>  
    )
};

export default Footer;