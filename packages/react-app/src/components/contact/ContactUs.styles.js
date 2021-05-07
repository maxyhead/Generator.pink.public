import { theme } from '../../theme'
import { 
  makeStyles,
} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    checkbox: {
        transform: "scale(2)",
        zIndex: '1'
    },
    textfield: {
        zIndex: '2',
        border: '3px solid black',
        height: '40px',
        width: '100%',
        borderRadius: '6px',
       
    },
    button:{
        height: '45px',
        width: '100px',
        borderRadius: '25px',
        backgroundColor: theme.palette.subcontainer.dark,
        color: theme.palette.text.light
    },
    marger: {
        marginRight: '120px'
    }
   
}));