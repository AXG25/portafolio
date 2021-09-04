import React from "react";
import {
  Container,
  Text,
  Grid,
  Div,
  Img,
  P1,
  P2,
  Photo
} from "../styled/TestimonioStyled";

const Testimonio = () => {
  return (
    <><Container>
          <Text>Testimonios</Text>
          <Grid>
              <Div>
                  <P1>
                      <Img>
                          <img src="https://res.cloudinary.com/axginterprise/image/upload/v1630762608/Ellipse_1_iwavfq.png"></img>
                      </Img>
                      Juan Antonio
                  </P1>
                  <P2>
                      Tengo algunos años trabajando con Javascript y aún así aprendí
                      varias cosas importantes de Abi-ezer y como utiliza Javascript en el
                      día a día.
                  </P2>
              </Div>
              <Div>
                  <P1>
                      <Img>
                          <img src="https://res.cloudinary.com/axginterprise/image/upload/v1630762625/Ellipse_1_1_fdcq9b.png"></img>
                      </Img>
                      Albert Flores
                  </P1>
                  <P2>
                      Me gusto ver el porqué de las cosas del core de React, saber la
                      magia que ocurre por detrás, excelente profesor Abi-ezer gran
                      vocación.
                  </P2>
              </Div>
              <Div>
                  <P1>
                      <Img>
                          <img src="https://res.cloudinary.com/axginterprise/image/upload/v1630762634/Ellipse_1_2_gz1cfu.png"></img>{" "}
                      </Img>
                      Darlene Robertson
                  </P1>
                  <P2>
                      Ayuda a entender el porqué de las cosas, lo cual nos da el poder de
                      aprovechar mejor el lenguaje y las herramientas que tenemos.
                  </P2>
              </Div>
              <Div>
                  <P1>
                      <Img>
                          <img src="https://res.cloudinary.com/axginterprise/image/upload/v1630762643/Ellipse_1_3_wpqlzd.png"></img>{" "}
                      </Img>
                      Jane Cooper
                  </P1>
                  <P2>
                      La forma como explica y trabaja los temas Abi-ezer, me ha ayudado a
                      comprender y sacarle el mayor provecho a HTML y CSS.{" "}
                  </P2>
              </Div>
              <Div>
                  <P1>
                      <Img>
                          <img src="https://res.cloudinary.com/axginterprise/image/upload/v1630762651/Ellipse_1_4_bghndw.png"></img>{" "}
                      </Img>
                      Eleanor Pena
                  </P1>
                  <P2>
                      Abi-ezer ha sido de gran ayuda para acelerar ciertos esfuerzos de
                      desarrollo. Lo que nos hubiera llevado 6 meses solo nos llevó 1,5
                      meses.
                  </P2>
              </Div>
              <Div>
                  <P1>
                      <Img>
                          <img src="https://res.cloudinary.com/axginterprise/image/upload/v1630762656/Ellipse_1_5_zec7of.png"></img>{" "}
                      </Img>
                      Guy Hawkins
                  </P1>
                  <P2>
                      Abi-ezer ha superado mis expectativas desde el diseño hasta el
                      desarrollo.
                  </P2>
              </Div>
          </Grid>
      </Container><Photo><img src="https://res.cloudinary.com/axginterprise/image/upload/v1630763657/img_z3ee28.png"></img></Photo></>
  );
};

export default Testimonio;
