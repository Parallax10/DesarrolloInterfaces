"use client"

import { useState } from "react"

export default function ImageDetailCarousel({imagenes}){

    const[indicefotos,setIndicefotos]=useState(0)
    function siguienteFoto(){
        if(indicefotos>=2){
            setIndicefotos(0)
        }else{
            setIndicefotos(indicefotos+1)
        }
    }
    function anteriorFoto(){
        if (indicefotos<=0){
            setIndicefotos(2)
        }else{
            setIndicefotos(indicefotos-1)
        }
    }
    return(
        <div>
            <p>titulo: {imagenes[indicefotos].titulo}</p>
            <img src={imagenes[indicefotos].origen} height={90} width={90}></img>
            <p>descripcion: {imagenes[indicefotos].descripcion}</p>
            <button onClick={()=>anteriorFoto()}>anterior</button>
            <button onClick={()=>siguienteFoto()}>siguiente</button>
        </div>
    )
}