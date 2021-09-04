import styled from 'styled-components';

const About = styled.div`
background: #0F0E17;
margin:0px
`

const AboutContainer = styled.div`
background: #0F0E17;
display: grid;
grid-template-columns: auto auto;
grid-template-rows: auto;
justify-content: space-between;
position:fixed;
z-index:1;
width:100%;
`;

const AboutEnlaces = styled.div`
display: flex;

`;

const AboutLogo = styled.p`
color:#FFFFFE;
font-size: 24px;
font-family: 'Lobster', cursive;
margin: 20px;
`;

const AboutDiv = styled.a`
margin: 20px;
font-family: Lora;
font-size: 20px;
color:#FFFFFE;
text-decoration: none;
padding-top:10px;
`;


const DivButton = styled.a`
padding:12px;
margin: 40px;
margin-20px;
height:18px;
background:#FF8906;
`;

const AboutButton = styled.button`
border-style:none;
background:#FF8906;
color:#FFFFFE;

`;


export const Navbar = About
export const AboutC = AboutContainer
export const AboutEnlc = AboutEnlaces
export const AbDiv = AboutDiv
export const AbLogo = AboutLogo
export const DvButton = DivButton
export const AbButton = AboutButton