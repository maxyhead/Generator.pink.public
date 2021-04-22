
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
      type: 'dark',
     
      primary: {
          main: '#B23591',
      },
      secondary: {
        main: "#B23591" ,
      },
      background: {
          main: '#fffff',
      },
      header: {
        main: "#2C2B2B"
      },
      subcontainer: {
        dark: "#2C2B2B",
        light: "#fafafa"
      },
     
      footer: {
        main: "#F3F5F4"
      },
      paper: {
          main: '#0A0A0B'
      },
      text: {
          primary: "#141414",
          secondary: "#fafafa",
      },
  },
});

export const theme = responsiveFontSizes(_theme);



