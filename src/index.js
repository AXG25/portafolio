import React from 'react';
import ReactDOM from 'react-dom';
import About from './components/About'
import Main from './components/Main'
import Repositorios from './components/Repositorios'
import Servicios from './components/Servicios'
import Testimonio from './components/Testimonio'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

ReactDOM.render(
  <React.StrictMode>
    <About/>
    <Main/>
    <Repositorios/>
    <Servicios/>
    <Testimonio/>
    <Contacto/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);