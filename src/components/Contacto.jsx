import React from 'react'
import {Container, Form, H1, P, Input, Textarea, Button} from '../styled/ContactoStyled'

const Contacto = () => {
    return (
        <Container>
            <Form>
                <H1>Contacto</H1>
                <P>Si está interesado en trabajar conmigo en su próximo proyecto, no dude en ponerse en contacto.</P>
                <Input type="text" placeholder="Nombre completo"></Input>
                <Input type="email" placeholder="Correo electronico"></Input>
                <Textarea name="textarea" rows="10" cols="50">Mensaje</Textarea>
                <Button>Enviar mensaje</Button>
            </Form>
        </Container>
    )
}

export default Contacto
