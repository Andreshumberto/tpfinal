import React from 'react'
import {Link} from 'react-router-dom'
import './ProductCard.css'

const ProductCard = ({producto}) => {
  return (
      <>
        
        <div className="lista"> 
            <img src={producto.imagen} alt="imagen 1"></img>
            <h3>{producto.nombre}</h3>
            <h3>Precio: ${producto.precio}</h3>
            
            <div><Link className='btn' to={'/detail/'+producto.id}> Ver Detalle </Link></div>
                     
        </div>
        
      </>
  )      
}

export default ProductCard