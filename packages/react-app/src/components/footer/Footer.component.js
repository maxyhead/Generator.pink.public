import React from 'react'
import { Grid, AppBar, Toolbar, Typography, Link as MaterialLink} from '@material-ui/core'
import { useStyles } from './Footer.styles'
import { useWeb3React } from '@web3-react/core';
import useBlock from '../../hooks/useBlock';

import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DiscordIcon from '../../assets/DiscordIcon.png'
import Links from '../../constants/links';

const Footer = () => {
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
                                target="_blank" 
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
                                href={Links.terms}
                                target="_blank" 
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
                                target="_blank" 
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
                                href={Links.discord}
                                target="_blank" 
                                color="textPrimary"
                                variant="h5" 
                                noWrap
                            >
                                <img src={DiscordIcon} alt='Discord' className={classes.avatar}/>
                            </Typography>
                        </Grid> 
                        
                        <Grid item  >
                            <Typography 
                                className={classes.title} 
                                component={MaterialLink}
                                style={{textDecoration: 'none'}}
                                href={Links.linkedin}
                                target="_blank" 
                                color="textPrimary"
                                variant="h5" 
                                noWrap
                            >
                                <LinkedInIcon fontSize="large" />
                            </Typography>
                        </Grid> 
                        <Grid item  >
                            <Typography 
                                className={classes.title} 
                                component={MaterialLink}
                                style={{textDecoration: 'none'}}
                                href={Links.twitter}
                                target="_blank" 
                                color="textPrimary"
                                variant="h5" 
                                noWrap
                            >
                                <TwitterIcon fontSize="large" />
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
                                <span> 🟢 </span> Block: {block === 0 ? 'Loading....' : block}
                            </Typography>
                        :
                            <Typography 
                                className={classes.title} 
                                color="textPrimary"
                                variant="caption" 
                                noWrap
                            >
                                <span> 🔴 </span> Block: ?
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
                            © 2021 Certyfact
                        </Typography>
                    </Grid>
                    
                </Grid>
                </Grid>
                
            </Toolbar>
        </AppBar>  
    )
};

export default Footer;