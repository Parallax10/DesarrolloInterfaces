export default function GridExercise() {
    return(
        <div className=" grid grid-cols-3 grid-rows-4 gap-4 p-4 border-4 border-red-700">
            <p className=" justify-center flex border-4 rounded-lg border-red-500 col-span-2">1</p>
            <p className=" justify-center flex border-4 rounded-lg border-red-500">2</p>
            <p className=" justify-center flex border-4 rounded-lg border-red-500">3</p>
            <p className=" justify-center flex border-4 rounded-lg border-red-500">4</p>
            <p className=" justify-center flex border-4 rounded-lg border-red-500">5</p>
            <p className=" justify-center flex border-4 rounded-lg border-red-500">6</p>
            <button className="flex items-center justify-center border-4 rounded-lg border-red-500 bg-red-500 text-white">Reiniciar Diseño</button>
            <p className=" justify-center flex border-4 rounded-lg border-red-500">8</p>
            <p className=" justify-center flex border-4 rounded-lg border-red-500">9</p>
            <p className=" justify-center flex border-4 rounded-lg border-red-500">10</p>
            <p className=" justify-center flex border-4 rounded-lg border-red-500">11</p>
            <p className=" justify-center flex border-4 rounded-lg border-red-500 row-span-2">12</p>
        </div>
    );
}