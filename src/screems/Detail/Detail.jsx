import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { Counter } from '../../Components'
import './Detail.css'

const Detail = () => {
const {id}=useParams()
const {getProductById,adProductCart,isInCart,cart,getProductCartById}=useCustomContext()



const [detalleProd,setdetalleProd]=useState(isInCart(id) ? getProductCartById(id) : getProductById(id))     /*getProductById(id)*/


const [isProductInCart, setisProductInCart]=useState(isInCart(id))

return (
    <>

      <div className='detalle'>
          <div className='detail'>
             
             <img src={detalleProd.imagen} alt="imagen 1"></img>
             <h3> {detalleProd.nombre}</h3>
             <h4>Precio: ${detalleProd.precio}</h4>
             <p><b> Descripcion:</b> {detalleProd.descripcion}</p>     
             
             {
             isInCart(id)
             ?
              <Counter initialValue={detalleProd.quantity} stock={detalleProd.stock} id={detalleProd.id}/> 
             :
              <Counter initialValue={1} stock={detalleProd.stock} id={detalleProd.id}/> 
             }
         
          </div>
      </div>
          

    </>

       
  )
}
export default Detail