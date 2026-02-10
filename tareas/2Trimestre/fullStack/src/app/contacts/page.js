"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
export default function ListContacts(){

    let [contacts, setContacts] = useState([]);

    useEffect(()=>{
        fetchContacts();
    },[]);

    async function fetchContacts(){
        const response = await fetch("/api/contacts");
        const body = await response.json();
        setContacts(body);
    }

    async function deleteContact(idContact){
        if(window.confirm("Desea borrarlo de verdad")){
            const response = await fetch("/api/contacts", {
                method: "DELETE",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({id: idContact})
            })
        }

        fetchContacts();
    }

    return(<div>
        {contacts.map(contact => <p key={contact.id}> <Link href={"/contacts/"+contact.id}>{contact.nombre}{contact.apellidos}</Link> <button onClick={() => deleteContact(contact.id)}>Eliminar</button></p>)}
    </div>);
}