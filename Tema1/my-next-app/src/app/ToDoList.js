"use client"

import { useState } from "react"

export default function ToDoList(){
    const tareas=[
        {id:0,titulo:"Tarea1",completada:false},
        {id:1,titulo:"Tarea2",completada:false}
            ];
    const[Ttareas, setTtareas]=useState(tareas)
    function CompletarTarea(id){
        const tareasnuevas=Ttareas.map((tarea)=>{
            if (tarea.id===id){
                return{...tarea,completada:true};
            }
            return tarea

        });
        setTtareas(tareasnuevas)
    }
    function eliminartarea(id){
        const tareasBorradas=Ttareas.filter((tarea) => tarea.id !== id)
        setTtareas(tareasBorradas)
    }
    return(
        <div>
            {Ttareas.map((tarea)=>(
                <div key={tarea.id}>
                    <h1>{tarea.titulo}</h1>
                    <p>{tarea.completada?"Tarea completada":"Tarea no completada"}</p>
                    <button onClick={()=>CompletarTarea(tarea.id)}>Completar</button>
                    <button onClick={()=>eliminartarea(tarea.id)}>Eliminar</button>
                </div>
            ))}
        </div>
    );
}