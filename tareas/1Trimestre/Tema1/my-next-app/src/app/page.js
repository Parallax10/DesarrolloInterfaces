"use client";
import ShoppingList from "./ShoppingList";
import ContactForm from "./ContactForm";
import LoginControl from "./LoginControl";
import Counter from "./Counter";
import ToDoList from "./ToDoList";
import ToggleSwitch from"./ToggleSwitch";
import Card from "./Card";
import Greeting from "./Greeting";
import Contador from "./Contador";
import UserCard from "./UserCard";
import ProductList from "./ProductList";
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";


function App(){
  return(
    <div>
      <Card titulo="1" descripcion="Descripcion" imagen='https://media1.giphy.com/media/v1.Y2lkPTZjMDliOTUyYTlyNWR6eDh1MXB1eWJicnVtZDR1bm4xZmw4NzV5c3RhaXFwbTU4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Lopx9eUi34rbq/200w.gif'></Card>
      <Card titulo="Tit2ulo" descripcion="Descripcion" imagen='https://media1.giphy.com/media/v1.Y2lkPTZjMDliOTUyYTlyNWR6eDh1MXB1eWJicnVtZDR1bm4xZmw4NzV5c3RhaXFwbTU4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Lopx9eUi34rbq/200w.gif'></Card>
      <h1>ej5</h1>
      <UserCard></UserCard>
    </div>
  );
}

export default function Home() {
  return (
  <div>
    <h1>ej1</h1>
    <Greeting name="Paco"></Greeting>
    <h1>ej2</h1>
    <App></App>
    <h1>ej3</h1>
    <Contador></Contador>
    <h1>ej4</h1>
    <ProductList></ProductList>
    <h1>ej7</h1>
    <ToggleSwitch></ToggleSwitch>
    <h1>ej8</h1>
    <ToDoList></ToDoList>
    <h1>ej9</h1>
    <Counter></Counter>
    <h1>ej10</h1>
    <LoginControl></LoginControl>
    <h1>ej12</h1>
    <ContactForm></ContactForm>
    <h1>ej13</h1>
    <ShoppingList></ShoppingList>
  </div>
  );
}
