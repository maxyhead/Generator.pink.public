import { theme } from '../../theme'
import { 
  makeStyles,
} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    footer: {
        zIndex: '0',
        backgroundColor: theme.palette.footer.main,
        borderTop: `3px solid ${theme.palette.primary.main}`,
        minHeight:'18vh'
    },
    title: {
        display: 'none',
        color: theme.palette.text.primary,
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },},
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    nowrapper: {
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed'
    },
    avatar: {
        height: '45px',
        width: '45px'
    }
}));