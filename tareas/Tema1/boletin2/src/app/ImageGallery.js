"use client"

import { useState } from "react";

export default function ImageGallery(){
    const imagenes=[{enlace:"/bocchi-the-rock-bocchi.gif"},{enlace:"/coche.jpg"}]
    const [indiceFotos,setIndiceFotos]=useState(0)
    const[foto,setFoto]=useState(imagenes[0])
    function cambiarFoto(){
        const siguiente=(indiceFotos+1)%imagenes.length;
        setIndiceFotos(siguiente)
    }
    return(
        <div>
            <img src={imagenes[indiceFotos].enlace}></img>
            <button onClick={()=>cambiarFoto()}>siguiente</button>
        </div>
    );
}