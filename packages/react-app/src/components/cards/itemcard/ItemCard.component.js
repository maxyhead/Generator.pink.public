import React, { useState } from 'react';
import { 
    Grid,
    Typography,
    Button,
    Input, 
    InputLabel,
    Link as MaterialLink
} from '@material-ui/core'

import {convertTimestamp, checkFileType} from '../../../utils/utils'
import CircularProgress from '@material-ui/core/CircularProgress';
import MaterialCard from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

import { useWeb3React } from '@web3-react/core';
import { useStyles } from './ItemCard.styles';

import useGetDocument from '../../../hooks/useGetDocument';
import useGetURI from '../../../hooks/useGetURI';

const FileType = require('file-type/browser');

const ItemCard = ({id}) => {
    const {account, chainId, library } = useWeb3React();
    const classes = useStyles();

    const item = useGetDocument(id);
    const uri = useGetURI(id);
    const [ fileType, setFileType ] = React.useState('');

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
                <Grid container item >

                <Grid item xs>
                     <Typography variant='caption'>
                        VALIDATION DATE:
                     </Typography>
                     <Typography variant='body1' color='primary'>
                       {item ? convertTimestamp(item.validationDate) : ''}
                     </Typography>
                 </Grid>            
                 <Grid item xs>
                     <Typography variant='caption'>
                        UUID:
                     </Typography>
                     <Typography variant='body1' color='primary'>
                       {item ? item.uuid : ''}
                     </Typography>
                 </Grid> 
                 <Grid item xs>
                     <Typography variant='caption'>
                        IP:
                     </Typography>
                     <Typography variant='body1' color='primary'>
                       {item ? item.ipaddress : ''}
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
                 <Grid item xs={12}>
                     <Typography variant='caption'>
                        TITLE:
                     </Typography>
                 </Grid>        
                 <Grid item xs={12}>
                     <Typography variant='body1'>
                         {item ? item.title : ''}
                     </Typography>
                 </Grid>
                 <Grid item xs={12}>
                     <Typography variant='caption'>
                       DESCRIPTION: 
                     </Typography>
                 </Grid>    
                 <Grid item xs={12}>
                     <Typography variant='body1'>
                         {item ? item.description : ''}
                     </Typography>
                 </Grid>
                 <Grid item xs={12}>
                     <Typography variant='caption'>
                       LINK:
                     </Typography>
                 </Grid>    
                 <Grid item xs={12}>
                     <Typography component={MaterialLink} target='_blank' href={uri ? uri : ''} variant='body1'>
                         {uri ? uri : ''}
                     </Typography> 
                 </Grid>
            </>
            :
                <CircularProgress color="primary" />
            
            }
            
           
        </Grid>
        </MaterialCard>
    )
}

export default ItemCard; 