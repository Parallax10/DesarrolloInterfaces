"use client"

import { useState } from "react"

export default function ZooRegisty(){
    const [animales,setAnimales]=useState([{nombre:"mono",especie:"primate",edad:"5",habitat:"selva",especial:false}])
    const[Nombre,setNombre]=useState("")
    const[Especie,setEspecie]=useState("")
    const[Edad,setEdad]=useState(0)
    const[Habitat,setHabitat]=useState("")

    function agregarAnimal(){
        if(Nombre==""||Especie==""||Edad==0||Habitat==""){
            alert("Error no puede haber campos en blanco")
        }else{
            const animalNuevo={
                nombre:Nombre,
                especie:Especie,
                edad:Edad,
                habitat:Habitat,
                especial:false
            }
            setAnimales([... animales,animalNuevo])
            setNombre("")
            setEspecie("")
            setEdad(0)
            setHabitat("")

        }
    }
    return(
        <div>
            <p>Nombre</p>
            <input type="text" value={Nombre} onChange={(e=>setNombre(e.target.value))}></input>
            <p>Especie</p>
            <input type="text" value={Especie} onChange={(e=>setEspecie(e.target.value))}></input>
            <p>Edad</p>
            <input type="number" value={Edad} onChange={(e=>setEdad(e.target.value))}></input>
            <p>Habitat</p>
            <input type="text" value={Habitat} onChange={(e=>setHabitat(e.target.value))}></input>
            <button onClick={()=>agregarAnimal()}>Agregar animal</button>
            <h1>lista de animales</h1>
            {animales.map((animal,index)=>(
                <div key={index}>
                    <p>nombre: {animal.nombre}</p>
                    <p>Especie: {animal.especie}</p>
                    <p>Edad: {animal.edad}</p>
                    <p>Habitat: {animal.habitat}</p>
                    <p>Cuidado especial: {animal.especial?"si":"no"}</p>
                </div>
            ))}
        </div>
    )
}