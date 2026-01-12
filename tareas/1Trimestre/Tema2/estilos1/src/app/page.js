"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [telefonos,setTelefonos]=useState([{nombre:"Juan",Email:"juan@gmail.com",numero:"123456789"}])
  const[nombreContacto,setNombreContacto]=useState("")
  const[emailContacto,setEmailContacto]=useState("")
  const[telefonoContacto,setTelefonoContacto]=useState(0)
  function AñadirContacto(){
    const nuevo = {
      nombre: nombreContacto,
      Email: emailContacto,
      numero: telefonoContacto
    };
    setTelefonos(prev => [...prev, nuevo]);
    setEmailContacto("")
    setNombreContacto("")
    setTelefonoContacto(0)
  }
  function eliminarContacto(id) {
  setTelefonos(prev => prev.filter((_, index) => index !== id));
}
  return (
    <div>
      <h1>Tabla contactos</h1>
      <table border={1}>
        <thead>
          <tr>
            <td>Nombre</td>
            <td>Email</td>
            <td>Telefono</td>
          </tr>
        </thead>
        <tbody>
          {telefonos.map((telefono,index)=>(
            <tr key={index}>
              <td>{telefono.nombre}</td>
              <td>{telefono.Email}</td>
              <td>{telefono.numero}</td>
              <td><button onClick={()=>eliminarContacto(index)}>Eliminar</button></td>
            </tr>
            ))}
          </tbody>
      </table>
      <div>
        <p>Nombre</p>
        <input type="text" value={nombreContacto} onChange={(e)=>setNombreContacto(e.target.value)}></input>
        <p>Email</p>
        <input type="text" value={emailContacto} onChange={(e)=>setEmailContacto(e.target.value)}></input>
        <p>Numero Telefono</p>
        <input type="number" value={telefonoContacto} onChange={(e)=>setTelefonoContacto(e.target.value)}></input>
        <br></br>
        <button className="Añadir" onClick={()=>AñadirContacto()}>Añadir contactos</button>
      </div>
    </div>
  );
}
