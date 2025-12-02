"use client"
import LiveValidationForm from "./LiveValidationForm";
import GuessTheNumber from "./GuessTheNumber";
import MultiCounter from "./MultiCounter";
import ImageGallery from "./ImageGallery";
import LoginForm from "./LoginForm";
import SurveySimulator from "./SurveySimulator";
import LimitedCounter from "./LimitedCounter";
import StudentList from "./StudentList";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <h1>ej1</h1>
      <StudentList></StudentList>
      <hr></hr>
      <h1>ej2</h1>
      <LimitedCounter></LimitedCounter>
      <hr></hr>
      <h1>ej4</h1>
      <SurveySimulator></SurveySimulator>
      <h1>ej6</h1>
      <LoginForm></LoginForm>
      <h1>ej7</h1>
      <ImageGallery></ImageGallery>
      <h1>ej8</h1>
      <MultiCounter></MultiCounter>
      <h1>ej10</h1>
      <GuessTheNumber></GuessTheNumber>
      <h1>13</h1>
      <LiveValidationForm></LiveValidationForm>
    </div>
  );
}
