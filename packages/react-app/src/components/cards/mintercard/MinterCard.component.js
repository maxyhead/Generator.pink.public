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
import { DropzoneAreaBase } from "material-ui-dropzone";

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { formatter } from '../../../utils/utils'
import { useWeb3React } from '@web3-react/core';
import { useStyles } from './MinterCard.styles';

import BasicInput from '../../inputs/BasicInput';


const MinterCard = () => {
    // The first commit of Material-UI
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const [files, setFiles] = React.useState([]);
    const [fileBuffer, setFileBuffer] = React.useState();

    const classes = useStyles();

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

   
    const handleAdd = newFiles => {
        newFiles = newFiles.filter(file => !files.find(f => f.data === file.data));
        setFiles([...files, ...newFiles]);
        setFileBuffer(new Buffer.from(newFiles[0].data, 'base64'))
      };
    
    const handleDelete = deleted => {
        setFiles(files.filter(f => f !== deleted));
        setFileBuffer(null)
    };
    

    return (
        <MaterialCard className={classes.card}>
            <Grid 
                container
                spacing={3}
                alignItems='flex-start'
               
            >
                <Grid item xs={12}>
                    <CardHeader
                        title='TOKEN DETAILS'
                        subheader='UIDD'
                        action={
                            <Button>
                                <MoreVertIcon color='primary' />
                            </Button>
                            }
                        />
                </Grid>
        
                <Grid item xs={12} className={classes.content}>
                    <BasicInput
                        type='text'
                        label='Title'
                       
                    />
                </Grid>
                <Grid container item xs={12} className={classes.content} justify='center'>
                    <MuiPickersUtilsProvider utils={DateFnsUtils} >
                        <KeyboardDatePicker
                            fullWidth={true}
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Validity Date"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                        }}
                        />
                    </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={12} className={classes.content}>
                    <BasicInput
                        type='text'
                        label='Description'
                        
                    />
                </Grid>
                <Grid item xs={12} className={classes.content}>
                    <BasicInput
                        type='text'
                        label='Email'
                        
                    />
                </Grid>
                <Grid item xs={12} className={classes.content}>
                    <BasicInput
                        type='text'
                        label='Website'
                        
                    />
                </Grid>
                <Grid item xs={12} className={classes.content}>
                    <DropzoneAreaBase
                        fileObjects={files}
                        onAdd={handleAdd}
                        onDelete={handleDelete}
                        clearOnUnmount={true}
                        filesLimit={1}
                        maxFileSize={5000000}
                        dropzoneText='Drag or Click to upload a file'
                        className={classes.dropzone}
                    />
                </Grid>
                <Grid item xs={12} className={classes.content}>
                    <Button
                        variant='contained'
                        fullWidth={true}
                        color='primary'
                        size='large'
                    >
                        Mint Token
                    </Button>
                </Grid>
            </Grid>

        </MaterialCard>
    )
}

export default MinterCard; 