import { Link } from "react-router-dom";
import { mdiFacebook, mdiWhatsapp, mdiInstagram } from "@mdi/js";
import Icon from "@mdi/react";
import Logo from "../assets/Logo.svg"

export const Footer=()=>{

  const textStyles=`
    hover:text-forest 
    text-gray-600
    text-md
  `
  const iconStyle=`
    hover:text-forest 
    text-gray-900
  `
  const titleStyle=`
    text-forest 
    font-semibold 
    text-xl
  `

  return (
    <footer className="bg-teagreen text-white pt-10 shadow-[0_-6px_6px_-4px_rgba(0,0,0,0.2)]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 pb-10">
        <div className="md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
          <Link to="/" className="scale-75 md:scale-100">
            <img src={Logo} alt="Logo" className="mb-0 md:mb-4"/>
          </Link>
          <p className={`text-md w-xs ${textStyles}`}>
            Cuidamos tu piel con ingredientes naturales y fórmulas que respetan el medio ambiente.
          </p>
          <div className="flex space-x-4 mt-4 justify-center w-full">
            <a href="#" className={`${iconStyle}`}>
              <Icon path={mdiInstagram} size={1.5}></Icon>
            </a>
            <a href="#" className={`${iconStyle}`}>
              <Icon path={mdiFacebook} size={1.5}></Icon>
            </a>
            <a href="#" className={`${iconStyle}`}>
              <Icon path={mdiWhatsapp} size={1.5}></Icon>
            </a>
          </div>
        </div>

        {/* Enlaces */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <h3 className={`${titleStyle}`}>Compañía</h3>
          <Link to="/contacto" className={`${textStyles}`}>Contacto</Link>
        </div>

        <div className="flex flex-col items-center md:items-start space-y-2">
          <h3 className={`${titleStyle}`}>Productos</h3>
          <Link to="/jabon-liquido" className={`${textStyles}`}>Jabón Líquido</Link>
          <Link to="/jabon-solido" className={`${textStyles}`}>Jabón Solidos</Link>
          <Link to="/jabon-manos" className={`${textStyles}`}>Jabones Liquidos Corporales</Link>
          <Link to="/detergente" className={`${textStyles}`}>Detergentes</Link>
          <Link to="/desinfectantes" className={`${textStyles}`}>Desinfectantes</Link>
        </div>

        <div className="flex flex-col items-center md:items-start space-y-2">
          <h2 className={`${titleStyle}`}>Contacto</h2>
          <p className={`${textStyles}`}>familycare@gmail.com</p>
          <p className={`${textStyles}`}>+58 1234 1234567</p>
        </div>
      </div>

      {/* Footer inferior */}
      <div className="bg-teagreen py-4 text-sm text-forest px-6 flex justify-center md:flex-row items-center">
        <span>© All rights reserved FamilyCare</span>
      </div>
    </footer>
  );
}
