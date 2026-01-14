import Image from "next/image";
import Card from "./Card";
import Grid from "./Grid";
import Navbar from "./Navbar";
export default function Home() {
  return (
    <div>
      <Card></Card>
      <Grid></Grid>
      <Navbar></Navbar>
    </div>
  );
}
