import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../assets/Logo.png"

export const NavBar = ()=>{
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItemClass = "relative group text-gray-700 hover:text-green-600"

  const underlineClass = `
    after:content-['']
    after:absolute
    after:bottom-[-8px]
    after:right-0
    after:w-0
    after:h-[2px]
    after:bg-green-600
    after:transition-all
    after:duration-300
    after:origin-bottom-left
    hover:after:origin-bottom-right
    hover:after:w-full
  `

  return (
    <nav className="bg-white shadow-md sticky top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-evenly h-16 items-center gap-20">
          <Link to="/" className="text-xl font-bold text-green-600">
            <img src={Logo} alt="" className="h-32 p-0"/>
          </Link>
          {/* Botón menú móvil */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Menú Desktop */}
          <div className="hidden md:flex space-x-16">
            <Link to="/jabon-solido" className={`${navItemClass} ${underlineClass}`}>
              Jabón solido
            </Link>
            <Link to="/jabon-manos" className={`${navItemClass} ${underlineClass}`}>
              Jabón para Manos
            </Link>
            <Link to="/jabon-corporal" className={`${navItemClass} ${underlineClass}`}>
              Jabón liquido corporal
            </Link>
            <Link to="/detergentes" className={`${navItemClass} ${underlineClass}`}>
              Detergentes y mas
            </Link>
            <Link to="/" className={`${navItemClass} ${underlineClass}`}>
              Contacto
            </Link>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2 shadow">
            <Link to="/" className={`${navItemClass} ${underlineClass}`}>
                Inicio
            </Link>
            <Link to="/jabon-solido" className={`${navItemClass} ${underlineClass}`}>
                Jabón solido
            </Link>
            <Link to="/jabon-manos" className={`${navItemClass} ${underlineClass}`}>
                Jabón para Manos
            </Link>
            <Link to="/jabon-corporal" className={`${navItemClass} ${underlineClass}`}>
                Jabón liquido corporal
            </Link>
            <Link to="/detergentes" className={`${navItemClass} ${underlineClass}`}>
                Detergentes y mas
            </Link>
            <Link to="/" className={`${navItemClass} ${underlineClass}`}>
              Inicio
            </Link>
        </div>
      )}
    </nav>
  )
}