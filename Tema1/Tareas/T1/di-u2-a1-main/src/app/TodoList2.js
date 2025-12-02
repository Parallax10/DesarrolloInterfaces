const baseUrl = 'https://i.imgur.com/';
const person = {
  name: 'Gregorio Y. Zara',
  imageId: '7vQD0fP',
  imageSize: 's',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>Tareas pendientes de {person.name}</h1>
      <img
        className="avatar"
        src={baseUrl + person.imageId + person.imageSize + '.jpg'}
        alt={person.name}
      />
      <ul>
      <li>Mejorar el videoteléfono</li>
      <li>Preparar clases de aeronáutica</li>
      <li>Trabajar en el motor de alcohol</li>
      </ul>
    </div>
  );
}
