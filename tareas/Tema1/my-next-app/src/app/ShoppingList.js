"use client"

import { useState } from "react";

export default function ShoppingList(){
    const listaproductos=[{id:1,nombre:"Judias"},{id:2,nombre:"Esparragos"},{id:3,nombre:"Aguacate"}]
    const[productoseliminados, setProductoseliminados]=useState([])
    const[productos,setProductos]=useState(listaproductos)
    function eliminarproducto(id){
        const nuevosproductos=productos.filter((producto)=>producto.id!==id)
        setProductos(nuevosproductos)
        
    }
    return (
    <div>
        {productos.map((producto) => (
            <div key={producto.id}>
            <p>{producto.nombre}</p>
            <button onClick={()=>eliminarproducto(producto.id)}>Elminar</button>
            </div>
        ))}
    </div>
);
}