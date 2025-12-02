import { getImageUrl } from './utils.js';

const maria = 
  {
    nombre: 'Maria Skłodowska-Curie',
    imagen: getImageUrl("szV5sdG"),
    profession: 'física y química',
    npremios:"4",
    premios: ['Premio Nobel de Física', 'Premio Nobel de Química', 'Medalla Davy', 'Medalla Matteucci'],
    desc: ['polonio (elemento químico)'],
  };
  const Katsuko={
    nombre: 'Katsuko Saruhashi',
    imagen: getImageUrl("YfeOqp2"),
    profession: 'geoquímica',
    npremios:"2",
    premios: ['Premio Miyake de geoquímica','Premio Tanaka'],
    desc: ['un método para medir el dióxido de carbono en el agua de mar'],
  }

export default function Gallery() {
  return (
    <div>
      <h1>Científicos Notables</h1>
      <section className="profile">
        <h2>{maria.name}</h2>
        <img
          className="avatar"
          src={maria.imagen}
          alt="Maria Skłodowska-Curie"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profesión: </b> 
            {maria.profession}
          </li>
          <li>
            <b>Premios:{maria.npremios}  </b> 
            ({maria.premios.join(', ')})
          </li>
          <li>
            <b>Descubrió: </b>
            {maria.desc}
          </li>
        </ul>
      </section>
      <section className="profile">
        <h2>{Katsuko.name}</h2>
        <img
          className="avatar"
          src={Katsuko.imagen}
          alt="Katsuko Saruhashi"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profesión: </b> 
            {Katsuko.profession}
          </li>
          <li>
            <b>Premios: {Katsuko.npremios} </b> 
            {Katsuko.premios}
          </li>
          <li>
            <b>Descubrió: </b>
            {Katsuko.desc}
          </li>
        </ul>
      </section>
    </div>
  );
}