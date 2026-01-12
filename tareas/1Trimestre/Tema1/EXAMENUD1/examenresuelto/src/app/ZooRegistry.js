"use client"
const animalesIniciales=[{id:0,nombre:"Paco",edad:5,habitat:"Selva"}]
import { useState } from "react"
function AnimalCard({animal}){
    const[cuidadoEspecial,setCuidadoEspecial]=useState(false)
    return(
        <li>
            <h2>nombre:{animal.nombre}{cuidadoEspecial ?"Cuidado especial:si":"Cuidado especial:No"}</h2>
            <p>edad:{animal.edad}</p>
            <p>habitat:{animal.habitat}</p>
            <button onClick={()=>setCuidadoEspecial(!cuidadoEspecial)}>{cuidadoEspecial?"Desmarcar especial":"Marcar especial"}</button>
        </li>
    )
}
let id=1
export default function ZooRegistry(){
    const [animalList,setAnimalList]=useState(animalesIniciales)
    const [nuevonombre,setNombre]=useState("")
    const [nuevoespecie,setespecie]=useState("")
    const [nuevoHabitat,setHabitat]=useState("selva")
    const [nuevoedad,setedad]=useState("")
function handleAddAnimal(e){
    e.preventDefault();
    if(nuevonombre!==""&&nuevoedad!==0&&nuevoHabitat!==""&&nuevoHabitat!==""){
        const animalNuevo={
                id:id++,
                nombre:nuevonombre,
                edad:nuevoedad,
                habitat:nuevoHabitat
        }
        setAnimalList([... animalList,animalNuevo])
    }else{
        alert("no puede tener campos en blanco")
    }
    
    
}


    return(
        <div>
            <form onSubmit={handleAddAnimal}>
                <p>Nombre</p>
                <input type="text" value={nuevonombre} onChange={((e)=>setNombre(e.target.value))}></input>
                <p>especie</p>
                <input type="text" value={nuevoespecie} onChange={((e)=>setespecie(e.target.value))}></input>
                <p>edad</p>
                <input type="number" value={nuevoedad} onChange={((e)=>setedad(e.target.value))}></input>
                <p>Habitat</p>
                <select onChange={((e)=>setHabitat(e.target.value))}>
                    <option value="selva">selva</option>
                    <option value="sabana">sabana</option>
                    <option value="acuario">acuario</option>
                </select>
                <button type="submit">Agregar</button>
            </form>
            <ul>
                {animalList.map((animal)=>(
                    <AnimalCard key={animal.id} animal={animal}></AnimalCard>
                    ))}
            </ul>
        </div>
    )
}