import React from 'react';
import{Div, Text, P, Imagen, Flecha } from '../styled/MainStyled'
const Main = () => {
  return (
    <Div>
        <Text>
            <h1>¡Hola a todos!
Soy Abi-ezer Guerra</h1>
        <P>Developer que le encanta implementar diseños que 
inspiran y atraen a las personas.</P>
        </Text>
        <Imagen><img src="https://res.cloudinary.com/ohtico/image/upload/c_scale,h_462,w_495/v1630636934/Victor/92130670_259718055047874_8999502763540873216_n_ysozat.jpg"></img></Imagen>
        <Flecha><a href="#"></a><img src="https://res.cloudinary.com/dpkaiokho/image/upload/v1630633110/Portafolio_Geek/flecha-hacia-abajo_y7xma0.png"/></Flecha>
    </Div>    
  )  
}

export default Main;