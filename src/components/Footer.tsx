import { Link } from "react-router-dom";
import { mdiFacebook, mdiWhatsapp, mdiInstagram } from "@mdi/js";
import Icon from "@mdi/react";
import Logo from "../assets/LogoFooter.svg";
import FlagVE from "../assets/Ven.png"; // Asegúrate de tener esta imagen

export const Footer = () => {
  const textStyles = `
    hover:text-forest
    hover:scale-105
    ease-in-out
    duration-100
    text-gray-600
    text-md
  `;
  const iconStyle = `
    hover:text-forest 
    hover:scale-125
    ease-in-out
    duration-200
    text-gray-900
  `;
  const titleStyle = `
    text-forest 
    font-semibold 
    text-lg
  `;

  return (
    <footer className="bg-teagreen text-white shadow-[0_-6px_6px_-4px_rgba(0,0,0,0.2)]">
      {/* Logo arriba */}
      <div className="flex flex-col items-center">
        <Link to="/" className="scale-90 md:scale-100">
          <img src={Logo} alt="Logo" className="max-h-40 md:my-8" />
        </Link>
        <p className={`text-center max-w-xs text-gray-900 text-md hover:text-forest`}>
          Cuidamos tu piel con ingredientes naturales y fórmulas que respetan el medio ambiente.
        </p>
      </div>

      <div className="w-full px-6 py-6 flex flex-col md:flex-row justify-evenly gap-12 text-center md:text-left">
        {/* <div className="flex-1  text-center">
          <h3 className={titleStyle}>Compañía</h3>
          <Link to="/contacto"><p className={textStyles}>Contacto</p></Link>
        </div> */}

        <div className="flex-1  text-center">
          <h3 className={titleStyle}>Productos</h3>
          <Link to="/jabon-liquido" ><p className={textStyles}>Jabón Líquido</p></Link>
          <Link to="/jabon-solido" ><p className={textStyles}>Jabón Sólido</p></Link>
          <Link to="/jabon-manos" ><p className={textStyles}>Jabones Líquidos Corporales</p></Link>
          <Link to="/detergente" ><p className={textStyles}>Detergentes</p></Link>
          <Link to="/otros" ><p className={textStyles}>Otros productos</p></Link>
        </div>

        <div className="flex-1  text-center">
          <h3 className={titleStyle}>Contacto</h3>
          <p className={textStyles}>familycare@gmail.com</p>
          <p className={textStyles}>+58 04144540890</p>
        </div>
      </div>


    {/* Barra inferior */}
      <div className="py-3 px-6 flex flex-col md:flex-row items-center justify-between">

        {/* Redes sociales */}
        <div className="flex space-x-4 mb-2 md:mb-0 order-1 md:order-2 md:w-1/3 justify-center">
          <a href="https://www.instagram.com/jabonesfamilycare/" className={iconStyle}>
            <Icon path={mdiInstagram} size={1.4} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61578006367166" className={iconStyle}>
            <Icon path={mdiFacebook} size={1.4} />
          </a>
          <a href="https://api.whatsapp.com/send/?phone=584144540890" className={iconStyle}>
            <Icon path={mdiWhatsapp} size={1.4} />
          </a>
        </div>

        {/* Hecho en Venezuela */}
        <div className="flex items-center space-x-2 order-2 md:order-1 md:w-1/3 justify-center">
          <img src={FlagVE} alt="Venezuela" className="h-10 w-auto rounded-sm" />
          <span className="text-forest text-sm">Hecho en Venezuela</span>
        </div>

        {/* Copyright */}
        <span className="text-forest text-sm order-3 md:w-1/3 text-center">
          © All rights reserved FamilyCare
        </span>
      </div>
    </footer>
  );
};
