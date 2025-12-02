"use client"
import Image from "next/image";
import styles from "./page.module.css";
import RequestTracker from "./RequestTracker";
import Cola from "./Cola";

export default function Home() {
  return (
    <div className={styles.page}>
     <h1>Ejercicio 1</h1>
     <RequestTracker />
     <br />
     <br />
     <br />
     <br />
     <br />
     <h1>Ejercicio 2</h1>
    <Cola />
    </div>
  );
}
