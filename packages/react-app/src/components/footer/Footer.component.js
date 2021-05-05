import React from 'react'
import { Grid, AppBar, Toolbar, Typography, Modal, Button, Link as MaterialLink} from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useStyles } from './Footer.styles'
import { useWeb3React } from '@web3-react/core';
import useBlock from '../../hooks/useBlock';

import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';

import CookieModal from '../cookiemodal/CookieModal.component'

const Footer = ({title, nav1, nav2, nav3}) => {
    const { account } = useWeb3React();
  
    const classes = useStyles();
    const block = useBlock();

    const [ open, setOpen ] = React.useState(false);
    const [ isShown, setIsShown ] = React.useState(false);

    function getModalStyle() {
        const top = 50;
        const left = 50;
    
        return {
            top: `${top}%`,
            left: `${left}%`,
            transform: `translate(-${top}%, -${left}%)`,
        };
    }

    const handleOpen = () => {
        setOpen(true);
      };
    
    const handleClose = () => {
        setOpen(false);
    };


    
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
                                variant="subtitle" 
                                noWrap
                            >
                                Imprint
                            </Typography>
                        </Grid>
                        <Grid item >
                            <Typography 
                                className={classes.title}  
                                color="textPrimary"
                                variant="subtitle" 
                                noWrap
                            >
                                |
                            </Typography>
                        </Grid>
                        <Grid item >
                            <Typography 
                                className={classes.title}  
                                color="textPrimary"
                                variant="subtitle" 
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
                                variant="subtitle" 
                                noWrap
                            >
                                |
                            </Typography>
                        </Grid>

                        <Grid item >
                            <Typography 
                                className={classes.title}  
                                color="textPrimary"
                                variant="subtitle" 
                                component={MaterialLink}
                                style={{textDecoration: 'none'}}
                                onClick={handleOpen}
                                noWrap
                            >
                                Cookies 
                            </Typography>
                        </Grid>
  
                        <Grid item >
                            <Typography 
                                className={classes.title}  
                                color="textPrimary"
                                variant="subtitle" 
                                noWrap
                            >
                                |
                            </Typography>
                        </Grid>
                        <Grid item >
                            <Typography 
                                className={classes.title}  
                                color="textPrimary"
                                variant="subtitle" 
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
                <Modal
                    style={getModalStyle()}
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                >
                    <>
                        <CookieModal
                            handleClose={handleClose}
                        />
                    </>
                </Modal> 
            </Toolbar>
        </AppBar>  
    )
};

export default Footer;