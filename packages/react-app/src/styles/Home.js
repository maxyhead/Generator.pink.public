import styled from 'styled-components';
import { theme } from '../theme'

import {
    Button as MaterialButton, 
    Paper as MaterialPaper,
} from '@material-ui/core'

export const Root = styled.div`
    flex-grow: 1;
`

export const Button = styled(MaterialButton)`

`

export const Paper = styled(MaterialPaper)`
    padding: ${theme.spacing(2)};
    text-align: 'center';
    color: ${theme.palette.text.secondary};
`