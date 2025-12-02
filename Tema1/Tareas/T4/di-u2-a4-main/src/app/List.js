import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
  const quimicos = people
    .filter(person => person.profession === 'químico')
    .map(person => (
      <li key={person.id}>
        <img
          src={getImageUrl(person)}
          alt={person.name}
        />
        <p>
          <b>{person.name}:</b>
          {' ' + person.profession + ' '}
          conocido/a por {person.accomplishment}
        </p>
      </li>
    ));

  const otros = people
    .filter(person => person.profession !== 'químico')
    .map(person => (
      <li key={person.id}>
        <img
          src={getImageUrl(person)}
          alt={person.name}
        />
        <p>
          <b>{person.name}:</b>
          {' ' + person.profession + ' '}
          conocido/a por {person.accomplishment}
        </p>
      </li>
    ));

  const listItems = [...quimicos, ...otros];

  return (
    <article>
      <h1>Científicos</h1>
      <ul>{listItems}</ul>
    </article>
  );
}
