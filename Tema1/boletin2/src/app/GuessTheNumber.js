"use client"

import { useState } from "react"

export default function GuessTheNumber(){
    let numero=33
    const[intento,setIntento]=useState()
    function adivinar(){
        if(intento>numero){
            alert("mas pequeño")
        }else if (intento<numero){
            alert("mas grande")
        }else{
            alert("acertao")
        }
    }
    return(
        <div>
            <input type="number" value={intento}onChange={((e)=>setIntento(e.target.value))}></input>
            <button onClick={()=>adivinar()}>intentar</button>
        </div>
    )
}