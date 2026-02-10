"use client";
import { use, useState, useEffect } from "react";
export default function Contact({ params }) {
  const { id } = use(params);
  const [contacto, setContacto] = useState({});

  async function fetchContact() {
    //   /api/contact/contactuser?id=1
    const url = "/api/contacts/contactuser?id=" + id;
    const response = await fetch(url);
    const body = await response.json();

    setContacto(body);
  }

  useEffect(() => {
    fetchContact();
    console.log(contacto);
  }, []);

  return (
    <div>
      Nombre: {contacto.nombre}
      Apellidos: {contacto.apellidos}
      Número de teléfono: {contacto.numero_telefono}
    </div>
  );
}
