export default function Clock({ time }) {
    const hours = time.getHours();
    const noche=hours>=0 && hours<=6;
    let modo;
    if (noche) {
      modo = 'night';
    } else {
      modo = 'day';
    }
    return (
      <h1 modo={modo}>
        {time.toLocaleTimeString()}
      </h1>
    );
  }
  