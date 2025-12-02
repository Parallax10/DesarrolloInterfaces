"use client"

import { useState } from "react";

export default function ContactForm(){
    const [email,setEmail]=useState("")
    const [mensaje,setMensaje]=useState("")

    function enviarFormulario(){
        if (email!="" && mensaje!=""){
            alert(`Se ha enviado el mensaje: ${mensaje}`)
        }else{
            alert("rellena los campos")
        }
    }
    return(
        <div>
            <p>email</p>
            <input type="email" value={email} onChange={(e=>setEmail(e.target.value))}></input>
            <p>mensaje</p>
            <input type="text" value={mensaje} onChange={(e=>setMensaje(e.target.value))}></input>
            <button onClick={()=>enviarFormulario()}>Enviar</button>
        </div>
    );
}