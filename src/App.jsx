//import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Titulo from  './components/Header'
import MyCard from './components/MyCard'
import imagenes from './assets/animales/imagenes'
import Footer from './components/Footer';

const App = () => {

  return (
    <>
      <Titulo title='Adopta un perrito'/>
      <div className='contenedor-imagen'>
        <MyCard  imgCard={imagenes.img1} nombre='Max' descrp={imagenes.descripcion} texto='ADOPTAR'/>
        <MyCard imgCard={imagenes.img2} nombre='Peludín' descrp={imagenes.descripcion} texto='ADOPTAR'/>
        <MyCard  imgCard={imagenes.img3} nombre='Jordan' descrp={imagenes.descripcion} texto='ADOPTAR' bg="success"/>
      </div>
      <Footer footer='Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)'/>
    </>
  )
}

export default App
