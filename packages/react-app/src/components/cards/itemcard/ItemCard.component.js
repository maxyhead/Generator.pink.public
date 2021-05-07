import React, { useState } from 'react';
import { 
    Grid,
    Typography,
    Button,
    Input, 
    InputLabel,
    Link as MaterialLink,
    ButtonGroup,
    Modal,
    TextField
} from '@material-ui/core'

import {convertTimestamp, checkFileType} from '../../../utils/utils'


import LinearProgress from '@material-ui/core/LinearProgress';

import MaterialCard from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

import { useWeb3React } from '@web3-react/core';
import { useStyles } from './ItemCard.styles';

import useGetDocument from '../../../hooks/useGetDocument';
import useGetURI from '../../../hooks/useGetURI';

import useBurn from '../../../hooks/useBurn'
import useTransfer from '../../../hooks/useTransfer'

const FileType = require('file-type/browser');



const ItemCard = ({id}) => {
    const {account, chainId, library } = useWeb3React();

    const item = useGetDocument(id);
    const uri = useGetURI(id);
    const [ fileType, setFileType ] = React.useState('');
    const [ reciverer, setReciver ] = React.useState('');
    const { onTransfer } = useTransfer(id, reciverer);
    const [ open, setOpen ] = React.useState(false);
    const [ isShown, setIsShown ] = React.useState(false);
    const { onBurn } = useBurn(id, item.uri);
    const classes = useStyles();


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

    


    React.useEffect(()=>{

       if(uri !== undefined) {
        (async () => {
            const response = await fetch(uri);
            const type = await FileType.fromStream(response.body);
            setFileType(type ? type.mime : '');
            console.log(type ? type.mime : '');
            //=> {ext: 'jpg', mime: 'image/jpeg'}
        })();
       }
    }, [item, chainId, account, id, uri])


    return (
        <MaterialCard className={classes.card}>
            <Grid 
                container
                spacing={2}
                justify='center'
                alignItems='center'
                className={classes.content}
            >  

            {item ? 
            <>
                <CardHeader
                    title={
                        <Typography variant='body1'>
                          Token ID: {id}
                        </Typography>
                      
                    }
                />
                <Grid container item >
                    <Grid item xs>
                        <Typography variant='caption'>
                            CREATED:
                        </Typography>
                        <Typography variant='body1' color='primary'>
                            {item ? convertTimestamp(item.timestamp) : <LinearProgress color="primary" />}
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography variant='caption'>
                            VALIDATION:
                        </Typography>
                        <Typography variant='body1' color='primary'>
                            {item ? convertTimestamp(item.validationDate) : <LinearProgress color="primary" />}
                        </Typography>
                    </Grid>            
                    <Grid item xs>
                        <Typography variant='caption'>
                            UUID:
                        </Typography>
                        <Typography variant='body1' color='primary'>
                            {item ? item.uuid : <LinearProgress color="primary" />}
                        </Typography>
                    </Grid> 
                    <Grid item xs>
                        <Typography variant='caption'>
                            IP:
                        </Typography>
                        <Typography variant='body1' color='primary'>
                            {item ? item.ipaddress : <LinearProgress color="primary" />}
                        </Typography>
                    </Grid>   
                    
                </Grid>
                <Grid container item >

                        <Grid item xs={12}>
                            {fileType === 'application/pdf' ? 
                                <object data={uri} className={classes.pdf} />
                            :
                                <img src={uri} className={classes.file}/>
                            }
                                            
                        </Grid>   

                </Grid> 
                <Grid container item>
                    <Grid item xs={12}>
                        <Typography variant='caption'>
                        TITLE:
                        </Typography>
                    </Grid>        
                    <Grid item xs={12}>
                        <Typography variant='body1'>
                            {item ? item.title : <LinearProgress color="primary" />}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='caption'>
                        DESCRIPTION: 
                        </Typography>
                    </Grid>    
                    <Grid item xs={12}>
                        <Typography variant='body1'>
                            {item ? item.description : <LinearProgress color="primary" />}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='caption'>
                        LINK:
                        </Typography>
                    </Grid>    
                    <Grid item xs={12}>
                        <Typography component={MaterialLink} target='_blank' href={uri ? uri : ''} variant='body1'>
                            {uri ? (uri.slice(0,64)+'...') : <LinearProgress color="primary" />}
                        </Typography> 
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='caption'>
                        HASH:
                        </Typography>
                    </Grid>    
                    <Grid item xs={12}>
                        <Typography  variant='body1'>
                            {item ? item.uri : <LinearProgress color="primary" />}
                        </Typography> 
                    </Grid>
                </Grid>
            </>
            :
                <LinearProgress color="primary" />
            
            }
            <Grid container item >
                <ButtonGroup fullWidth={true}>
                    <Button onClick={handleOpen}> Transfer </Button>
                    <Button onClick={onBurn}  > Burn </Button>
                </ButtonGroup>
            </Grid>
        </Grid>
        <Modal
            style={getModalStyle()}
            className={classes.modal}
            open={open}
            onClose={handleClose}
        >
            <MaterialCard className={classes.card}>
                <TextField
                    size='small'
                    onChange={(e)=>{setReciver(e.target.value)}}
                    variant='outlined'
                    type='text'
                    helperText='Reciever Address'
                />
                <Button size='medium' onClick={onTransfer} >SEND</Button>
            </MaterialCard>
        </Modal> 
        </MaterialCard>
    )
}

export default ItemCard; 