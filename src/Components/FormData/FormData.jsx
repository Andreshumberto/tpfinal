
import React,{useState} from 'react'
import './Formdata.css'
const FormData = () => {
  
  const[formUserData,setFormUserData]=useState({
    nombre:'',
    apellido:'',
    email:'',
    telefono:''
  })

  const handleRegisterUser=(evento)=>{
    evento.preventDefault()
    
  }
  const handleChangeRegisterUser=(evento)=>{
   
   setFormUserData({...formUserData, [evento.target.name]:evento.target.value})
  console.log(formUserData)
  }

  
  
  
    return (
    <form onSubmit={handleRegisterUser} className='userForm'>
      <label htmlFor='nombre'>Ingrese su Nombre</label>
      <input placeholder='Juan' name='nombre'id='nombre' onChange={handleChangeRegisterUser} value={formUserData.nombre} ></input>
      <label htmlFor='apellido'>Ingrese su Apellido</label>
      <input placeholder='Perez' name='apellido'id='apellido' onChange={handleChangeRegisterUser} value={formUserData.apellido} ></input>
      <label htmlFor='email'>Ingrese su E-Mail</label>
      <input type='email' placeholder='ususario@gmail.com' name='email' id='email'onChange={handleChangeRegisterUser} value={formUserData.email} ></input>
      <label htmlFor='telefono'>Numero de Telefono Celular</label>
      <input placeholder='+54 ' name='telefono' id='telefono'onChange={handleChangeRegisterUser} value={formUserData.telefono} ></input>

      <div>
        <buton type='submit'className='btn'><b>Envie su Compra</b></buton>
      </div>
        

    </form>
  )
}

export default FormData