import { createGlobalStyle } from 'styled-components';
import { colors } from './ui/variables';

const GlobalStyle = createGlobalStyle`
html{
    body{
        background-color: ${colors.background};
        margin: 0;
        padding: 0;
        color: ${colors.fontColor};
        font-family: 'Open-sans', sans-serif;
    }
}    

`;

export default GlobalStyle;