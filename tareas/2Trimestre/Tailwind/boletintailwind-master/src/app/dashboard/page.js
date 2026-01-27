import Nav from "../Navbar";

export default function DashboardPage() {
  return (
    <main>
      <Nav />
      <div className="grid grid-cols-3 gap-4 p-4 bg-blue-100 min-h-screen">
        <div className="hidden md:block col-span-1 bg-white p-4 rounded shadow">
       <div>
           <h2 className="text-xl font-bold mb-4">Sidebar</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Enlace 2
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Enlace 3
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Enlace 4
              </a>
            </li>
          </ul>
       </div>
       <div>
            <h2 className="text-xl font-bold mt-6 mb-4">Una foto porque si</h2>
            <img
              src="https://imgs.search.brave.com/z4r4t0Xc49gb5D711hp9EtqEU5Vq1mAcueHRwYDiNss/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vZWxyZXRv/aGlzdG9yaWNvLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MC8wMS9jZXJ2ZXph/c2xhY3J1emRlbGNh/bXBvLmpwZz9yZXNp/emU9MzMzLDQ1MCZz/c2w9MQ"
                alt="Gambrinus"
                className="w-full h-auto rounded hover:h-screen hover:absolute hover:top-0 hover:left-0 hover:scale-90 transition-all duration-300"
            />
       </div>
        </div>
        <div className="col-span-3 md:col-span-2 bg-white p-4 rounded shadow">
          <h1 className="text-2xl font-bold mb-4">El contenido en cuestion</h1>
          <div>
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-blue-100 p-4 rounded mb-4">
                <h2 className="text-xl font-semibold text-blue-900 mb-2">
                  Contenido principal {i + 1}
                </h2>
                <p className="text-gray-700">
                  Texto de relleno Texto de relleno Texto de relleno Texto de
                  relleno Texto de relleno Texto de rellenoTexto de relleno{" "}
                </p>
              </div>
            ))}
          </div>
          <div>
            <table className="min-w-full bg-blue-100 mt-4 border-4 border-blue-300 text-center">
              <thead>
                <tr>
                    <th className="py-2 px-4 border-2 border-blue-300">Columna 1</th>
                    <th className="py-2 px-4 border-2 border-blue-300">Columna 2</th>
                    <th className="py-2 px-4 border-2 border-blue-300">Columna 3</th>
                </tr>
                </thead>
                <tbody>
                {[...Array(5)].map((_, i) => (
                    <tr key={i} className="hover:bg-gray-100">
                    <td className="py-2 px-4 border-2 border-blue-300">Dato {i + 1}-1</td>
                    <td className="py-2 px-4 border-2 border-blue-300">Dato {i + 1}-2</td>
                    <td className="py-2 px-4 border-2 border-blue-300">Dato {i + 1}-3</td>
                    </tr>
                ))}
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
