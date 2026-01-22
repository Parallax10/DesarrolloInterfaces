"use client"
import { useEffect } from "react"

export default function Ej1(){
    useEffect(()=>{
            console.log("El componente se ha montado")
        })
    return(
        <div>
            <h1>EJ1</h1>
        </div>
    );
}