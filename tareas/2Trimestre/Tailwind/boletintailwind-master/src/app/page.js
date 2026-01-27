import Image from "next/image";
import Card from "./Card";
import Grid from "./Grid";
import Nav from "./Navbar";

export default function Home() {
  return (
    <main>
      <Nav />
      <Grid />
    </main>
  );
}
