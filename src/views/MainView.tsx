import { NavBar } from "../components/NavBar"
import { Footer } from "../components/Footer"
import { Link } from "react-router-dom"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"

import { productos, testimonios, settings } from "../components/MainViewLists";
import type { Testimonio } from "../components/types";


export const MainView = () => {
 
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <NavBar/>
        <div className="w-full">
          {/* Sección Hero */}
          <section id="MainHero" className="relative bg-fixed bg-cover bg-center h-[80vh] flex items-center text-center">
            <div className=" bg-opacity-40 w-full h-full absolute top-0 left-0 z-10" />
            <div className="relative z-20 text-white max-w-4xl mx-auto px-4">
              <h1 className="text-6xl md:text-7xl font-extrabold leading-tight text-shadow-forest">Family Care</h1>
              <p className="text-2xl mt-4 text-shadow-forest italic">Productos para el cuidado que tu piel merece.</p>
            </div>
          </section>

          {/* Productos - carrusel */}
          <section className="text-center bg-white md:min-h-screen py-40 flex flex-col justify-center">
            <h2 className="text-5xl font-bold text-forest mb-4">Nuestros productos</h2>
            <p className="text-forest mb-10 md:m-0 mx-16 my-8 ">Conoce un poco sobre nuestros productos que con mucho amor y cariño traemos para ti.</p>
            <div className="max-w-screen mx-auto px-4">
              <Slider {...settings}>
                {productos.map((prod, i) => (
                  <div key={i} className="px-4 md:py-10 py-5">
                    <img src={prod.imagen} alt={prod.nombre} className="mx-auto h-[200px] object-contain" />
                    {/* <p className="mt-4 text-sm font-semibold text-forest">{prod.nombre}</p> */}
                  </div>
                ))}
              </Slider>
            </div>
          </section>

          {/* Sección Aliado Comercial */}
          <section id="MainContact" className="relative bg-fixed bg-cover bg-center h-[60vh] flex items-center">
            <div className="bg-opacity-50 w-full h-full absolute top-0 left-0 z-10" />
            <div className="relative z-20 text-white max-w-3xl mx-auto px-4">
              <h2 className="text-4xl font-bold leading-tight text-shadow-forest">Quieres contactarnos o saber mas de nosotros?</h2>
              <p className="mt-4 text-lg">¡Visita nuestras redes sociales o nuestro whatsapp!</p>
              <Link to="/contacto" className="inline-block mt-6 bg-teagreen text-forest font-bold px-6 py-2 rounded-md hover:bg-cyan-600 transition-colors">
                Contactanos!
              </Link>
            </div>
          </section>

          {/* Sección Testimonio */}
          <section className="bg-white text-center md:min-h-screen md:py-20 py-40 flex flex-col justify-center">
            <h3 className="text-3xl text-forest font-bold md:mb-8 md:mx-0 mb-16 mx-1">Lo que dicen nuestros clientes</h3>
            <div className="max-w-screen mx-auto px-4">
              <Slider {...settings}>
                {testimonios.filter((t): t is Testimonio => t !== undefined).map((t, i) => (
                  <div key={i} className="px-4">
                    <img src={t.imagen} alt="cliente" className="mx-auto w-32 h-32 rounded-full mb-4 object-cover" />
                    <p className="text-gray-600 mb-2">{t.texto}</p>
                    <p className="text-forest font-bold">{t.nombre}</p>
                    <p className="text-sm text-gray-500">{t.ciudad}</p>
                  </div>
                ))}
              </Slider>
            </div>
          </section>
        </div>
        <Footer/>
      </div>
    </>
  )
}
