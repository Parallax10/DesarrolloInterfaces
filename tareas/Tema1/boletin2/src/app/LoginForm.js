"use client"

import { useState } from "react";

export default function LoginForm(){
    const usuarios=[{nombre:"Paco",contraseña:"12345"}]
    const[Iusuario, setIusuario]=useState("")
    const[Icontraseña,setIcontraseña]=useState("")
    function iniciarSesion(user,passwd){
        if(user===usuarios[0].nombre && passwd===usuarios[0].contraseña){
            alert("Credenciales correctas, sesion inciada")
        }else{
            alert("Credenciales no validas")
        }
    }
    return(
        <div>
            <p>Usuario</p>
            <input type="text" value={Iusuario} onChange={(e)=>(setIusuario(e.target.value))}></input>
            <p>contraseña</p>
            <input type="text" value={Icontraseña} onChange={(e)=>(setIcontraseña(e.target.value))}></input>
            <button onClick={()=>iniciarSesion(Iusuario,Icontraseña)}>iniciar sesion</button>
        </div>
    );

}