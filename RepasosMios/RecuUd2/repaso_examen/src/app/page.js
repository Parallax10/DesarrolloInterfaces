import Image from "next/image";
import styles from "./page.module.css";
import ZooRegisty from "./ZooRegisty";
import ImageDetailCarousel from "./ImageDetailCarousel";

export default function Home() {
    const imagenes=[
          {origen:"1.jpg",titulo:"1",descripcion:"foto1"},
          {origen:"2.jpg",titulo:"2",descripcion:"foto2"},
          {origen:"3.jpg",titulo:"3",descripcion:"foto3"}
      ]
  return (
    <div>
      <h1>ZOO</h1>
      <ZooRegisty></ZooRegisty>
      <h1>Carrusel</h1>
      <ImageDetailCarousel imagenes={imagenes}></ImageDetailCarousel>
    </div>
  );
}
