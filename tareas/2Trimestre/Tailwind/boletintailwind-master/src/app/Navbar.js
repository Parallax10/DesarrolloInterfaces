
'use client';
import { useState } from 'react';


export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-blue-100 p-4 flex justify-between items-center">
            {/* Logo */}
            <img 
                src="https://imgs.search.brave.com/Rs66b7V0vZHUEasEYqVRR7FyS36kt5C0PItubTrlojo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzYxLzIvZ29vZ2xl/LTIwMjUtbG9nby1w/bmdfc2Vla2xvZ28t/NjE4NDc1LnBuZw" 
                alt="Logo" 
                className="h-8 w-8"
            />

            {/* Nav normal*/}
            <ul className="hidden md:flex text-gray-800 font-bold text-xl gap-6">
                <li className="hover:underline cursor-pointer"><a href='.'>Principal</a></li>
                <li className="hover:underline cursor-pointer"><a href='blog'>Blog</a></li>
                <li className="hover:underline cursor-pointer"><a href='dashboard'>Dashboard</a></li>
            </ul>
            
            {/* Espacio para centrar los enlaces */}
            <span className='hidden md:flex h-10 w-10'></span>

            {/* Boton hamburguesa */}
            <button 
                className="md:hidden text-gray-800 text-2xl hover:bg-blue-200 rounded-lg h-8 w-8 flex items-center justify-center cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                ☰
            </button>

            {/* Menu hamburguesa */}
            {isOpen && (
                <ul className="absolute top-16 left-0 right-0 bg-blue-100 flex flex-col text-gray-800 font-bold text-xl p-4 gap-4  min-h-screen ">
                    <li className="hover:underline cursor-pointer"><a href='.'>Principal</a></li>
                    <li className="hover:underline cursor-pointer"><a href='blog'>Blog</a></li>
                    <li className="hover:underline cursor-pointer"><a href='dashboard'>Dashboard</a></li>
                </ul>
            )}
        </nav>
    );
}