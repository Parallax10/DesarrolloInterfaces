import Image from "next/image";
import styles from "./page.module.css";
import Starry from "./starry";
import Carrusel from "./carrusel";

export default function Home() {
  const imagenes=[
    {ruta:"bocchi.jpg",titulo:"Bocchi",desc:"jejejbocchi"},
    {ruta:"niji.jpg",titulo:"nijika",desc:"dorito"},
    {ruta:"ryo.jpg",titulo:"ryo",desc:"ryoXD"}
  ]
  return (
    <div>
      <Starry></Starry>
    </div>
  );
}
