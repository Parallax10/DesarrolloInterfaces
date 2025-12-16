"use client"

import { useState } from "react"

export default function ScoreAccumulator (){
    const[marcador,setMarcador]=useState({puntuacion:0,ultimasuma:0})
return(
    <div>
        <p>MARCADOR: {marcador.puntuacion}</p>
        <button onClick={()=>suma5()}>+5</button>
        <button onClick={()=>suma10()}>+10</button>
        <button onClick={()=>suma25()}>+25</button>
    </div>
)
}