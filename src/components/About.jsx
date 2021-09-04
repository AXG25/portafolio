import React from 'react';
import{Navbar, AboutC, AboutEnlc, AbDiv, AbLogo, DvButton, AbButton} from '../styled/AboutStyled'


const About = () => {
    return(
        <Navbar>
            <AboutC>
                <AboutEnlc>
                    <AbLogo href="#"><p>Logo</p></AbLogo>
                    <AbDiv href="#"><p>Hola</p></AbDiv>
                    <AbDiv href="#"><p>Proyectos</p></AbDiv>
                    <AbDiv href="#"><p>Testimonio</p></AbDiv>
                    <AbDiv href="#"><p>Contacto</p></AbDiv>
                </AboutEnlc>

                <DvButton>
                     <AbButton type="button">Descargar curriculum</AbButton>
                </DvButton>
                </AboutC>
            </Navbar>
    )
}

export default About;