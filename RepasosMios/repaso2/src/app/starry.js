"use client"

import { useState } from "react"

export default  function Starry(){
    const[personajes,setPersonajes]=useState([
        {nombre:"bocchi" ,instrumento:"guitarra", banda:true},
        {nombre:"ryo" ,instrumento:"bajo", banda:true},
        {nombre:"nijika" ,instrumento:"bateria", banda:true}
    ])
    const[nombre,setNombre]=useState("")
    const[instrumento,setInstrumento]=useState("")
    function agregarPersonaje(){
        if (nombre!="" && instrumento!=""){
            const nuevopersonaje={
            nombre:nombre,
            instrumento:instrumento,
            banda:false
        }
            setPersonajes([... personajes,nuevopersonaje])  
        }else{
            alert("Los campos no pueden estar vacios")
        }
        
    }
    function alternarBanda(id){
        const mod=[... personajes]
        mod[id].banda=!mod[id].banda
        setPersonajes(mod)
    }
    function borrarPersonaje(nombre){
        const filtrado=personajes.filter(pj=>pj.nombre!=nombre)
        setPersonajes(filtrado)
    }
    return(
        <div>
            <p>Nombre</p>
            <input type="text" value={nombre} onChange={(e)=>setNombre(e.target.value)}></input>
            <p>Instrmento</p>
            <input type="text" value={instrumento} onChange={(e)=>setInstrumento(e.target.value)}></input>
            <button onClick={()=>agregarPersonaje()}>Agregar</button>
            <h1>Lista personajes</h1>
            <CardPersonajes personajes={personajes}></CardPersonajes>
        </div>
    )
    function CardPersonajes({personajes}){
return(
    <div>
        {personajes.map((personaje,index)=>(
                    <div key={index}>
                        <p>Nombre: {personaje.nombre}</p>
                        <p>instrumento: {personaje.instrumento}</p>
                        <p>Miembro de la banda:{personaje.banda? "si":"no"}</p>
                        <button onClick={()=>alternarBanda(index)}>Alternar banda</button>
                        <button onClick={()=>borrarPersonaje(personaje.nombre)}>Elminiar</button>
                        <br></br>
                    </div>
                ))}
    </div>
)
}
}
