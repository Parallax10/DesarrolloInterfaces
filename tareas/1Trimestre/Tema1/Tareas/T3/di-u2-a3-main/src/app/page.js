import Image from "next/image";
import styles from "./page.module.css";
import PackingList from "./PackagingList";
import PackingList2 from "./PackaginList2";
import DrinkList from "./DrinkList";

export default function Home() {
  return (
    <>
    <h1>Ejercicio 1</h1>
    <PackingList />
    <br />
    <br />
    <br />
    <br />
    <h1>Ejercicio 2</h1>
    <PackingList2 />
    <br />
    <br />
    <br />
    <br />
    <h1>Ejercicio 3</h1>
    <DrinkList />
    </>
  );
}
