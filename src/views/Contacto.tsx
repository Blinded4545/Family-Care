import { NavBar } from "../components/NavBar"
import { Footer } from "../components/Footer"
import Icon from "@mdi/react"
import { mdiInstagram, mdiFacebook, mdiWhatsapp } from "@mdi/js"
import ContactImg from "../assets/Backgrounds/ContactImg.png"

export const Contacto = () => {
  return (
      <div className="min-h-screen flex flex-col">
        <NavBar/>
        <main id='ContactMain'>
          <section
            id='MainSection'
            className="h-[500px] bg-fixed bg-center bg-cover flex items-center justify-center"
          >
            <h2 className="text-white text-center text-5xl md:text-6xl font-bold drop-shadow-lg text-shadow-forest">
              ¡Contactanos!
            </h2>
          </section>
          <section className="flex flex-col md:flex-row justify-center items-center max-w-6xl md:max-w-full mx-auto p-8 gap-8">
            <img
              id="ContactImg"
              src={ContactImg}
              alt="Contáctanos"
              className="w-full md:w-1/3 object-cover rounded-lg shadow-lg"
            />
            <div className="w-full md:w-2/5">
              <h2 className="text-3xl font-semibold text-green-600 mb-4">¡Síguenos!</h2>
              <p className="text-gray-700">
                Comparte, comenta y conoce más de nuestros productos!
              </p>
              <div className="grid grid-cols-3 gap-4 m-10">
                <a href="https://www.facebook.com/profile.php?id=61578006367166" className="bg-blue-100 hover:bg-blue-200 rounded-lg p-4 text-center">
                  <i className=" text-2xl text-blue-600">
                    <Icon path={mdiFacebook}></Icon>
                  </i>
                  <p className="mt-2 text-md text-blue-800 hidden md:inline">Facebook</p>
                </a>
                <a href="https://www.instagram.com/jabonesfamilycare/" className="bg-pink-100 hover:bg-pink-200 rounded-lg p-4 text-center">
                  <i className=" text-2xl text-bubblegum">
                    <Icon path={mdiInstagram}></Icon>
                  </i>
                  <p className="mt-2 text-md text-pink-700 hidden md:inline">Instagram</p>
                </a>
                <a href="#" className="bg-green-100 hover:bg-green-200 rounded-lg p-4 text-center">
                  <i className=" text-2xl text-forest">
                    <Icon path={mdiWhatsapp}></Icon>
                  </i>
                  <p className="mt-2 text-md text-green-700 hidden md:inline">Whatsapp</p>
                </a>
              </div>
            </div>
          </section>
          
        </main>
        <Footer/>
      </div>
  )
}
