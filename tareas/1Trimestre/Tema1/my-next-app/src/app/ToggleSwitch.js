"use client"

import { useState } from "react"

export default function ToggleSwitch(){
    const texto=["ON","OFF"]
    const[estTexto,setestTexto]=useState(texto[0])
    function AlternarBoton(){
        if (estTexto=="ON"){
            setestTexto(texto[1])
        }else{
            setestTexto(texto[0])
        }
    }
    return(
        <button onClick={()=>AlternarBoton()}>{estTexto}</button>
    )
}