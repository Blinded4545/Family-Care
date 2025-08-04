import { NavBar } from "../components/NavBar"
import { Footer } from "../components/Footer"
import { ProductLister } from "../components/ProductLister"
import type { ProductCategory } from "../components/types"

import suavrojo from "../assets/Products/suavizanterojo.png"
import suavazul from "../assets/Products/suavizanteazul.png"
import desen from "../assets/Products/desengrasante.png"
import lavalimon from "../assets/Products/lavaplatoslimon.png"
import lavamanda from "../assets/Products/lavaplatosmandarina.png"
import cera from "../assets/Products/cera.png"
import cloro from "../assets/Products/cloro.png"
import banos from "../assets/Products/lavapocetas.png"

export const Otros = () => {  

  const categories: ProductCategory[] = [
    {
      category: "Lavaplatos",
        products: [
          { name: "Limon", image: lavalimon },
          { name: "Mandarina", image: lavamanda }
        ],
    },
    {
      category: "Cera",
        products: [
          { name: "Cera", image: cera }
        ],
    },
    {
      category: "Suavizantes",
        products: [
          { name: "Floral", image: suavrojo },
          { name: "Bebe", image: suavazul },
        ],
    },
    {
      category: "Desengrasante",
        products: [
          { name: "Desengrasante", image: desen }
        ],
    },
    {
      category: "Cloro",
        products: [
          { name: "Cloro", image: cloro }
        ],
    },
    {
      category: "Lava baños",
        products: [
          { name: "Limpiador de pocetas", image: banos }
        ],
    }
  ]
  
  return (
    <>
        <NavBar/>
        <main id='Otros'>
          <section
            id='MainSection'
            className="h-[500px] bg-fixed bg-center bg-cover flex items-center justify-center"
          >
            <h2 className="text-white text-center text-5xl md:text-6xl font-bold drop-shadow-lg text-shadow-forest">
              Nuestros otros productos
            </h2>
          </section>
          <section className="my-10 bg-bgf0 py-15">
            <ProductLister categories={categories}></ProductLister>
          </section>
        </main>
        <Footer/>
    </>
  )
}
