import Image from "next/image";
import styles from "./page.module.css";
import Gallery from './Gallery.js';
import  Profile  from './Profile.js';
import Bio from "./bio.js";
import Todo from "./TodoList.js";
import Todo2 from "./TodoList2.js";

export default function Home() {
  return (
    <div>
      <Bio></Bio>
      <Profile />
      <Gallery/>
      <Todo></Todo>
      <Todo2></Todo2>
    </div>
  );
}
