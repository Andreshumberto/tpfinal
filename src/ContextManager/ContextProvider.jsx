import React,{createContext,useContext, useState} from 'react'

const Context=createContext()

const ContextProvider = ({children}) => {
  const productos=[
     {
        imagen:'/src/Imagenes/imagen1.jpg',
        nombre:'Monitor Samsung 24"',
        precio:65000,
        descripcion:'Conexion DSub-hdmi-Relacion Aspecto 16:9-Apto Sist de Seguridad',
        id:1,
        stock:5
     },
    {
        imagen:'/src/Imagenes/imagen4.jpg',
        nombre:'Monitor Samsung 32"',
        precio:90000,
        descripcion:'2 Entradas HDMI-2 Entradas USB-HD 4K-Ideal para Gamers',
        id:2,
        stock:7
     },
     {
        imagen:'/src/Imagenes/calculadoracientifica3.jpg',
        nombre:'Calculadora Cientifica CASIO C3478',
        precio:120000,
        descripcion:'Calculos Cientificos-Grafica Funciones-Calculo Matricial-Permite guardar funciones y constantes',
        id:3,
        stock:9
     },
     {
        imagen:'/src/Imagenes/calculadoraHP.jpg',
        nombre:'Calculadora Cientifica y Financiera HP 3790',
        precio:98000,
        descripcion:'Calculos Cientificos y Financieros-Grafica Funciones',
        id:4,
        stock:3
     },
     {
      imagen:'/src/Imagenes/celular1.jpeg',
      nombre:'Telefono Celular SAMSUNG A22',
      precio:215000,
      descripcion:'8G RAM-128Gb memoria-Camara 50Mp-5Mp-2Mp-Procesador:Qualcomm 5M6225',
      id:5,
      stock:4
   },
   {
      imagen:'/src/Imagenes/computadoraescritorio1.png',
      nombre:'Computadora HP 49004',
      precio:300000,
      descripcion:'RAM 16GB-Disco Duro HDD 1Tb-Monitor 17"-Lectora CD-2Puertos USB 3.0-Puerto Ethernet',
      id:6,
      stock:8
   },
   {
      imagen:'/src/Imagenes/computadoraescritorio2.jpg',
      nombre:'Computadora de Ecritorio DELL 345',
      precio:325000,
      descripcion:'RAM 16GB-Disco SSD 256GB-Monitor 17"-Lector CD-2 Puertos USB-BlueTooth',
      id:7,
      stock:9
   },
   {
      imagen:'/src/Imagenes/iphone.jpg',
      nombre:'Telefono Celular IPHONE 13X',
      precio:750000,
      descripcion:'Pantalla Super Retina-3 Camaras 12Mp-128Mb-512Mb memoria',
      id:8,
      stock:7
   },
   {
      imagen:'/src/Imagenes/notebook hp5500.jpg',
      nombre:'Notebook HP5500',
      precio:450000,
      descripcion:'16Mb RAM-512GB SSD-Pantalla 15"-Puerto HDMI-2 Puertos USB-Teclado Numerico',
      id:9,
      stock:5
   },
   {
      imagen:'/src/Imagenes/notebooklenovo.jpg',
      nombre:'Notebook LENOVO RTY590',
      precio:450000,
      descripcion:'16Mb RAM-512GB SSD-Pantalla 15"-1 Puerto HDMI-2 Puertos USB-Lectora CD',
      id:10,
      stock:10
   },
   {
      imagen:'/src/Imagenes/smartwatchsamsungjpg.jpg',
      nombre:'Smart Watch Samsung L23',
      precio:120000,
      descripcion:'Pantalla SAMOLEA 1.4"-Monitoreo Salud(frec.Cardiaca,presion arterial)-Conectividad WiFi-GPS-Bluetooth',
      id:11,
      stock:4
   }, 
   {
      imagen:'/src/Imagenes/smartwatchxiaomi.jpg',
      nombre:'Smart Watch Xiaomi RT67',
      precio:98000,
      descripcion:'Pantalla Tactil LCD-TFT 1.28"-Monitoreo de Salud-Conectividad WiFi-Bluetooth-GPS',
      id:12,
      stock:8
   },
   {
      imagen:'/src/Imagenes/tabletIphone.jpg',
      nombre:'Tablet IPad Iphone',
      precio:230000,
      descripcion:'Sist Operativo 16.0-Bateria Larga Duracion-Conectividad WiFi-Bluetooth',
      id:13,
      stock:12
   },
   {
      imagen:'/src/Imagenes/televisor1.jpg',
      nombre:'SmartTV 55" LG',
      precio:300000,
      descripcion:'Pantalla Curva-4K-HD-2 Puertos HDMI-Puerto USB',
      id:14,
      stock:11
   },
   {
      imagen:'/src/Imagenes/televisor2.jpg',
      nombre:'SmartTV Samsung 42"',
      precio:98000,
      descripcion:'4K-HD-2 Puertos HDMI-2 Puertos USB',
      id:15,
      stock:11
   },
  ]
  
  const getProductById=(id)=>{
   return productos.find(producto=>producto.id===Number(id))
  }
  const getProductCartById=(id)=>{
   return cart.find(producto=>producto.id===Number(id))
  } 
   const[cart,setCart]=useState([])
   const isInCart=(id)=>cart.some(producto=>producto.id===Number(id))
   const adProductCart=(id,quantity)=>{
      if (isInCart(id)){
         setCart(cart.map (producto=>{
            if (producto.id==id){
               producto.quantity=quantity
            }
         return producto
         }))
      }else{

          setCart([...cart,{...getProductById(id),quantity:quantity}])
      }
      
   }
   const getTotal=()=>{
      let total=0
      cart.forEach(producto=>total+=producto.precio*producto.quantity)
     return total
   }

    return (
    <Context.Provider value={{productos,getProductById,cart,adProductCart,isInCart,getProductCartById,getTotal}}>
        {children}
    </Context.Provider>
  )
}
export const useCustomContext=()=>useContext(Context)

export default ContextProvider