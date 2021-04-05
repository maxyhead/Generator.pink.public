
import { 
    createMuiTheme, 
    responsiveFontSizes, 
    makeStyles, 
    ThemeProvider 
  } from '@material-ui/core/styles';

const { breakpoints, typography: { pxToRem } } = createMuiTheme({});

const _theme = createMuiTheme({
    root: {
       display: 'flex', 
       alignItems: 'center',
       justifyContent:'center'
    },
    typography: {
        body1: {
            fontFamily: 'Noto Sans, sans-serif',
            fontSize: "5 rem",
            [breakpoints.down("xs")]: {
              fontSize: "3rem"
            }
        },
        body2: {
            fontFamily: 'Noto Sans, sans-serif',
            fontSize: "3 rem",
            [breakpoints.down("xs")]: {
              fontSize: "1rem"
            }
        },
        caption: {
            fontSize: '1.6em', 
            fontStyle: 'italic' 
        },
        h1: {
            fontSize: "3 rem",
            [breakpoints.down("xs")]: {
              fontSize: "1.5rem"
            }
        },
        h2: {
            fontSize: "2.5 rem",
            [breakpoints.down("xs")]: {
              fontSize: "1.25rem"
            }
        },
        h3: {
            fontSize: "2 rem",
            [breakpoints.down("xs")]: {
              fontSize: "1rem"
            }
        },
        h4: {
            fontSize: "3 rem",
            [breakpoints.down("xs")]: {
              fontSize: "1rem"
            }
        },
        h5: {
            fontSize: "1.3 rem",
            [breakpoints.down("xs")]: {
              fontSize: "0.7rem"
            }
        },
        h6: {
            fontSize: "1rem",
            [breakpoints.down("xs")]: {
              fontSize: "0.5rem"
            }
        },
    
    },
    palette: {
        type: 'dark',
        primary: {
            main: '#00DFFD',
        },
        secondary: {
          main: '#ffa686',
        },
        background: {
            light: '#F6F9FA',
            dark: '#2D2C2B'
        },
        header: {
            light:'#F6F9FA',
            dark: "#343434"
        },
        paper: {
            light: '#FFFFFF',
            dark: '#3B3B3B'
        },
        text: {
            primary: "#fafafa",
            secondary: "#ffffff",
            dark: "#fafafa",
            light: "#3B3B3B",
        },
        error: {
            main: "#ef233c"
        },
        warning: {
            main: "#ff9505"
        }, 
        info: {
            main: "#fafafa"
        }, 
        success: {
            main: "#73a942"
        },
    },
  });

export const theme = responsiveFontSizes(_theme);


  