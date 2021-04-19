import { theme } from '../../theme'
import { 
  makeStyles,
} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    footer: {
        backgroundColor: theme.palette.header.main,
        borderTop: `3px solid ${theme.palette.primary.main}`,
        minHeight:'10vh'
    },
    title: {
        display: 'none',
        color: theme.palette.text.main,
        fontVariantCaps: 'all-small-caps',
        '&:hover': {
            color: theme.palette.primary,
        },
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
}));