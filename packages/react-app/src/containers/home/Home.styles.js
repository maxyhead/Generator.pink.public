import { theme } from '../../theme'
import { 
  makeStyles,
} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    container: {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.background.main,
        minHeight: '85vh',
        padding:'50px 150px 50px 150px',
    },
    hero: {
      padding: '50px',
      minHeight: '50vh'
    },
    subcontainer: {
      padding:'15px 50px 15px 50px',
    },
    subscription: {
      padding:'35px 50px 35px 50px',
      backgroundColor: theme.palette.subcontainer.light,
    },
    mintercontainer: {
      margin:'80px',
    },
    button: {
        borderRadius: '15px',
        minHeight: '80px',
        minWidth: '280px',
    },
    bordersubtile: {
      borderBottom: '1px solid #141414'
    },
    title: {

      //textShadow: `0px 4px 12px ${theme.palette.secondary.main}`
    },
    backgroundVideo: {
      position: 'fixed', zIndex: '-99', width: '100vw', height: '100vh'
    },
    })
);