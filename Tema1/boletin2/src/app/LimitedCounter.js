"use client"

import { useState } from "react";

export default function LimitedCounter(){
    const[limiteContador,setLimiteContador]=useState()
    const[contador,setContador]=useState(0)
    function aumentarContador(limite){
        if (contador<limite){
            setContador(contador+1)
        }else{
            alert("No se puede aumentar mas")
        }
        
    }
    function nuevoLimite(limit){
        setLimiteContador(limit)
    }

    return(
        <div>
            <p>Valor maximo)</p>
            <input type="number" value={limiteContador}onChange={(e) => nuevoLimite(e.target.value)}></input>
            <p>{contador}</p>
            <button onClick={()=>aumentarContador(limiteContador)}>aumetnar</button>
        </div>
    );
}