"use client"

import { useState } from "react";

export default function MultiCounter(){
    const[c1,setC1]=useState(0)
    const[c2,setC2]=useState(0)
    const[c3,setC3]=useState(0)
    function sumarc1(){
        setC1(c1+1)
    }
    function restarc1(){
        setC1(c1-1)
    }
    function reiniciarc1(){
        setC1(0)
    }
    function sumarc2(){
        setC2(c2+1)
    }
    function restarc2(){
        setC2(c2-1)
    }
    function reiniciarc2(){
        setC2(0)
    }
    function sumarc3(){
        setC3(c3+1)
    }
    function restarc3(){
        setC3(c3-1)
    }
    function reiniciarc3(){
        setC3(0)
    }
    return(
        <div>
            <p>{c1}</p>
            <button onClick={()=>sumarc1()}>sumar</button>
            <button onClick={()=>restarc1()}>restar</button>
            <button onClick={()=>reiniciarc1()}>reiniciar</button>
            <p>{c2}</p>
            <button onClick={()=>sumarc2()}>sumar</button>
            <button onClick={()=>restar2()}>restar</button>
            <button onClick={()=>reiniciarc2()}>reiniciar</button>
            <p>{c3}</p>
            <button onClick={()=>sumarc3()}>sumar</button>
            <button onClick={()=>restarc3()}>restar</button>
            <button onClick={()=>reiniciarc3()}>reiniciar</button>
        </div>
    );
}