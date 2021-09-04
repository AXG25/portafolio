import React from 'react'
import {Container, Logo, Text, Redes} from '../styled/FooterStyled'
const Footer = () => {
    return (
        <Container>
            <Logo><img src="https://res.cloudinary.com/axginterprise/image/upload/v1630768651/LOGO_1_vjnxlt.png"></img></Logo>
            <Text>Con mucho cariño Abi. Copyright 2021 - Todos los derechos reservados</Text>
            <Redes><a href="#"><img src="https://res.cloudinary.com/axginterprise/image/upload/v1630768892/icon-github_luvpsw.png"></img></a></Redes>
        </Container>

    )
}

export default Footer
