import React from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import  {ProductCard}   from '../../Components'
import './HomePage.css'

const HomePage = () => {
  const {productos}=useCustomContext()
    return (
  <>
      <div className='titulopage'>
        <div> 
          <div className='title'><b>Listado de Productos </b></div>
        </div> 
      </div> 
    
      <div className="list">
        {productos.map(producto=>( 
         <ProductCard producto={producto} key={producto.id}/>
         ))}
      </div>
  </>   
)} 

export default HomePage