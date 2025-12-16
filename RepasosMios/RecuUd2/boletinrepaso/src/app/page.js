import Image from "next/image";
import styles from "./page.module.css";
import InventoryManager from "./InventoryManager ";
import ScoreAccumulator from "./ScoreAccumulator";

export default function Home() {
  return (
    <div>
      <h1>ej16</h1>
      <InventoryManager></InventoryManager>
      <h1>ej17</h1>
      <ScoreAccumulator></ScoreAccumulator>
    </div>
  );
}
