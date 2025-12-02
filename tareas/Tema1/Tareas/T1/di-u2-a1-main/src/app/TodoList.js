const person = 
  {
    name: 'Gregorio Y. Zara',
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    },
    imagen: 'https://i.imgur.com/7vQD0fPs.jpg',
  };
  
  export default function TodoList() {
    return (
      <div>
      <div style={person.theme}>
        <h1>Tareas pendientes de {person.map}</h1>
        <img
          className="avatar"
          src={person.imagen}
          alt="Gregorio Y. Zara"
        />
        <ul>
        <li>Mejorar el videoteléfono</li>
        <li>Preparar clases de aeronáutica</li>
        <li>Trabajar en el motor de alcohol</li>
        </ul>
      </div>
      </div>
    );
  }
  