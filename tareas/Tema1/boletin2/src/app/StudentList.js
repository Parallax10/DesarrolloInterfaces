"use client"

import { useState } from "react";

export default function StudentList(){
    const[Cnombre,setNombre]=useState("")
    const[Cclase,setClase]=useState("")
    const[listaEstudiantes,setListaEstudiantes]=useState([{id:1,nombre:"juan",clase:"1A"}])
    const[contadorid,setContadorid]=useState(2)
    function añadirEstudiante(){
        const nuevoestudiante={
            id:contadorid,
            nombre:Cnombre,
            clase:Cclase
        }
        setListaEstudiantes([...listaEstudiantes,nuevoestudiante])
        setContadorid(contadorid+1)
    }
    function eliminarEstudiante(idBorrar){
        setListaEstudiantes(listaEstudiantes.filter((est)=>est.id!==idBorrar))
    }
    return(
        <div>
            <p>Nombre del alumno</p>
            <input type="text" value={Cnombre} onChange={(e=>(setNombre(e.target.value)))}></input>
            <p>clase del alumno</p>
            <input type="text" value={Cclase} onChange={(e =>(setClase(e.target.value)))}></input>
            <hr></hr>
            <button onClick={()=>añadirEstudiante()}>Agregar estudiante</button>
            <div>
                {listaEstudiantes.map((item)=>{
                    return(
                    <div key={item.id}>
                        <p>Nombre estudiante</p>
                        <p>{item.nombre}</p>
                        <p>Clase estudiante</p>
                        <p>{item.clase}</p>
                        <button onClick={()=>eliminarEstudiante(item.id)}>Eliminar estudiante</button>
                    </div>
                    );
                })}
            </div>
        </div>
    );
}