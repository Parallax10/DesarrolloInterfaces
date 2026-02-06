import { useState } from "react";

export default async function Tasks(){

    const promesa=await fetch("http://localhost:3000/api/tasks")
    const tareas=await promesa.json()
    const [nuevaTarea,setNuevaTarea]=useState("")
    
    
    return(
        <div>
            <ul>
                {tareas.map(tarea=>(
                    <li>
                        {tarea.completed? <s>{tarea.title}</s>:tarea.title}
                    </li>
                    ))}
            </ul>
            <p>tarea nueva</p>
            <input type="text" value={nuevaTarea} onChange={(e)=>setNuevaTarea(e.target.value)}></input>
        </div>
    );
}