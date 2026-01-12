"use client"

import { useState } from "react";

export default function LoginControl(){
    const[sesioniniciada,setSesioniniciada]=useState("Iniciar sesion")
    function cambiarSesion(sesioniniciada){
        if (sesioniniciada=="Iniciar sesion"){
            setSesioniniciada("Cerrar sesion")
        }else if(sesioniniciada=="Cerrar sesion"){
            setSesioniniciada("Iniciar sesion")
        }
    }
    return(
        <div>
            <button onClick={()=>cambiarSesion(sesioniniciada)}>{sesioniniciada}</button>
        </div>
    );
}