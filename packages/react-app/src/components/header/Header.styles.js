import { theme } from '../../theme'
import { 
  makeStyles,
} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    header: {
        zIndex: '0',
        padding: '10px 150px 10px 150px',
        backgroundColor: theme.palette.background.main,
        minHeight:'5vh'
    },
    title: {
        zIndex: '0',
        display: 'flex',
        justifyContent: 'center',
        color: theme.palette.text.main,

        fontVariantCaps: 'all-small-caps',
        '&:hover': {
            color: theme.palette.primary.main,
        },
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },},
    wrapper: {
        zIndex: '0',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    button: {
        zIndex: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '30px',
    },
    nowrapper: {
        zIndex: '0',
        display: 'flex',
        flexWrap: 'nowrap',
       
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
   
}));