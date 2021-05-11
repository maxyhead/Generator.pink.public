import React from 'react';
import { 
    Grid,
    Typography,
    Button,
    Avatar
} from '@material-ui/core'

import MaterialCard from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import DateFnsUtils from '@date-io/date-fns';

import { DropzoneArea } from 'material-ui-dropzone';

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import HelpIcon from '@material-ui/icons/Help';
import { getUniqueID, unixdate } from '../../../utils/utils'
import { useWeb3React } from '@web3-react/core';
import { useStyles } from './MinterCard.styles';
import BackspaceIcon from '@material-ui/icons/Backspace';

import IpLogo from '../../../assets/IpLogo.png'
import MoneyLogo from '../../../assets/MoneyLogo.png'
import UUIDLogo from '../../../assets/UUIDLogo.png'
import WalletLogo from '../../../assets/WalletLogo.png'

import BasicInput from '../../inputs/BasicInput';
import useClientIP from '../../../hooks/useClientIp';
import useUploadFile from '../../../hooks/useUploadFile';
import useCurrentPrice from '../../../hooks/useCurrentPrice';
import useBalance from '../../../hooks/useBalance';
import useMintToken from '../../../hooks/useMintToken';
import useGetHash from '../../../hooks/useGetHash';


const FileType = require('file-type/browser');

const MinterCard = () => {
    const {account, chainId, library } = useWeb3React();
    const ip = useClientIP();
    const [ previeuwURL, setPrevieuwURL] = React.useState('');
    const [ UUID, setUUID ] = React.useState('');
    const [ title, setTitle] = React.useState('');
    const [ selectedDate, setSelectedDate] = React.useState(new Date());
    const [ selectedUnixDate, setUnixDate ] = React.useState(unixdate(new Date()));
    const [ description, setDescription] = React.useState('');
    const [ name, setName ] = React.useState('');
    const [ fullAddress, setFullAddress ] = React.useState('');
    const [ email, setEmail ] = React.useState('');
    const [ site, setSite ] = React.useState('');
    const [ file, setFile ] = React.useState();
    const [ fileBuffer, setFileBuffer ] = React.useState();
    const [ ipfsHash, setIpfsHash ] = React.useState();
    const { onMint } = useMintToken(
        UUID,
        title, 
        description, 
        ipfsHash,
        selectedUnixDate, 
        name, 
        fullAddress,
        email,
        site, 
        ip 
    );
    
    const { hash, onUpload } = useUploadFile(fileBuffer, title, UUID);
    const reader = new FileReader();
    const fee = useCurrentPrice();
    const userBalance = useBalance();
    const classes = useStyles();
    const previeuwHash = useGetHash(fileBuffer)
    const [ fileType, setFileType ] = React.useState();

    const onClear = (e) =>{
        setUUID(getUniqueID())
        handleDelete()
        setSelectedDate(new Date());
        setDescription(undefined);
        setEmail(undefined);
        setSite(undefined);
        setUnixDate(unixdate(new Date()));
        setTitle(undefined);
        setFileType(undefined);
        setFullAddress(undefined);
        setName(undefined);
        
    }
    
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
        setFileBuffer(null);
        setIpfsHash(undefined);
        setPrevieuwURL('');
    };

    const handleMint = (e) => {
        onMint().then(
            onClear()
        );
        
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
    
    React.useEffect(()=>{
        if(file !== undefined) {
            const objectURL = URL.createObjectURL(file);
            setPrevieuwURL(objectURL);
            (async () => {
                const response = await fetch(objectURL);
                const type = await FileType.fromStream(response.body);
                setFileType(type ? type.mime : '');
                // console.log(type ? type.mime : '');
                //=> {ext: 'jpg', mime: 'image/jpeg'}
            })();
        }
       
        setUUID(getUniqueID())
        if(hash) {
            // console.log(hash)
            setIpfsHash(hash);
        }

    }, [account, hash, file, fileBuffer])

  
    return (
        <MaterialCard className={classes.card}>
            <Grid 
                container
                spacing={3}
                justify='center'
            >              
                <Grid item xs={12}>
                    <CardHeader
                        title={
                        <Typography variant='h6' color='textPrimary' className={classes.subheader}>
                            HASH FROM FILE: {file ? previeuwHash : ''}   
                        </Typography>}
                        subheader={
                            <Grid container className={classes.subheader} >
                                <Grid container item lg={6} alignItems='center' spacing={1}  >
                                    <Grid item > 
                                        <img src={UUIDLogo} className={classes.avatar}/>
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
                                        <img src={IpLogo} className={classes.avatar}/>
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
                                        <img src={MoneyLogo} className={classes.avatar}/>
                                    </Grid>
                                    <Grid item >
                                        <Typography variant='h6' noWrap>
                                            {fee ? library.utils.fromWei(fee, 'ether') : 'Loading...'} ETH
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
                                        <img src={WalletLogo} className={classes.avatar}/>
                                    </Grid>
                                    <Grid item >
                                        <Typography variant='h6' noWrap>
                                            {userBalance ? library.utils.fromWei(userBalance, 'ether') : 'Loading...'} ETH
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
                                    CLEAR &nbsp;
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
                            label='Name'
                            value={name}
                            onChange={(e)=>{setName(e.target.value)}}
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <BasicInput
                            type='text'
                            label='Address'
                            value={fullAddress}
                            onChange={(e)=>{setFullAddress(e.target.value)}}
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
                    <Grid container item xs={12} className={classes.preview} >
                        <Grid item xs={12}>
                            {fileType === 'application/pdf' ? 
                                <object data={previeuwURL} className={classes.preview} />
                            :
                                <img src={previeuwURL} className={classes.preview}/>
                            }
                       </Grid>
                    </Grid>
                    <Grid item xs={12} className={classes.content}>
                        <DropzoneArea
                            acceptedFiles={['image/png', 'image/jpg', 'image/jpeg', 'image/svg', 'application/pdf', 'video/mov']}
                            showPreviews={false}
                            showPreviewsInDropzone={false}
                            onChange={handleChangeFile}
                            onDelete={handleDelete}
                            maxFileSize={1048576000}
                            filesLimit={1}
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