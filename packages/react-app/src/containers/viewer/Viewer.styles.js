import { theme } from '../../theme'
import { 
  makeStyles,
} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    container: {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.background.main,
        minHeight: '85vh'
    },
    hero: {
      padding: '50px',
      minHeight: '50vh'
    },
    
    })
);