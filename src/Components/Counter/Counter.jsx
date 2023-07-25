import React, { useState } from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'

const Counter = ({initialValue,stock,id}) => {
const{adProductCart}=useCustomContext()
const[quantity,setQuantity]=useState(initialValue)

return (
    <>
      
         <div>
            <button onClick={()=>setQuantity(quantity>1 ? quantity-1 : quantity)}>-</button>
              <spam>{quantity}</spam>
            <button onClick={()=>setQuantity(quantity===Number(stock) ? quantity : quantity+1)}>+</button>
        </div>
        <div>
            <button onClick={()=>adProductCart(id,quantity)}>Agregar a Compra</button>
        </div>
      
       
    
    </>
  )
}

export default Counter