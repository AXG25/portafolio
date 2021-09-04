import React from 'react';
import{Texto, H1, H3, Sola, Img1, Alert1, TextP, P1, P2, DivButton, Button1, Button2, Duo, Duo1, Img2, Duo2, Img3, Alert2, Alert3, DivButton2, DivVer, ButtonVer, Img4} from '../styled/RepositoriosStyled'

const Repositorios = () => {
    return(
       <>
       <Texto>
            <H1>Parece magia, funciona con código.</H1>
            <H3>A lo largo de mi carrera como Frontend, he tenido el privilegio de trabajar en proyectos retadores e increíbles.</H3>
        </Texto>
        <Sola>
            <Img1><img src="https://res.cloudinary.com/axginterprise/image/upload/v1630701671/bg_y5vgim.png" alt=""></img></Img1>
            <Alert1>
                <TextP>
                <P1>Niko</P1>
                <P2>Niko es una de las marcas y proveedores de equipamiento deportivo más  reconocidas y valiosas en todo el mundo.</P2>
                </TextP>
                <DivButton>
                 <Button1>Ver proyecto completo</Button1>
                 <Button2>Ver codigo</Button2>
                </DivButton>
            </Alert1>
        </Sola>
        <Duo>
            <Duo1>
            <Img2><img src="https://res.cloudinary.com/axginterprise/image/upload/v1630706039/bg_o88qed.png"></img></Img2>
            <Alert2>
                <TextP>
                <P1>Príncipe fresco</P1>
                <P2>La serie está protagonizada por Will Smith como una versión ficticia de sí...</P2>
                </TextP>
                <DivButton2>
                 <Button1>Ver proyecto completo</Button1>
                 <Button2>Ver codigo</Button2>
                </DivButton2>
            </Alert2>
            </Duo1>
            <Duo2>
            <Img3><img src="https://res.cloudinary.com/axginterprise/image/upload/v1630706122/bg_ik25jp.png"></img></Img3>
            <Alert3>
                <TextP>
                <P1>Amazonas</P1>
                <P2>Amazonas es la empresa en internet de venta al por menor más grande del...</P2>
                </TextP>
                <DivButton2>
                 <Button1>Ver proyecto completo</Button1>
                 <Button2>Ver codigo</Button2>
                </DivButton2>
            </Alert3>
            </Duo2>
        </Duo>
        <DivVer>
          <ButtonVer>Ver mas Proyectos <Img4><img src="https://res.cloudinary.com/axginterprise/image/upload/v1630714343/arrow-right_xl8cb6.png"></img></Img4></ButtonVer>
        </DivVer>
            </>
     )
}

export default Repositorios;