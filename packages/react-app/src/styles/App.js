import styled from 'styled-components';
import { theme } from '../theme'
import {
    Button as MaterialButton, 
    Paper as MaterialPaper,
    Typography,
    Toolbar
} from '@material-ui/core'

export const Root = styled.div`
    min-height: 100vh;
    width: 100vw;
    background-color: ${theme.palette.background.dark};
    color: ${theme.palette.text.primary};
`
export const Title = styled(Typography )`
    
`

export const Header = styled(Toolbar)`
    display: flex; 
    max-width: 100%;
    justify-content: space-between;
    background-color: ${theme.palette.header.dark};
`