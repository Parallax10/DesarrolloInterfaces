"use client"

import { useState } from "react"

export default function Carrusel({imagenes}){
    const[idfotos,setIdfotos]=useState(0)
    function siguientefoto(){
        if(idfotos==2){
            setIdfotos(0)
        }else{
            setIdfotos(idfotos+1)
        }
    }
    function anteriorfoto(){
        if(idfotos==0){
            setIdfotos(2)
        }else{
            setIdfotos(idfotos-1)
        }
    }
    return(
        <div>
            <p>{imagenes[idfotos].titulo}</p>
            <img src={imagenes[idfotos].ruta}></img>
            <p>{imagenes[idfotos].desc}</p>
            <button onClick={()=>anteriorfoto()}>Anterior</button>
            <button onClick={()=>siguientefoto()}>Siguiente</button>
        </div>
    )
}