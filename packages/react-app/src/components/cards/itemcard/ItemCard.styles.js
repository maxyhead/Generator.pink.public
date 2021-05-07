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
    subheader: {
        padding: '10px'
    },
    nowrapper: {
        display: 'flex',
        flexWrap: 'nowrap'
    },
    file: {
        maxHeight: '400px',
        width:'100%',
        objectFit: 'contain'
    },
    pdf: {
        height: '400px',
        width:'100%',
        objectFit: 'contain' 
    },
    modal: {
        zIndex: '1',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed'
    },
});