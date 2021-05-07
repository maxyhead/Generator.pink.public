import React from 'react';
import emailjs from 'emailjs-com';
import {
  Grid, 
  Typography,
  Button,
  TextField,
  Checkbox,
  Link
} from '@material-ui/core'

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { useToasts } from 'react-toast-notifications'
import { useStyles } from './ContactUs.styles'

export default function ContactUs() {

  const classes = useStyles();
  const { addToast } = useToasts();

  const serviceID = 'service_6cy7csv';
  const templateID = 'template_c9ye7ku';
  const userID = 'user_PDwl4eGfmmTnpjWKn1AmP';

  const [ accepted, setAccepted ] = React.useState(false);
  const [ address, setAddress ] = React.useState();

  function sendEmail(e) {
    e.preventDefault();
    if(accepted !== true && address == undefined) {
      addToast('Please make shure the form is filled in.', {
          appearance: 'error',
          autoDismiss: true,
      })
    } else if(accepted == true && address != undefined) {
      emailjs.sendForm(serviceID, templateID, e.target, userID)
        .then((result) => {
            addToast('Success', {
                appearance: 'success',
                autoDismiss: true,
            })
        }, (error) => {
            addToast('Error while submitting', {
                appearance: 'error',
                autoDismiss: true,
            })
            console.log(error.text);
        });
    }

    
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <TextField type="hidden" name="contact_number" />
        <Grid container spacing={1}>
          
          <Grid container item lg={12} alignItems='center' justify='center' direction='row' spacing={0}>
            <Grid item >
              <TextField 
                type="email" 
                name="from_name" 
                variant='outlined' 
                size='small' 
                color='secondary'
                className={classes.textfield}
                onChange={(e)=>setAddress(e.target.value)}
              />
            </Grid>
            <Grid item >
              <FormControlLabel
                value="bottom"
                control={<Checkbox type="checkbox" size='medium' className={classes.checkbox} onClick={(e)=>setAccepted(!accepted)} ></Checkbox>} 
                labelPlacement="bottom"
              />
            </Grid>
            <Grid item xs>
              <Button className={classes.button} type="submit" value="Send" variant='outlined' > SUBMIT </Button>
            </Grid>
          </Grid>
          <Grid container item lg={12} spacing={5}>
            <Grid item className={classes.marger}>
              <Typography variant='caption'>E-MAIL</Typography>
            </Grid>
            <Grid item >
              <Typography variant='caption'  color='secondary' component={Link} href='' target='_blank'> AGREE TO TERMS AND PRIVACY</Typography>
            </Grid>
          </Grid>
      
      </Grid> 
    </form>
  );
}