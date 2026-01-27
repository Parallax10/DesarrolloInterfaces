export default function Card() {
    return (
        <div className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg text-white hover:scale-105 duration-300 hover:bg-blue-300 flex flex-col justify-around    ">
            <h2 className="text-xl text-gray-700 font-bold mb-2">Card Title</h2>
            <p className="text-gray-700">Texto de relleno texto de relleno texto de relleno.</p> 
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300 ">Botón</button>
        </div>
    )
}