"use client"
import { useState } from "react"

export default function LiveValidationForm(){
    const[nombre,setnombre]=useState("")
    const[correo,setcorreo]=useState("")
    const[contraseña,setcontraseña]=useState("")
    const[textoNombre,setTextoNombre]=useState("")
    const[textoCorreo,settextoCorreo]=useState("")
    const[textoContraseña,settextoContraseña]=useState("")
    function comprobarNombre(valorN){
        if(valorN.length===0){
            setTextoNombre("El valor no puede ser nulo")
        }else if(valorN.length<=5){
            setTextoNombre("El nombre es muy corto")
        }else{
            setTextoNombre("")
        }
    }
    function comprobarCorreo(valorC){
        if(!valorC.includes("@")){
            settextoCorreo("El correo no es valido")
        }else{
            settextoCorreo("")
        }
    }
    function comprobarContraseña(valorP){
        if (valorP.length<5){
            settextoContraseña("El texto es muy corto")
        }else{
            settextoContraseña("")
        }
    }
    return(
        <div>
            <p>Nombre</p>
            <input type="text" value={nombre} onChange={((e)=>{const valorN=e.target.value; setnombre(valorN); comprobarNombre(valorN)})}></input>
            <p>{textoNombre}</p>
            <p>Correo</p>
            <input type="text" value={correo} onChange={((e)=>{const valorC=e.target.value; setcorreo(valorC); comprobarCorreo(valorC)})}></input>
            <p>{textoCorreo}</p>
            <p>Contraseña</p>
            <input type="text" value={contraseña} onChange={((e)=>{const valorP=e.target.value; setcontraseña(valorP); comprobarContraseña(valorP)})}></input>
            <p>{textoContraseña}</p>
        </div>
    )
}