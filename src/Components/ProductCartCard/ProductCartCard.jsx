import React from 'react'

const ProductCartCard = ({producto}) => {
  return (
    <div>
        <div className='detail'> 
            <img src={producto.imagen} alt="imagen 1"></img>
            <h3>{producto.nombre}</h3>
            <h3>Precio: ${producto.precio}</h3>
            <p>Cantidad a Comprar:{producto.quantity}</p>
                     
        </div>
    </div>
  )
}

export default ProductCartCard