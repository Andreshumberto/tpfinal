import React from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { ProductCartCard} from '../../Components'
import FormularioCliente from '../FormularioCliente/FormularioCliente'
import { Link } from 'react-router-dom'
import './Carrito.css'

const Carrito = () => {
 const {cart,getTotal}=useCustomContext()
 
 
  return (
    <div>
      
       <div className='list'>
         {cart.map(product=>(
          <ProductCartCard producto={product} key={product.id} />
         ))}
             
        </div>    
          <div className='compra'> 
            <div>
              <b>El Total de la compra es :$ {getTotal()}</b>
            </div> 
            <div>
              <Link to='/form' className='btn'>Comprar</Link>
            </div>
          </div>  
            
        
    </div>
  )
}

export default Carrito