
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
       fontWeight: '400'
    },
    h2: {
     
    },
    h3: {
      
    },
    h4: {
      
     
    },

  
  },
  
  palette: {
      type: 'light',
     
      primary: {
          main: '#FF0A99',
      },
      secondary: {
        main: "#119DA4" ,
      },
      background: {
          main: '#fffff',
      },
      header: {
        main: "#fffff"
      },
      subcontainer: {
        light: "#f2f2f2",
        dark: "#2C2B2B"
      },
     
      footer: {
        main: "#F3F5F4"
      },
      paper: {
          main: '#f0f0f0'
      },
      text: {
          primary: "#141414",
          secondary: "#191919",
          light: '#fafafa'
      },
  },
});

export const theme = responsiveFontSizes(_theme);



