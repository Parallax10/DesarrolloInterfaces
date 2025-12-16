"use client"

import { useState } from "react"

export default function GreenhouseRegistry(){
    const[plantas,setPlantas]=useState([{nombre:"tulipan",tipo:"interior",altura:"12",riego:false}])
    const[nombre,setNombre]=useState("")
    const[tipo,setTipo]=useState("")
    const[altura,setAltura]=useState(0)
    function añadirPlanta(){
        if(nombre!="" && tipo!="" && altura!=0){
            const plantaNueva={
                nombre:nombre,
                tipo:tipo,
                altura:altura,
                riego:false
            }
            setPlantas([... plantas,plantaNueva])
        }else{
            alert("Los campos no pueden estar vacios o ser = 0")
        }
    }
    function cambiarRiego(id){
        const copia=[...plantas]
        copia[id].riego=!copia[id].riego
        setPlantas(copia)
    }
    function eliminarPlanta(nombrePlanta){
        const filtro=plantas.filter(planta=>planta.nombre!=nombrePlanta)
        setPlantas(filtro)
    }
    return(
        <div>
            <p>Nombre</p>
            <input type="text" value={nombre} onChange={(e)=>setNombre(e.target.value)}></input>
            <p>Tipo</p>
            <select value={tipo} onChange={(e)=>setTipo(e.target.value)}>
                <option value="interior">interior</option>
                <option value="exterior">exterior</option>
            </select>
            <p>altura</p>
            <input type="number" value={altura} onChange={(e)=>setAltura(e.target.value)}></input>
            <button onClick={()=>añadirPlanta()}>añadir</button>
            <h2>lista de plantas</h2>
            {plantas.map((planta,index)=>(
                <div key={index}>
                    <p>Nombre: {planta.nombre}</p>
                    <p>Tipo: {planta.tipo}</p>
                    <p>Altura: {planta.altura} </p>
                    <p>Riego: {planta.riego?"Si":"No"}</p>
                    <button onClick={()=>cambiarRiego(index)}>alternar Riego</button>
                    <button onClick={()=>eliminarPlanta(planta.nombre)}>Eliminar</button>
                </div>
            ))}
        </div>
    )
}