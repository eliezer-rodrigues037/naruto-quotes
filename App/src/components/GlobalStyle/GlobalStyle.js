import { createGlobalStyle } from 'styled-components';
import bgImg from '../../assets/images/bg.jpeg';

export const GlobalStyle = createGlobalStyle`
  body {
    background: url(${bgImg}) no-repeat center center fixed;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    
    font-family: 'New Tegomin', serif;
    color: #332c36;
    padding: 0;
    margin: 0;
  }
`;