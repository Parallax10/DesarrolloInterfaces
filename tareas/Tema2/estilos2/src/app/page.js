import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <div className="header">
        <div>
          <img src="popcat.png" height={100} width={130}></img>
        </div>
        <div>
          <input></input>
          <button>Buscar</button>
        </div>
        <div>
          <button>Registrate</button>
          <button>Inicia Sesion</button>
        </div>
      </div>
      <div className="grid">
        <div className="g1">
          <img src="gato.jpg" height={500} width={550}></img>
        </div>
        <div className="g2"> 
          <p>gato que te mira asin</p>
        </div>
      
      </div>
      <div>
        <footer className="foot">
          <p>Solo un gato que te mira asin</p>
        </footer>
      </div>
    </div>
  );
}
