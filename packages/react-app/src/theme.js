
import { 
  createMuiTheme, 
  responsiveFontSizes, 
} from '@material-ui/core/styles';



const _theme = createMuiTheme({
  root: {
     display: 'flex', 
     alignItems: 'center',
     justifyContent:'center'
  },
  typography: {
    h1: {
       
    },
    h2: {
     
    },
    h3: {
      
    },
    h4: {
      
     
    },

  
  },
  
  palette: {
      type: 'dark',
     
      primary: {
          main: '#CC0033',
      },
      secondary: {
        main: "#CC0033" ,
      },
      background: {
          main: '#0A0A0B',
      },
      header: {
          main: "#000002"
      },
      paper: {
          main: '#0A0A0B'
      },
      text: {
          primary: "#fafafa",
          secondary: "#fafafa",
      },
  },
});

export const theme = responsiveFontSizes(_theme);



