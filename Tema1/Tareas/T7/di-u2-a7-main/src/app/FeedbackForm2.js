import { useState } from 'react';

export default function FeedbackForm() {
  
  function handleClick() {
    let nombre=prompt('¿Cuál es tu nombre?')
    alert(`Hola, ${nombre}!`);
  }

  return (
    <button onClick={handleClick}>
      Saludar
    </button>
  );
}
