import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import Logo from "../assets/Logo.png"

export const Footer=()=>{
  return (
    <footer className="bg-green-800 text-white pt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 pb-10">
        <div className="md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
          <img src={Logo} alt="Logo" className=" mb-4" />
          <p className="text-sm text-green-100">
            Cuidamos tu piel con ingredientes naturales y fórmulas que respetan el medio ambiente.
          </p>
          <div className="flex space-x-4 mt-4 justify-center w-full">
            <a href="#" className="hover:text-green-300">
              <Instagram />
            </a>
            <a href="#" className="hover:text-green-300">
              <Facebook />
            </a>
            <a href="#" className="hover:text-green-300">
              <Twitter />
            </a>
          </div>
        </div>

        {/* Enlaces */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <h4 className="text-green-300 font-semibold">Compañía</h4>
          <Link to="/contacto" className="hover:text-green-300 text-sm">Contacto</Link>
        </div>

        <div className="flex flex-col items-center md:items-start space-y-2">
          <h4 className="text-green-300 font-semibold">Productos</h4>
          <Link to="/productos" className="hover:text-green-300 text-sm">Jabón Líquido</Link>
          <Link to="/productos" className="hover:text-green-300 text-sm">Jabón Solidos</Link>
          <Link to="/productos" className="hover:text-green-300 text-sm">Jabones Liquidos Corporales</Link>
          <Link to="/productos" className="hover:text-green-300 text-sm">Detergentes y mas</Link>
        </div>

        <div className="flex flex-col items-center md:items-start space-y-2">
          <h4 className="text-green-300 font-semibold">Contacto</h4>
          <p className="text-sm">familycare@gmail.com</p>
          <p className="text-sm">+58 1234 1234567</p>
        </div>
      </div>

      {/* Footer inferior */}
      <div className="bg-green-900 py-4 text-sm text-green-200 px-6 flex justify-center md:flex-row justify-between items-center">
        <span>© All rights reserved FamilyCare</span>
      </div>
    </footer>
  );
}
