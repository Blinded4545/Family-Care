import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../assets/Logo.svg"

export const NavBar = ()=>{
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItemClass = "relative group text-gray-700 hover:text-blueberry h-full"

  const underlineClass = `
    after:content-['']
    after:absolute
    after:bottom-[-8px]
    after:right-0
    after:w-0
    after:h-[2px]
    after:bg-blueberry
    after:transition-all
    after:duration-300
    after:origin-bottom-left
    hover:after:origin-bottom-right
    hover:after:w-full
  `

  return (
    <nav className="bg-white shadow-md sticky top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="mx-24">
            <img src={Logo} alt="Logo" className="h-32 p-0" />
          </Link>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-16 mx-15">
            <div className="group relative h-full flex items-center">
              <span className={`${navItemClass} ${underlineClass}`}>Jabones</span>
              <div className="absolute left-0 top-full hidden group-hover:flex transition-all duration-300 transform flex-col bg-white shadow-md rounded-md z-50 w-48 my-2">
                <Link to="/jabon-manos" className="px-4 py-2 hover:bg-gray-100 text-sm rounded-md">Jabón para manos</Link>
                <Link to="/jabon-solido" className="px-4 py-2 hover:bg-gray-100 text-sm rounded-md">Jabón en barra</Link>
                <Link to="/jabon-liquido" className="px-4 py-2 hover:bg-gray-100 text-sm rounded-md">Jabón líquido corporal</Link>
              </div>
            </div>

            <div className="group relative h-full flex items-center">
              <span className={`${navItemClass} ${underlineClass}`}>Limpiadores</span>
              <div className="absolute left-0 top-full hidden group-hover:flex transition-all duration-300 transform flex-col bg-white shadow-md rounded-md z-50 w-48 my-2">
                <Link to="/detergente" className="px-4 py-2 hover:bg-gray-100 text-sm rounded-md">Detergentes</Link>
                <Link to="/desinfectantes" className="px-4 py-2 hover:bg-gray-100 text-sm rounded-md">Desinfectantes</Link>
              </div>
            </div>

            <Link to="/contacto" className={`${navItemClass} ${underlineClass}`}>
              Contacto
            </Link>
          </div>
        </div>
      </div>

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
            <Link to="/jabon-liquido" className={`${navItemClass} ${underlineClass}`}>
                Jabón liquido corporal
            </Link>
            <Link to="/detergentes" className={`${navItemClass} ${underlineClass}`}>
                Detergentes y mas
            </Link>
            <Link to="/contacto" className={`${navItemClass} ${underlineClass}`}>
              Contacto
            </Link>
        </div>
      )}
    </nav>
  )
}