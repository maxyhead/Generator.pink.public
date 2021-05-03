import React from 'react';
import { 
    Grid,
    Typography,
    Button,
    Input, 
    InputLabel
} from '@material-ui/core'

import MaterialCard from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import DateFnsUtils from '@date-io/date-fns';

import { DropzoneArea } from 'material-ui-dropzone';

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Tooltip from '@material-ui/core/Tooltip';
import HelpIcon from '@material-ui/icons/Help';
import AccountBalanceWalletRounded from '@material-ui/icons/AccountBalanceWalletRounded'
import { formatter, getUniqueID, unixdate, convertTimestamp } from '../../../utils/utils'
import { useWeb3React } from '@web3-react/core';
import { useStyles } from './MinterCard.styles';

import BackspaceIcon from '@material-ui/icons/Backspace';

import BasicInput from '../../inputs/BasicInput';
import useClientIP from '../../../hooks/useClientIp';
import useUploadFile from '../../../hooks/useUploadFile';
import useCurrentPrice from '../../../hooks/useCurrentPrice';
import useBalance from '../../../hooks/useBalance';
import useMintToken from '../../../hooks/useMintToken';

const MinterCard = () => {
    const {account, chainId, library } = useWeb3React();
    const ip = useClientIP();
    const [ UUID, setUUID ] = React.useState('');
    const [ title, setTitle] = React.useState('');
    const [ selectedDate, setSelectedDate] = React.useState(new Date());
    const [ selectedUnixDate, setUnixDate ] = React.useState(unixdate(new Date()));
    const [ description, setDescription] = React.useState('');
    const [ email, setEmail ] = React.useState('');
    const [ site, setSite ] = React.useState('');
    const [ file, setFile ] = React.useState({});
    const [ fileBuffer, setFileBuffer ] = React.useState();
    const [ ipfsHash, setIpfsHash ] = React.useState();
    const { onMint } = useMintToken(
        UUID,
        title, 
        description, 
        ipfsHash,
        selectedUnixDate, 
        email,
        site, 
        ip 
    );
    const { hash, onUpload } = useUploadFile(fileBuffer, title, UUID);
    const reader = new FileReader();
    const fee = useCurrentPrice();
    const userBalance = useBalance();
    const classes = useStyles();

    const onClear = (e) =>{
        setUUID(getUniqueID())
        setFile(undefined);
        setFileBuffer(null);
        setIpfsHash(undefined);
        setSelectedDate(new Date());
        setDescription('');
        setEmail('');
        setSite('');
        setUnixDate(unixdate(new Date()));
        setTitle('');
    }
    

    React.useEffect(()=>{
        setUUID(getUniqueID())
        if(hash) {
            console.log(hash)
            setIpfsHash(hash);
        }
    }, [account, hash])

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setUnixDate(unixdate(date))
    };

    const handleChangeFile = (newfiles) => {
        setFile(newfiles[0])    
        handleFile(newfiles[0]);
      };
    
     const handleDelete = deleted => {
        setFile(undefined);
        setFileBuffer(null)
    };

    const handleMint = (e) => {
        onMint();
        onClear();
    };


    const handleFile = (file) => {
        if(file !== undefined) {
            reader.readAsArrayBuffer(file);
            reader.onloadend = () => {
                const buffer =  Buffer(reader.result)
                setFileBuffer(buffer);
            }
        }
    };

    return (
        <MaterialCard className={classes.card}>
            <Grid 
                container
                spacing={3}
                justify='center'
            >              
                <Grid item xs={12}>
                    <CardHeader
                        subheader={
                            <Grid container className={classes.subheader} >
                                <Grid container item lg={6} alignItems='center' spacing={1}  >
                                    <Grid item > 
                                        <Typography variant='h6' color='primary'>
                                            🆔  
                                        </Typography> 
                                    </Grid>
                                    <Grid item > 
                                        <Typography variant='h5' color='primary'>
                                            {UUID}
                                        </Typography> 
                                    </Grid>
                                    <Grid item  >
                                        <Tooltip 
                                            title={ 
                                                "Unique ID number of the document. Please put this somewhere inside your file for verification"
                                                }>
                                            <IconButton size='small' >
                                                <HelpIcon fontSize='small'/>
                                            </IconButton>
                                        </Tooltip> 
                                    </Grid>
                                </Grid>
                                <Grid  container item lg={6} alignItems='center' spacing={1} >
                                    <Grid item >
                                        <Typography variant='h6'>
                                            🌐 
                                        </Typography> 
                                    </Grid>
                                    <Grid item >
                                        <Typography variant='h6'>
                                            {ip}
                                        </Typography> 
                                        
                                    </Grid>
                                    <Grid item >
                                        <Tooltip 
                                            title={ 
                                                "We use the IP of you computer as a identifier."
                                                }>
                                            <IconButton size='small' >
                                                <HelpIcon fontSize='small'/>
                                            </IconButton>
                                        </Tooltip>     
                                    </Grid>
                                    
                                                                 
                                </Grid>
                            
                                <Grid container item lg={6} alignItems='center' spacing={1}>
                                    <Grid item >
                                        <Typography variant='h6' noWrap>
                                            🪙 
                                        </Typography> 
                                    </Grid>
                                    <Grid item >
                                        <Typography variant='h6' noWrap>
                                            {fee ? library.utils.fromWei(fee, 'ether') : 'Loading...'}
                                        </Typography> 
                                    </Grid>
                                    <Grid item >
                                        <Tooltip 
                                            title={ 
                                                "Fee to be paid in ETH (5 USD) in addition to gas fees."
                                                }>
                                            <IconButton size='small' >
                                                <HelpIcon fontSize='small'/>
                                            </IconButton>
                                        </Tooltip>   
                                    </Grid>
                                    
                                          
                                </Grid>
                                <Grid container item lg={6} alignItems='center' spacing={1}>
                                    <Grid item >
                                        <Typography variant='h6' noWrap>
                                            🏦
                                        </Typography> 
                                    </Grid>
                                    <Grid item >
                                        <Typography variant='h6' noWrap>
                                            {userBalance ? library.utils.fromWei(userBalance, 'ether') : 'Loading...'}
                                        </Typography> 
                                    </Grid>
                                    <Grid item > 
                                        <Tooltip 
                                            title={ 
                                                "Connected wallet balance"
                                                }>
                                            <IconButton size='small' >
                                                <HelpIcon fontSize='small'/>
                                            </IconButton>
                                        </Tooltip>         
                                    </Grid>
                                </Grid>
                            </Grid>
                        
                        }
                        action={
                            <Button onClick={onClear} size='medium'>
                                <Typography variant='subtitle1' >
                                    CLEAR
                                </Typography>
                             
                                <BackspaceIcon/>
                            </Button>
                        }
                       
                    />
                </Grid>
                <Grid 
                    container
                    spacing={2}
                    className={classes.content}
                >
                    <Grid item xs={12} >
                        <BasicInput
                            type='text'
                            label='Token Title'
                            value={title}
                            onChange={(e)=>{setTitle(e.target.value)}}
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <BasicInput
                            type='text'
                            label='Description'
                            value={description}
                            onChange={(e)=>{setDescription(e.target.value)}}
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <BasicInput
                            type='text'
                            label='Contact E-Mail'
                            value={email}
                            onChange={(e)=>{setEmail(e.target.value)}}
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <BasicInput
                            type='text'
                            label='Reference Website'
                            value={site}
                            onChange={(e)=>{setSite(e.target.value)}}
                        />
                    </Grid>
                    <Grid container item xs={12}  justify='center'>
                        <MuiPickersUtilsProvider utils={DateFnsUtils} >
                            <KeyboardDatePicker
                                fullWidth={true}
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Validity Date of Token"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                            }}
                            />
                        </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item xs={12} className={classes.content}>
                        <DropzoneArea
                            acceptedFiles={['image/png', 'image/jpg', 'image/jpeg', 'image/svg', 'application/pdf', 'video/mov']}
                            fileObjects={file !== undefined ? file : ''}
                            onChange={handleChangeFile}
                            onDelete={handleDelete}
                            filesLimit={1}
                            maxFileSize={1048576000}
                            dropzoneText='Drag or Click to upload a file'
                            clearOnUnmount={true}
                            
                        />
              
                    </Grid>
                    <Grid container item xs={12} >
                        <Grid item xs={12}>
                           * Accepted files: .jpg / .jpeg / .png / .pdf / .mov
                       </Grid>
                    </Grid>
                    <Grid item xs={12} >
                        <Button
                            variant='contained'
                            fullWidth={true}
                            color='primary'
                            size='large'
                            disabled={ipfsHash !== undefined ? true : false}
                            onClick={onUpload}
                        >
                            Upload to IPFS
                        </Button>
                    </Grid>
                    <Grid item xs={12} >
                        <Button
                            variant='contained'
                            fullWidth={true}
                            color='primary'
                            size='large'
                            disabled={ipfsHash != undefined ? false : true}
                            onClick={handleMint}
                        >
                            Mint Token
                        </Button>
                    </Grid>
                </Grid>
                
            </Grid>

        </MaterialCard>
    )
}

export default MinterCard; 