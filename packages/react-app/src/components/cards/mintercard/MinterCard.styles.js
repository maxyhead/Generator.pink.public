import { theme } from '../../../theme'
import { 
  makeStyles,
} from '@material-ui/core/styles';

export const useStyles = makeStyles({
    card: {
        backgroundColor: theme.palette.paper.main,
        color: theme.palette.text.primary,
        borderRadius : "15px",
        padding: "10px"
    },
    content: {
        padding: '50px'
    },
    nowrapper: {
        display: 'flex',
        flexWrap: 'nowrap'
    },
    dropzone:{
        height: '100px'
    }
});