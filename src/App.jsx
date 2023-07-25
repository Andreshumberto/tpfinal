import React,{ useState } from 'react'
import {ProductCard} from './Components'
import './App.css'
import { useCustomContext } from './ContextManager/ContextProvider'
import { HomePage,Detail,Carrito,FormularioCliente} from './screems'
import {Route,Routes} from 'react-router-dom'
import { NavLink } from 'react-router-dom'


function App() {
  const {productos}=useCustomContext()

  return (
    <>
       <header>
         <h1 className='encabezado'>"Todo en Tecnologia"</h1>
       </header>
       
       <nav>
         
         <NavLink to='/'>Ir al Home</NavLink>
         <NavLink to='/cart'>Carrito</NavLink>
         <NavLink to='/form'>Formulario de Compra</NavLink>
       </nav>
       <main>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/cart' element={<Carrito/>}/>
            <Route path='/form' element={<FormularioCliente/>}/>
          </Routes>
       </main>
       <footer>
            <div>
              <ul>
                <li><b>Todo en Tecnologia S.A</b></li>
                <li><b>Direccion:25 de Mayo 1997</b></li>
                <li><b>Ciudad: San Martin -Pcia Bs As</b></li>
             </ul>
             <ul>
                <li><b>Web:www.todoentecnologia.com</b></li>
                <li><b>Telefono: +54 11 34499022</b></li>
                <li><b>Contacto:Castro Julio</b></li>
             </ul>
              
            </div> 
        </footer>   
       
       
       
     
    </>
  )
}

export default App
