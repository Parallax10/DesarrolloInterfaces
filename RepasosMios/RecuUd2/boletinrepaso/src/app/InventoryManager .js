"use client"

import { useState } from "react"

export default function InventoryManager (){
    const[nombreProducto,setNombreProducto]=useState("")
    const[cantidadProducto,setCantidadproducto]=useState(0)
    const [productos, setProductos]=useState([
        {nombre:"peras",cantidad:12}
    ])
    function disminuirCantidad(id){
        const nuevoProducto=[... productos]
        nuevoProducto[id]={...nuevoProducto[id],cantidad:nuevoProducto[id].cantidad-1}
        const filtrados=nuevoProducto.filter(prod =>prod.cantidad>=1)
        setProductos(filtrados)
    }
    function añadirProductos(){
        const productoAgregar={
            nombre:nombreProducto,
            cantidad:cantidadProducto
        }
        if(nombreProducto!=""&&cantidadProducto!=0){
            setProductos([... productos,productoAgregar])
        }else{
            alert("El nombre no puede estar en blanco y la cantidad no puede ser0")
        }
    }
return(
    <div>
        <p>nombre</p>
        <input type="text" value={nombreProducto} onChange={((e)=>setNombreProducto(e.target.value))}></input>
        <p>cantidad</p>
        <input type="number" value={cantidadProducto} onChange={((e)=>setCantidadproducto(e.target.value))}></input>
        <button onClick={()=>añadirProductos()}>añadir</button>
        <h1>lista de productos</h1>
        {productos.map((producto,index)=>(
            <div key={index}>
                <p>nombre: {producto.nombre}</p>
                <p>cantidad: {producto.cantidad}</p>
                <button onClick={()=>disminuirCantidad(index)}>disminuir</button>
            </div>
        ))}
    </div>
)
}