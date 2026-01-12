import Image from "next/image";
import styles from "./page.module.css";
import Clock from "./Clock";
import Profile from "./Profile";


export default function Home() {

    const currentDate = new Date();

    return (
      <>
      <h1>Ejercicio 1</h1>
      
      <Clock time={currentDate} />
      <br />
      <br />
      <br />
      <br />
      <h1>Ejercicio 2</h1>
      
      <Profile person={{
        imageId: 'lrWQx8l',
        name: 'Subrahmanyan Chandrasekhar',
      }} />
      <Profile person={{
        imageId: 'MK3eW3A',
        name: 'Creola Katherine Johnson',
      }} />
      <br />
      <br />
      <br />
      <br />
      <h1>Ejercicio 2</h1>
      
      <Profile person={{
        imageId: 'lrWQx8l',
        name: 'Subrahmanyan Chandrasekhar',
      }} />
      <Profile person={{
        imageId: 'MK3eW3A',
        name: 'Creola Katherine Johnson',
      }} />
      <br />
      <br />
      <br />
      <br />
    
    </>
    );
}
