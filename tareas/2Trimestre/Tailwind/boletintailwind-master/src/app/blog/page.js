import Nav from "../Navbar";
export default function Home() {
  return (
    <main>
      <Nav />
      <div className="bg-gray-300 p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center">El blog de Gambrinus</h1>
        <h2 className="text-xl font-semibold text-center mt-4">
          Noticias, actualizaciones y más sobre Gambrinus
        </h2>
      </div>
      <div className="flex">
        <div className=" p-4">
          <div className="space-y-8">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold mb-2">
                  Título del artículo {i + 1}
                </h3>
                <p className="text-gray-700 mb-4">
                  Este es un resumen del artículo {i + 1}. Aquí puedes leer una
                  breve introducción al contenido del artículo para atraer a los
                  lectores a hacer clic y leer más.
                </p>
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300">
                  Leer más
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/3 p-4">
          <h3 className="text-2xl font-bold mb-4">Categorías</h3>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">Noticias</li>
            <li className="hover:underline cursor-pointer">Actualizaciones</li>
            <li className="hover:underline cursor-pointer">Eventos</li>
            <li className="hover:underline cursor-pointer">Tutoriales</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
