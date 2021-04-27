import React from 'react'
import { Button, Grid, AppBar, Toolbar, Typography, Modal, Link as MaterialLink} from '@material-ui/core'
import { useWeb3React } from '@web3-react/core';
import { Link } from 'react-router-dom'
import { formatter } from '../../utils/utils'
import { useStyles } from './Header.styles'
import { addresses, abis } from "@project/contracts";

import useBalance from '../../hooks/useBalance';
import useTokenBalance from '../../hooks/useTokenBalance';

import WalletModal from '../walletmodal/WalletModal.component'
import SettingsIcon from '@material-ui/icons/Settings';

const WalletButton = ({ account, provider, loadWeb3Modal, logoutOfWeb3Modal, connected }) => {
    const classes = useStyles();
    const [ open, setOpen ] = React.useState(false);
    const [ isShown, setIsShown ] = React.useState(false)

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


    

    return (
        <div>
            <Button
                size="large"
                variant={connected} 
                color="primary"
                className={classes.button}
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
                onClick={
                    () => {
                    if (!provider) {
                    handleOpen()
                    loadWeb3Modal();
                    } else {
                    logoutOfWeb3Modal();
                    }
                    }
                }
                >
                {!provider ? 
                <>
                    <Typography variant="body2" noWrap>
                       Connect Wallet
                    </Typography>
                </> 
                : 
                    <Grid container item spacing={2} direction="row" className={classes.nowrapper}>
                        {isShown == true ?
                            <>
                            <Grid item>
                                <Typography variant="body2" >
                                    🟢  
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body2"noWrap>
                                    Disconnect Wallet
                                </Typography>
                            </Grid>
                            </>
                        :
                            <>
                            <Grid item>
                                <Typography variant="body2" >
                                    🟢  
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body2"noWrap>
                                    {account ? account.slice(0,16) : '0x'}...
                                </Typography>
                            </Grid>
                            </>
                        } 
                    </Grid>
                    
                    
                }
            </Button>
            <Modal
                style={getModalStyle()}
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
            >
                <>
                    <WalletModal
                        handleClose={handleClose}
                    />
                </>
            </Modal> 
        </div>
    )
};

const Header = ({title, nav1, nav2, nav3, provider, loadWeb3Modal, logoutOfWeb3Modal}) => {
    const { account, library } = useWeb3React();
    const [ connected, setConnected ] = React.useState('contained');

    const accountBalance = useBalance();
    const classes = useStyles();
  
    React.useEffect(() => {
        if(account) {
           
        }
    }, [account, accountBalance])

    return (
        <AppBar position='relative' color='transparent' elevation={0} >
            <Toolbar className={classes.header}>
                <Grid 
                    container
                    spacing={2}
                    alignItems="center"
                    className={classes.nowrapper}
                >
                    <Grid  container  direction="row" justify="flex-start" alignItems="center" >
                        <Grid item >
                            <Typography 
                                
                                component={Link}
                                to={`/`} 
                                color="textPrimary"
                                variant="h4" 
                                noWrap
                            >
                                Generator 
                            </Typography>
                        </Grid>
                        <Grid item >
                            <Typography 
                                color="primary"
                                variant="h4" 
                                noWrap
                            >
                            .
                            </Typography>
                        </Grid>
                        
                    </Grid>
                    <Grid  item >
                        <Grid 
                            container
                            spacing={4}
                            direction="row"
                            justify="center"
                            alignItems="center"
                            className={classes.nowrapper}
                        >
                            <Grid item  >
                                <Typography 
                                    className={classes.title} 
                                    component={Link}
                                    to={`/tokensale`} 
                                    color="textPrimary"
                                    variant="h5" 
                                    noWrap
                                >
                                    {nav1}
                                </Typography>
                            </Grid>
                            <Grid item  >
                                <Typography 
                                    className={classes.title} 
                                    component={Link}
                                    to={`/${nav2}`} 
                                    color="textPrimary"
                                    variant="h5" 
                                    noWrap
                                >
                                    {nav2}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid 
                       container  direction="row" justify="flex-end" alignItems="center"
                        
                    >
                        <Grid item >
                            <WalletButton account={account} provider={provider} loadWeb3Modal={loadWeb3Modal} logoutOfWeb3Modal={logoutOfWeb3Modal} connected={connected}/> 
                        </Grid>    
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>  
    )
};

export default Header;