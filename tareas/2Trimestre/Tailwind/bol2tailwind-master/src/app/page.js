export default function Home() {
  return (
    <main className="p-4">
      <button className="p-4 px-8 text-white rounded-2xl bg-blue-500 hover:bg-green-500">Boton</button>
      <div className="bg-purple-500 w-16 h-16 m-10  hover:scale-125 duration-500"></div>
      <button  className={`p-4 px-8 text-white rounded-2xl bg-red-500 cursor-pointer active:animate-bounce`}>Rebotar</button>
      <div className="mt-10 bg-yellow-500 w-24 h-24 hover:opacity-50 transition-opacity duration-700"></div>


      <div className="mt-10 row-auto grid grid-cols-3 gap-8 px-8">
        <img  src="https://i.ytimg.com/vi/8oj8ZFf1cwU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC1qDtB3eSy-et2-fGS393cMDONCg" alt="Image 1" className={`w-full h-auto rounded-lg hover:scale-110 transition-transform duration-300 active:animate-bounce cursor-pointer animate-fade-in`}/>
        <img  src="https://i.ytimg.com/vi/wHHubarGmjk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCfVNkqURxmzPi57DNuneU6g8kdLQ" alt="Image 2" className={`w-full h-auto rounded-lg hover:scale-110 transition-transform duration-300 active:animate-bounce cursor-pointer animate-fade-in`}/>
        <img  src="https://movistaresports.com/wp-content/uploads/2025/07/Gragas-seguira-cerveza-jugadores-cambiara_1895820404_1309442_1440x600-768x320.webp" alt="Image 3" className={`w-full h-auto rounded-lg hover:scale-110 transition-transform duration-300 active:animate-bounce cursor-pointer animate-fade-in`}/>
      </div>



    </main>
  );
}
