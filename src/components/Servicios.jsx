import React from 'react'
import {Container, Text, Servicios, TextServ, ButtonDiseño} from '../styled/ServiciosStyled'

export const Servicio = () => {
    return (
        <Container>
           <Text><h1>Servicios</h1></Text>
           <Servicios>
            <TextServ>
                <h1>Diseño</h1>
                <h3>Experiencia de usuario</h3>
                <h3>Interfaz de usuario</h3>
                <h3>Aplicaciones Web</h3>
                <h3>Prueba de concepto</h3>
            <ButtonDiseño>Ver servicios de diseño</ButtonDiseño>
            </TextServ>

            <TextServ>
                <h1>Desarrollo</h1>
                <h3>Aplicaciones moviles</h3>
                <h3>Sitios Web</h3>
                <h3>Aplicaciones Web progresivas</h3>
            <ButtonDiseño>Ver servicios de desarrollo</ButtonDiseño>
            </TextServ>

            <TextServ>
                <h1>Marca</h1>
                <h3>Identidad de la marca</h3>
                <h3>Estrategia de marca</h3>
            <ButtonDiseño>Ver servicios de marca</ButtonDiseño>
            </TextServ>
           </Servicios>
        </Container>
    )
}

export default Servicio;
