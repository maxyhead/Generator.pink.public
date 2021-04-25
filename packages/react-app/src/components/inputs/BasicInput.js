import React from 'react';
import { theme } from '../../theme';
import { 
    TextField,
} from '@material-ui/core'
import { withStyles } from "@material-ui/core/styles";

const CssTextField = withStyles({
    root: {
      
        width: '100%',
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            
          },
        '& .MuiInputBase-root': {
           
          },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
            
            },
        },
    },
    
})(TextField);


const BasicInput = (props) => {
   
    return (
        <CssTextField
            variant='outlined'
            InputLabelProps={{
                shrink: true,
            }}
            size="medium"
            type={props.type}
            label={props.label}
            defaultValue={props.defaultValue}
            helperText={props.helperText}
            onChange={props.onChange}
        />
    )
}

export default BasicInput; 