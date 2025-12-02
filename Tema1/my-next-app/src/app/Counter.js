"use client"

import { useState } from "react";

export default function Counter(){
    const [Contador,setContador]=useState(0)
    function aumentarContador(Contador){
        setContador(Contador+1)
    }
    function decrementarContador(Contador){
        setContador(Contador-1)
    }
    return(
        <div>
            <p>{Contador}</p>
            <button onClick={()=>aumentarContador(Contador)}>Aumentar</button>
            <button onClick={()=>decrementarContador(Contador)}>Decrementar</button>
        </div>
    );
}