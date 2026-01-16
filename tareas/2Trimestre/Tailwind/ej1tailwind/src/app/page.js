import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white-700 hover:bg-gray-700">
      <h1 className="text-5xl bg-red-700 text-black text-center" >Titulo</h1>
      <p>el titulo tiene estas clases: text-5xl bg-red-700 text-black text-center</p><br></br>
      <img className="shadow-lg shadow-black"src="homer.gif" width={500} height={500}></img>
      <br></br>
      <p>La foto tiene estas clases: shadow-lg shadow-black</p>
      <div className="border-1 bg-green-500 m-50 p-60">
        <p className="flex border-5">Este div tiene estas clases:border-1 bg-green-500 m-50 p-50</p>
        <p></p>
      </div>
    </main>
  );
}