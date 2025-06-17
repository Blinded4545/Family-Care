import { NavBar } from "../components/NavBar"
import { Footer } from "../components/Footer"

export const MainView = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <NavBar/>
        <div className="text-red-500 text-3xl">Hola</div>
        <Footer/>
      </div>
    </>
  )
}
