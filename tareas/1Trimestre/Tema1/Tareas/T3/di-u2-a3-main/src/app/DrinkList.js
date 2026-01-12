function Drink({ name }) {
  let parte, cafeina, antiguedad;

  if (name === 'té') {
    parte = 'hoja';
    cafeina = '15–70 mg/taza';
    antiguedad = '4,000+ años';
  } else {
    parte = 'grano';
    cafeina = '80–185 mg/taza';
    antiguedad = '1,000+ años';
  }

  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Parte de la planta</dt>
        <dd>{parte}</dd>
        <dt>Contenido de cafeína</dt>
        <dd>{cafeina}</dd>
        <dt>Antigüedad</dt>
        <dd>{antiguedad}</dd>
      </dl>
    </section>
  );
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="té" />
      <Drink name="café" />
    </div>
  );
}