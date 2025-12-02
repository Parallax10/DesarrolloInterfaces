"use client"

import { useState } from "react"

export default function SurveySimulator(){
    const[si,setSi]=useState(0)
    const[no,setNo]=useState(0)
    const[talvez,setTalvez]=useState(0)
    return(
        <div>
            <button onClick={()=>setSi(si+1)}>Si</button>
            <p>{si}</p>
            <button onClick={()=>setNo(no+1)}>No</button>
            <p>{no}</p>
            <button onClick={()=>setTalvez(talvez+1)}>Tal vez</button>
            <p>{talvez}</p>
        </div>
    )
}